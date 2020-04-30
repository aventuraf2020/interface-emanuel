(function (window, document) {
    'use strict'
    var inicio = function () {
        var estado = {
            registro: {},
            registros: [],
            id: '',
        };
        return estado;
    }
    if (typeof window.estado === 'undefined') {
        window.estado = inicio();
    }
})(window, document)