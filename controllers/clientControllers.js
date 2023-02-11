import { clientServices } from "../service/client-service.js";

const createNewLine = (nombre, email, id) => {
  const line = document.createElement('tr');
  const content = `
          <td class="td" data-td>
          ${nombre}
          </td>
          <td>${email}</td>
          <td>
            <ul class="table__button-control">
              <li>
                <a href="../screens/editar_cliente.html?/${id}" class="simple-button simple-button--edit">Editar</a>
              </li>
              <li>
                <button class="simple-button simple-button--delete" type="button" id="${id}">
                  Eliminar
                </button>
              </li>
            </ul>
          </td>
          `;
  line.innerHTML = content;
  const btn = line.querySelector('button');
  btn.addEventListener('click', () => {
    const id = btn.id;
    clientServices.deleteClient(id).then((response) => {
      console.log(response);
    }).catch((err) => alert("Ocurrio un error"));
  });
  return line;
};

const table = document.querySelector('[data-table]');

clientServices.listClients().then((data) => {
  data.forEach(({ nombre, email, id }) => {
    const newLine = createNewLine(nombre, email, id);
    table.appendChild(newLine);
  });
}).catch((error) => alert('Ocurrio un error'));
