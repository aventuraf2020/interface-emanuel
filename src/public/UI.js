'use strict'
class UI {
    renderRegistros() {
        const cardContainer = document.getElementById('app-cards');
        cardContainer.innerHTML = '';
        estado.registros.forEach((item, index) => {
            if (!item.eliminado) {
                const div = document.createElement('div');
                div.className = '';
                div.innerHTML = `
                <table class="table">
                        <thead>
                            <tr>
                                <th>n°</th>
                                <th>Dni</th>
                                <th>Nombre</th>
                                <th>Movil</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    <tr>
                        <td>${index}</td>
                        <td>${item.dni}</td>
                        <td>${item.nombre}</td>
                        <td>${item.movil}</td>
                        <td>
                            <a href="" class="btn btn-info actualizame" id="${index}">Edit</a>
                            <a href="" class="btn btn-danger eliminarme" id="${index}">Delete</a>
                        </td>
                    </tr>
                    </table>
                    `;
                cardContainer.appendChild(div);
            }
        });
    }


    clearForm() {
        document.getElementById('trabajador-form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} mensaje`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.mititulo');
        const miMensaje = document.querySelector('.mimensaje');
        container.insertBefore(div, miMensaje);

        setTimeout(() => {
            document.querySelector('.mensaje').remove();
        }, secondsToRemove);
    } I
}