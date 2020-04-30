'use strict'
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.renderRegistros();
});

//  guardar formulario en base de datos
document.getElementById('app-form')
    .addEventListener('submit', e => {
        if (!estado.id && estado.id !== 0) {
            estado.registro.dni = document.getElementById('dni').value;
            estado.registro.nombre = document.getElementById('nombre').value;
            estado.registro.movil = document.getElementById('movil').value;
            estado.registro.eliminado = false;

            // estado.registros representa la tabla de la BD
            estado.registros.push(estado.registro);
            estado.registro = {};
        } else { // actualiza
            estado.id = '';
            document.getElementById('boton-form').textContent = " Guardar Registro";
        }
        document.getElementById('app-form').reset();
        ui.renderRegistros();
        e.preventDefault();
    })

document.getElementById('app-cards')
    .addEventListener('click', e => {
        if (e.target.classList.contains('eliminarme')) {
            deleteItem(e.target.getAttribute('id'));
        }
        e.preventDefault();
    });

function deleteItem(id) {
    estado.registros.forEach((item, index) => {
        if (index == id) {
            estado.registros[index].eliminado = true;
        }
    });
    ui.renderRegistros();
}

document.getElementById('app-cards')
    .addEventListener('click', e => {
        if (e.target.classList.contains('actualizame')) {
            preActualizar(e.target.getAttribute('id'));
        }
        e.preventDefault();
    });

function preActualizar(id) {
    var ide = parseInt(id, 10);
    estado.id = ide;
    document.getElementById('boton-form').textContent = "Actualizar";

    document.getElementById('dni').value = estado.registros[ide].dni;
    document.getElementById('nombre').value = estado.registros[ide].nombre;
    document.getElementById('movil').value = estado.registros[ide].movil;
}

function actualizar(event) {
    const { name, value } = event.target;
    if (estado.id || estado.id === 0) {
        if (estado.registros.length) {
            estado.registros[estado.id][`${name}`] = value;
        }
    }
}

