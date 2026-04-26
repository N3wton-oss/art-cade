/* --- BASE DE DATOS DEL EQUIPO --- */
const teamData = {
    alan: {
        name: "ALAN",
        style: "style-alan",
        portrait: "img/A.jpeg",
        log: "Sistemas de hardware optimizados. Integridad de pantallas",
        directives: "Restaurar componentes y asegurar flujo de energía constante.",
        protocol: "Prioridad : Funcionalidad de arcades"
    },
    nataly: {
        name: "NATALY",
        style: "style-nataly",
        portrait: "img/N.jpeg",
        log: "Coherencia estética en parámetros óptimos.",
        directives: "Supervisar el diseño visual y la identidad de marca de la zona.",
        protocol: "Prioridad: Diseño de la marca y dibujo de retratos"
    },
    paola: {
        name: "PAOLA",
        style: "style-paola",
        portrait: "img/P.jpeg",
        log: "Frecuencias de audio ecualizadas.",
        directives: "Edición y narración de comerciales.",
        protocol: "Prioridad: Dicción y narración de comerciales."
    },
    valeria: {
        name: "VALERIA",
        style: "style-valeria",
        portrait: "img/V.jpeg",
        log: "Edición y dirección",
        directives: "Creación de elementos visuales y dirección de comerciales.",
        protocol: "Prioridad V: Calidad gráfica y fluidez de comerciales."
    },
    valeriam: {
        name: "VALERIA M.",
        style: "style-valeriam",
        portrait: "img/VM.jpeg",
        log: "Diseño de tripticos y panfletos",
        directives: "Diseño de materiales gráficos",
        protocol: "Prioridad: Legibilidad y composición geométrica."
    },
    irving: {
        name: "IRVING",
        style: "style-irving",
        portrait: "img/I.jpeg",
        log: "Rutas de suministro trazadas. Distribución de recursos en curso.",
        directives: "Coordinar la logística física y el ensamblaje de módulos.",
        protocol: "Prioridad L: Eficiencia en tiempos y seguridad de transporte."
    },
    tu: {
        name: "ISAAC",
        style: "style-tu",
        portrait: "img/Is.png",
        log: "Arquitectura de datos estable. Scripts de interacción operativos.",
        directives: "Desarrollo del núcleo web y optimización de algoritmos.",
        protocol: "Prioridad Alpha: Rendimiento del sitio y limpieza de código."
    }
};

/* --- FUNCIONES LÓGICAS --- */

function openProfile(person) {
    const data = teamData[person];
    if (!data) return;

    const modal = document.getElementById('modal-perfil');
    const content = document.getElementById('content-perfil');

    content.className = 'modal-content ' + data.style;

    // 2. Inyectar Textos
    document.getElementById('p-name').innerText = data.name;
    document.getElementById('p-text1').innerText = data.log;
    document.getElementById('p-text2').innerText = data.directives;
    document.getElementById('p-text3').innerText = data.protocol;

    document.getElementById('p-img').src = data.portrait;

    
    modal.style.display = 'flex';
}

function closeProfile() {
    document.getElementById('modal-perfil').style.display = 'none';
}

/* --- CIERRE EXTRA (UX) --- */


function handleOutsideClick(event) {
    const modal = document.getElementById('modal-perfil');
    if (event.target === modal) {
        closeProfile();
    }
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeProfile();
});