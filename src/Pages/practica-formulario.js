document.addEventListener('DOMContentLoaded', () => {
    // Eventos de prueba
    const lv_textName = document.getElementById('textName');
    if (lv_textName) {
        lv_textName.addEventListener('click', () => {
            alert('Probando evento 1');
        });
    }

    const lv_textEmail = document.getElementById('textEmail');
    if (lv_textEmail) {
        lv_textEmail.addEventListener('click', () => {
            alert('Probando evento 2');
        });
    }

    // Select de país (admite id="pais" o id="selectPais")
    const selectPais = document.querySelector('#pais, #selectPais');
    const countryColors = {
        ec: '#FFF4B1',
        pe: '#FFD6D6',
        cl: '#D6ECFF',
        es: '#FFF0D6',
        otro: '#E6FFE6'
    };
    const defaultBackground = document.body.style.backgroundColor;

    if (selectPais) {
        // Cambio de color de fondo según país
        selectPais.addEventListener('change', (event) => {
            const color = countryColors[event.target.value] ?? defaultBackground;
            document.body.style.backgroundColor = color;
        });

        // Color y alerta del select
        selectPais.addEventListener('change', () => {
            selectPais.style.color = 'red';
            alert('Probando evento 3');
        });
    }
});