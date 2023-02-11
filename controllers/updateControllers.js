import { clientServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

const obtainInformation = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');
    const perfil = await clientServices.detailClient(id)
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    
};

obtainInformation();


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientServices.updateClient(nombre, email, id).then(() => {
        window.location.href="/screens/edicion_concluida.html";
    });
});