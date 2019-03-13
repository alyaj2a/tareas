new Vue({

    el: '#taskApp',
    data: {
        nameApp: 'Tareas Vue.js',
        tareas: [
            {
                titulo: 'Tarea 1',
                hecho: true
            },
            {
                titulo: 'Tarea 2',
                hecho: false
            },
            {
                titulo: 'Tarea 3',
                hecho: true
            }
        ]
    },
    methods: {
        eliminarTarea: function (tarea) {

            this.tareas.splice(this.tareas.indexOf(tarea),1);

        },
        agregarTarea: function (e) {
            e.preventDefault();
            this.tareas.push({
                titulo: this.tareas.titulo,
                hecho: false
            });
            this.tareas.titulo='';

        }
    }

});