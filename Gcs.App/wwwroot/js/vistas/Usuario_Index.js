const MODELO_BASE = {
    idUsuario: 0,
    nombre: "",
    correo: "",
    telefono: "",
    idRol: 0,
    esActivo: 1,
    urlFoto: ""
}



function grid() {
    let tablaData = $('#tbdata').DataTable({
        responsive: true,
         "ajax": {
             "url": '/Usuario/Lista',
             "type": "GET",
             "datatype": "json"
         },
         "columns": [
             { "data": "idUsuario", "visible": false, "searchable": false },
             {
                 "data": "urlFoto", render: function (data) {
                     return `<img style="height:60px" src=${data}/>`
                 }, title: "Imagen"
             },
             { "data": "nombre" , title: "Nombre"},
             { "data": "correo", title: "Correo" },
             { "data": "telefono", title: "Teléfono" },
             { "data": "nombreRol", title: "Rol" },                        
             {
                 "data": "esActivo", render: function (data) {
                     if (data == 1) {
                         return '<span class="badge badge-info">Activo</span>'
                     } else {
                         return '<span class="badge badge-danger">No Activo</span>'  
                     }
                 }, title: "Estado"
             },
             {
                 "defaultContent": '<button class="btn btn-primary btn-editar btn-sm mr-2"><i class="fas fa-pencil-alt"></i></button>' +
                     '<button class="btn btn-danger btn-eliminar btn-sm"><i class="fas fa-trash-alt"></i></button>',
                 "orderable": false,
                 "searchable": false,
                 "width": "80px", title: "Acciones"
             }
         ],
         order: [[0, "desc"]],
        dom: "Bfrtip",
        buttons: [
            {
                text: 'Exportar Excel',
                extend: 'excelHtml5',
                title: '',
                filename: 'Reporte Usuarios',
                exportOptions: {
                    columns: [2, 3, 4, 5, 6]
                }
            }, 'pageLength'
        ],
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
        },
    });
}