//Fetch API
const listClients = () => fetch('http://localhost:3000/perfil').then(response => response.json());

const createClient = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

const deleteClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

const detailClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((response) =>
        response.json()
    );
};

const updateClient = async (nombre, email, id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, email })
        });
        return respuesta;
    } catch (err) {
        return console.log(err);
    }
}

export const clientServices = {
    listClients,
    createClient,
    deleteClient,
    detailClient,
    updateClient,
};

