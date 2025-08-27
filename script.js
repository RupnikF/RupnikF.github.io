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
        writeMessage: "Write your message",
        sendMessage: "Send Message",
        myContact: "My Contact Details",
        pEmail: "PERSONAL EMAIL ",
        uEmail: "UNIVERSITY EMAIL",
        dockerMonitorTitle: "Docker Monitor",
        dockerMonitorDesc: "My final course project developed at ITBA. This private repository showcases a Docker monitoring tool built primarily with Go, complemented by Python and Shell scripting. It is designed to monitor and manage Docker containers, providing insights and operational automation. The project demonstrates my ability to architect multi-language systems, utilize modern DevOps practices, and deliver robust monitoring solutions.",
        taskComposerTitle: "Task Composer",
        taskComposerDesc: "TaskComposer is a microservices-based project designed to orchestrate and manage distributed tasks efficiently. Developed primarily in Go and Java, with supporting components in Python and Shell, it demonstrates my proficiency in building scalable, modular systems using modern software engineering practices. The architecture leverages containerization and automation to ensure reliability and adaptability, making it a robust solution for complex workflow management.",
        reviewRealmTitle: "Review Realm",
        reviewRealmDesc: "ReviewRealm is a full-stack web application project focused on modern RESTful API design with HATEOAS principles. The backend is built using Java with Spring and Hibernate, while the frontend leverages Angular 16 for a dynamic and responsive user experience. In this project, I contributed to both backend and frontend development, gaining hands-on experience with robust API creation, seamless client-server integration, and modern web application architecture.",
        bizcochoTitle: "Bizcocho OS",
        bizcochoDesc: "bizcocho_OS is a low-level operating systems project developed as part of the Operating Systems course. Written primarily in C and Assembly, this project implements core OS concepts including process scheduling, memory management, and parallel process execution. Through this work, I gained hands-on experience with systems programming close to the hardware, optimizing memory usage, and designing efficient schedulers to support multitasking environments.",
        bandoruTitle: "Bandoru",
        bandoruDesc: "Bandoru is a cloud service designed for efficient and secure code sharing, developed as part of my AWS-focused coursework. The project leverages TypeScript and HTML for the frontend, while Python powers the backend services. Infrastructure as Code is implemented using HCL and Docker, enabling scalable deployment on AWS. Through Bandoru, I gained practical experience in cloud architecture, secure file handling, and automated deployments.",
        stronkTitle: "Stronk",
        stronkAppTitle: "Stronk App",
        stronkDesc: "Stronk is a comprehensive fitness application available as both a web platform and a native Android app. The web interface, developed with Vue.js and JavaScript, offers a responsive and interactive experience for tracking workouts and progress. The Android application, built in Kotlin, provides robust mobile functionality for managing exercises and routines anywhere, anytime. This project demonstrates my cross-platform development skills, with a focus on user-centered design and seamless integration between web and mobile experiences.",
        aboutMeDesc: "I am a versatile software developer with a passion for building robust, real-world solutions across the technology stack. My experience spans from low-level systems programming in C and Assembly to designing scalable cloud services and modern web and mobile applications in languages such as Go, Java, Python, Kotlin, TypeScript, and JavaScript. I have developed operating system components, architected microservices, and delivered full-stack applications for both web and Android platforms. My hands-on work with AWS, Infrastructure as Code, and DevOps practices complements my strong foundation in user-centric design and cross-platform development. Whether I’m optimizing memory usage in a custom OS or deploying scalable solutions in the cloud, I thrive on tackling complex challenges and continuously expanding my skill set."
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
        writeMessage: "Escribe tu mensaje",
        sendMessage: "Enviar mensaje",
        myContact: "Mis datos de contacto",
        pEmail: "CORREO PERSONAL",
        uEmail: "CORREO UNIVERSITARIO",
        dockerMonitorTitle: "Docker Monitor",
        dockerMonitorDesc: "Mi proyecto final de curso desarrollado en ITBA. Este repositorio privado presenta una herramienta de monitoreo de Docker construida principalmente en Go, complementada con scripts en Python y Shell. Está diseñada para monitorear y gestionar contenedores Docker, brindando información y automatización operativa. El proyecto demuestra mi capacidad para diseñar sistemas en varios lenguajes, aplicar prácticas modernas de DevOps y entregar soluciones de monitoreo robustas.",
        taskComposerTitle: "Task Composer",
        taskComposerDesc: "TaskComposer es un proyecto basado en microservicios diseñado para orquestar y gestionar tareas distribuidas de manera eficiente. Desarrollado principalmente en Go y Java, con componentes adicionales en Python y Shell, demuestra mi experiencia en la construcción de sistemas escalables y modulares utilizando prácticas modernas de ingeniería de software. La arquitectura aprovecha la contenedorización y la automatización para garantizar la fiabilidad y la adaptabilidad, convirtiéndolo en una solución robusta para la gestión de flujos de trabajo complejos.",
        reviewRealmTitle: "Review Realm",
        reviewRealmDesc: "ReviewRealm es un proyecto de aplicación web full-stack enfocado en el diseño de APIs RESTful modernas con principios HATEOAS. El backend está desarrollado en Java utilizando Spring e Hibernate, y el frontend utiliza Angular 16 para una experiencia de usuario dinámica y responsiva. En este proyecto participé tanto en el desarrollo del backend como del frontend, adquiriendo experiencia práctica en la creación de APIs robustas, integración fluida entre cliente y servidor, y arquitectura moderna de aplicaciones web.",
        bizcochoTitle: "Bizcocho OS",
        bizcochoDesc: "bizcocho_OS es un proyecto de sistemas operativos de bajo nivel desarrollado para la materia de Sistemas Operativos. Escrito principalmente en C y Assembly, este proyecto implementa conceptos fundamentales del sistema operativo, como la planificación de procesos, la gestión de memoria y la ejecución de procesos en paralelo. A través de este trabajo adquirí experiencia práctica en programación de sistemas cercana al hardware, optimización del uso de memoria y diseño de planificadores eficientes para entornos multitarea.",
        bandoruTitle: "Bandoru",
        bandoruDesc: "Bandoru es un servicio en la nube diseñado para compartir código de manera eficiente y segura, desarrollado como parte de mi formación enfocada en AWS. El proyecto utiliza TypeScript y HTML para el frontend, mientras que los servicios backend están desarrollados en Python. La infraestructura como código se implementa con HCL y Docker, permitiendo un despliegue escalable en AWS. Gracias a Bandoru, obtuve experiencia práctica en arquitectura cloud, manejo seguro de archivos y despliegues automatizados.",
        stronkTitle: "Stronk",
        stronkAppTitle: "Stronk App",
        stronkDesc: "Stronk es una aplicación integral de fitness disponible tanto como plataforma web como aplicación nativa para Android. La interfaz web, desarrollada con Vue.js y JavaScript, ofrece una experiencia interactiva y responsiva para registrar entrenamientos y progreso. La aplicación Android, construida en Kotlin, brinda funcionalidades móviles sólidas para gestionar ejercicios y rutinas en cualquier momento y lugar. Este proyecto demuestra mis habilidades en desarrollo multiplataforma, enfocadas en el diseño centrado en el usuario y la integración fluida entre experiencias web y móviles.",
        aboutMeDesc: "Soy un desarrollador de software versátil, apasionado por crear soluciones robustas y reales en todo el stack tecnológico. Mi experiencia abarca desde la programación de sistemas de bajo nivel en C y Assembly, hasta el diseño de servicios cloud escalables y aplicaciones web y móviles modernas en lenguajes como Go, Java, Python, Kotlin, TypeScript y JavaScript. He desarrollado componentes de sistemas operativos, arquitecturado microservicios y entregado aplicaciones full-stack tanto para web como para Android. Mi trabajo práctico con AWS, Infraestructura como Código y prácticas DevOps complementa mi sólida base en diseño centrado en el usuario y desarrollo multiplataforma. Ya sea optimizando el uso de memoria en un sistema operativo propio o desplegando soluciones escalables en la nube, disfruto enfrentar desafíos complejos y ampliar continuamente mis habilidades."
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

// --- Envío del formulario de contacto a Discord Webhook ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('.form-controls');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const message = inputs[2].value.trim();

        // Reemplaza esta URL por la de tu webhook de Discord
        const webhookUrl = 'https://discord.com/api/webhooks/1375575867035615412/FSD9vglEq8OkZlK_0xd8jn2KCCpdzkQnHoSKgJK8DvXahnXCiXO_9LIS4HPsrinfY6lA';

        const discordPayload = {
            content: `Nuevo mensaje de contacto:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(discordPayload)
            });
            if (response.ok) {
                alert('¡Mensaje enviado correctamente!');
                contactForm.reset();
            } else {
                alert('Error al enviar el mensaje. Intenta nuevamente.');
            }
        } catch (error) {
            alert('Error de red al enviar el mensaje.');
        }
    });
}
