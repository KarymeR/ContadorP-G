document.addEventListener('DOMContentLoaded', function(){
    agregarPerro();
    agregarGato();
    
    separar();

    limpiar();
});

function agregarPerro() {
    const perro = document.querySelector('#perro');

    perro.addEventListener('click', function(){
        let mascotas = document.getElementById('mascotas').value;
        document.getElementById('mascotas').value = mascotas + "Perro ";
    });
}

function agregarGato() {
    const gato = document.querySelector('#gato');

    gato.addEventListener('click', function(){
        let mascotas = document.getElementById('mascotas').value;
        document.getElementById('mascotas').value = mascotas + "Gato ";
    });
}

function separar() {
    const separar = document.querySelector('#separar');

    separar.addEventListener('click', function(){
        let mascotas = document.getElementById('mascotas').value;

        // Limpiar espacios
        mascotas = mascotas.trim();
        mascotas = mascotas.split(' ');
        console.log(mascotas);


        // Serpar Perros y gatos
        let perros = [];
        let gatos = [];

        if(mascotas.lenght !== 0) {
            mascotas.forEach(mascota => {
                switch(mascota){
                    case "Perro":
                        perros.push("Perro");
                        break;
                    case "Gato":
                        gatos.push("Gato");
                        break;
                }
            });
        }

        // Mostar resultados
        const lblPerro = document.createElement('LABEL');
        lblPerro.id = 'lblPerro'
        lblPerro.innerHTML = "Hay " + perros.length + " perros";
        const txtPerro = document.createElement('TEXTAREA');
        txtPerro.id = 'txtPerro'
        txtPerro.value = perros;

        const lblGato = document.createElement('LABEL');
        lblGato.id = 'lblGato'
        lblGato.innerHTML = "Hay " + gatos.length + " gatos";
        const txtGato = document.createElement('TEXTAREA');
        txtGato.id = 'txtGato'
        txtGato.value = gatos;

        const contenedor = document.getElementById('contenedor');
        contenedor.appendChild(lblPerro);
        contenedor.appendChild(txtPerro);
        contenedor.appendChild(lblGato);
        contenedor.appendChild(txtGato);
    });
}

function limpiar() {
    const contar = document.querySelector('#limpiar');

    contar.addEventListener('click', function(){
        const frutas = document.getElementById('mascotas');
        document.getElementById('mascotas').value = "";

        const contenedor = document.getElementById('contenedor');

        const lblPerro = document.getElementById('lblPerro');
        contenedor.removeChild(lblPerro);
        const txtPerro = document.getElementById('txtPerro');
        contenedor.removeChild(txtPerro);

        const lblGato = document.getElementById('lblGato');
        contenedor.removeChild(lblGato);
        const txtGato = document.getElementById('txtGato');
        contenedor.removeChild(txtGato);
    })
}