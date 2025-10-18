// ===== CAMBIO DE TEMA (CLARO/OSCURO) =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'Cambiar Tema ☀️';
}

// Función para cambiar el tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Cambiar el texto del botón según el tema activo
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Cambiar Tema ☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Cambiar Tema 🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ===== ANIMACIÓN DE SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MANEJO DEL FORMULARIO DE CONTACTO =====
const appointmentForm = document.getElementById('appointmentForm');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu solicitud! Te contactaremos pronto para confirmar tu cita. 🐾');

    // Limpiar el formulario
    appointmentForm.reset();
});

// ===== ANIMACIÓN AL HACER SCROLL (EFECTO FADE-IN) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas de servicios y miembros del equipo
document.querySelectorAll('.service-card, .team-member').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== EFECTO HOVER EN TARJETAS (OPCIONAL) =====
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '5px solid #4A90E2';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// ===== MENSAJE DE BIENVENIDA EN CONSOLA =====
console.log('%c¡Bienvenido a Veterinaria Patitas Felices! 🐾', 'color: #4A90E2; font-size: 20px; font-weight: bold;');
console.log('%cCuidamos a tus mascotas con amor y profesionalismo', 'color: #7ED321; font-size: 14px;');
