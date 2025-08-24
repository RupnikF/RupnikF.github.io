//index.js

// Smooth scroll for browsers without native support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

const translations = {
    en: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About",
        services: "Services",
        contact: "Contact Me",
        greeting: "Hello, I'm",
        subheading: "A Computer Engineer with 2 years of Experience.",
        hire: "Hire Me",
        resume: "Get Resume",
        projects: "Projects",
        project1: "Project 1",
        project2: "Project 2",
        project3: "Project 3",
        projectDesc: "Brief project description. Explain the technologies used and the project goal.",
        aboutMe: "About Me",
        getInTouch: "Get In Touch",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone",
        writeMessage: "Write your message",
        sendMessage: "Send Message",
        myContact: "My Contact Details",
        email: "EMAIL",
        phone: "PHONE",
        fax: "FAX",
        address: "ADDRESS"
    },
    es: {
        home: "Inicio",
        portfolio: "Portafolio",
        about: "Sobre mí",
        services: "Servicios",
        contact: "Contáctame",
        greeting: "Hola, soy",
        subheading: "Ingeniero en Computación con 2 años de experiencia.",
        hire: "Contrátame",
        resume: "Obtener CV",
        projects: "Proyectos",
        project1: "Proyecto 1",
        project2: "Proyecto 2",
        project3: "Proyecto 3",
        projectDesc: "Descripción breve del proyecto. Explica las tecnologías usadas y el objetivo del proyecto.",
        aboutMe: "Sobre mí",
        getInTouch: "Contáctame",
        yourName: "Tu nombre",
        yourEmail: "Tu correo",
        yourPhone: "Tu teléfono",
        writeMessage: "Escribe tu mensaje",
        sendMessage: "Enviar mensaje",
        myContact: "Mis datos de contacto",
        email: "CORREO",
        phone: "TELÉFONO",
        fax: "FAX",
        address: "DIRECCIÓN"
    }
};

function translatePage(locale = "es") {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (el.placeholder !== undefined && el.placeholder !== "") {
            el.placeholder = translations[locale][key] || translations["en"][key] || key;
        } else if (el.value !== undefined && el.type === "submit") {
            el.value = translations[locale][key] || translations["en"][key] || key;
        } else {
            el.textContent = translations[locale][key] || translations["en"][key] || key;
        }
    });
}

// Llama a la función con el locale deseado
translatePage("es");