// Franco Rupnik — portfolio behaviour: i18n toggle, scroll reveal.

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- i18n ----------
const I18N = {
  en: {
    nav_about:"about", nav_focus:"focus", nav_xp:"experience", nav_work:"work", nav_contact:"contact",
    status:"open to interesting problems",
    role:"Software Engineer — backend, distributed systems &amp; AI platforms",
    lede:"I build scalable services and AI-driven systems for production — from Spring Boot microservices on Kubernetes to agent-tool interfaces over the Model Context Protocol.",
    cta_contact:"Get in touch", cta_resume:"Résumé ↓",
    eye_about:"whoami", about_h:"Backend at the core, AI at the edge.",
    about_p1:"I'm a software engineer focused on backend development, distributed systems and cloud-native architectures. I work across Java, Python, Go, Docker, Kubernetes and AWS, building scalable services and AI-driven applications that run in production.",
    about_pull:"At <b>Mendel</b>, I build the AI platform behind intelligent expense management — a Spring Boot microservices ecosystem on AWS EKS. I own the WhatsApp conversational experience end to end: a Java orchestration layer and a Python AI agent for natural-language understanding and tool-based workflows.",
    about_p2:"I built and shipped our <b>MCP (Model Context Protocol) server</b> to production, exposing expense-audit and travel-approval tools to AI assistants like Claude — with an OAuth 2.0 authorization layer (Dynamic Client Registration, refresh tokens), delegated SSO and SSE streaming transport. Previously at Accenture I architected multi-agent AI systems with RAG pipelines, and I teach Microservices Architecture at ITBA.",
    eye_focus:"focus[]", focus_h:"What I care about building",
    f1_h:"AI / LLM orchestration", f1_p:"Intelligent automation and agent workflows that hold up under real production traffic.",
    f2_h:"MCP &amp; agent-tool interfaces", f2_p:"Model Context Protocol servers that expose real tools to AI assistants, safely and with auth.",
    f3_h:"High-performance backend", f3_p:"Services tuned for latency, throughput and cost — where the numbers actually matter.",
    f4_h:"Cloud-native systems", f4_p:"Containerized workloads on Kubernetes, with the CI/CD and observability to keep them healthy.",
    f5_h:"Distributed architectures", f5_p:"Microservices that stay resilient as they scale, communicating over well-defined contracts.",
    eye_xp:"git log --experience", xp_h:"Where I've been building",
    xp_now:"● now", xp_parallel:"in parallel",
    xp1_h:"Backend Engineer — AI Platform", xp1_p:"Building the AI platform for intelligent expense management on <b>Spring Boot microservices + AWS EKS</b>. Owner of the WhatsApp conversational experience (Java BFF + Python AI agent) and of our production <b>MCP server</b> with OAuth 2.0, delegated SSO and SSE streaming.",
    xp2_h:"Adjunct Professor — Microservices Architecture", xp2_p:"Teaching and mentoring students in the design and implementation of microservice-based systems — lectures, hands-on labs and real-world exercises with <b>Docker, Kubernetes</b>, cloud-native tooling and modern communication patterns. Focused on deploying, scaling and observing distributed systems.",
    xp3_h:"AI &amp; LLM Technology Architecture", xp3_p:"Built a <b>multi-agent AI system</b> on a customized n8n fork that routes user queries to specialized agents — designing agent workflows, integrating <b>RAG pipelines</b> and optimizing LLM response quality. Earlier, as an intern, worked across RAG/GraphRAG, prompt engineering and fine-tuning to improve enterprise-chatbot accuracy, cost and performance.",
    eye_edu:"education --list", edu_h:"Where I studied", edu1_h:"Computer Engineering — B.Eng. &amp; M.Eng. level", edu1_p:"Six-year Computer Engineering degree (Bologna framework — B.Eng. + M.Eng. level), with a graduate focus on <b>Software Architecture &amp; Engineering</b>.",
    eye_work:"work[]", work_h:"Selected &amp; open-source projects",
    w1_p:"Monitoring and operational automation for Docker environments — my ITBA final project.",
    w2_p:"A microservices system to orchestrate and manage distributed tasks reliably at scale.",
    w3_p:"Full-stack review app with a RESTful HATEOAS API — Spring + Hibernate backend, Angular front.",
    w4_p:"A cloud service for secure code sharing, deployed on AWS with Infrastructure as Code.",
    w5_p:"A low-level OS project: process scheduling, memory management and multitasking, close to the metal.",
    w6_p:"A fitness platform across web (Vue) and a native Android app (Kotlin) for tracking workouts.",
    work_more:"See everything on GitHub →",
    eye_stack:"stack --list", stack_h:"Tools I reach for",
    sg_lang:"languages", sg_infra:"infra &amp; cloud", sg_back:"backend", sg_ai:"ai / llm",
    eye_contact:"contact", contact_h:"Let's build something",
    cd_email:"email", cd_uni:"university",
    foot:"built from scratch · no template this time",
  },
  es: {
    nav_about:"sobre-mí", nav_focus:"foco", nav_xp:"experiencia", nav_work:"proyectos", nav_contact:"contacto",
    status:"abierto a problemas interesantes",
    role:"Software Engineer — backend, sistemas distribuidos y plataformas de IA",
    lede:"Construyo servicios escalables y sistemas con IA para producción — desde microservicios en Spring Boot sobre Kubernetes hasta interfaces de herramientas para agentes vía Model Context Protocol.",
    cta_contact:"Contactame", cta_resume:"CV ↓",
    eye_about:"whoami", about_h:"Backend en el núcleo, IA en el borde.",
    about_p1:"Soy software engineer enfocado en desarrollo backend, sistemas distribuidos y arquitecturas cloud-native. Trabajo con Java, Python, Go, Docker, Kubernetes y AWS, construyendo servicios escalables y aplicaciones con IA que corren en producción.",
    about_pull:"En <b>Mendel</b> construyo la plataforma de IA detrás de la gestión inteligente de gastos — un ecosistema de microservicios en Spring Boot sobre AWS EKS. Soy dueño de la experiencia conversacional de WhatsApp de punta a punta: una capa de orquestación en Java y un agente de IA en Python para comprensión de lenguaje natural y flujos basados en herramientas.",
    about_p2:"Construí y llevé a producción nuestro <b>server MCP (Model Context Protocol)</b>, que expone herramientas de auditoría de gastos y aprobación de viajes a asistentes de IA como Claude — con una capa de autorización OAuth 2.0 (Dynamic Client Registration, refresh tokens), SSO delegado y transporte SSE. Antes, en Accenture, diseñé sistemas de IA multi-agente con pipelines RAG, y doy Arquitectura de Microservicios en el ITBA.",
    eye_focus:"foco[]", focus_h:"Lo que me interesa construir",
    f1_h:"Orquestación de IA / LLM", f1_p:"Automatización inteligente y flujos de agentes que aguantan tráfico real de producción.",
    f2_h:"MCP e interfaces agente-herramienta", f2_p:"Servers Model Context Protocol que exponen herramientas reales a asistentes de IA, de forma segura y con auth.",
    f3_h:"Backend de alto rendimiento", f3_p:"Servicios afinados en latencia, throughput y costo — donde los números importan de verdad.",
    f4_h:"Sistemas cloud-native", f4_p:"Cargas containerizadas sobre Kubernetes, con el CI/CD y la observabilidad para mantenerlas sanas.",
    f5_h:"Arquitecturas distribuidas", f5_p:"Microservicios que se mantienen resilientes al escalar, comunicándose por contratos bien definidos.",
    eye_xp:"git log --experiencia", xp_h:"Dónde estuve construyendo",
    xp_now:"● ahora", xp_parallel:"en paralelo",
    xp1_h:"Backend Engineer — Plataforma de IA", xp1_p:"Construyo la plataforma de IA para gestión inteligente de gastos sobre <b>microservicios Spring Boot + AWS EKS</b>. Dueño de la experiencia conversacional de WhatsApp (BFF en Java + agente de IA en Python) y de nuestro <b>server MCP</b> en producción con OAuth 2.0, SSO delegado y streaming SSE.",
    xp2_h:"Profesor Adjunto — Arquitectura de Microservicios", xp2_p:"Enseño y mentoreo a estudiantes en el diseño e implementación de sistemas basados en microservicios — clases, labs prácticos y ejercicios reales con <b>Docker, Kubernetes</b>, tooling cloud-native y patrones de comunicación modernos. Enfocado en desplegar, escalar y observar sistemas distribuidos.",
    xp3_h:"AI &amp; LLM Technology Architecture", xp3_p:"Construí un <b>sistema de IA multi-agente</b> sobre un fork customizado de n8n que rutea consultas a agentes especializados — diseñando flujos de agentes, integrando <b>pipelines RAG</b> y optimizando la calidad de respuesta de los LLM. Antes, como intern, trabajé con RAG/GraphRAG, prompt engineering y fine-tuning para mejorar precisión, costo y performance de chatbots empresariales.",
    eye_edu:"education --list", edu_h:"Dónde estudié", edu1_h:"Ingeniería Informática — nivel B.Eng. y M.Eng.", edu1_p:"Carrera de Ingeniería Informática de seis años (marco de Bolonia — nivel B.Eng. + M.Eng.), con orientación de posgrado en <b>Arquitectura e Ingeniería de Software</b>.",
    eye_work:"proyectos[]", work_h:"Proyectos seleccionados y open-source",
    w1_p:"Monitoreo y automatización operativa para entornos Docker — mi proyecto final del ITBA.",
    w2_p:"Un sistema de microservicios para orquestar y gestionar tareas distribuidas de forma confiable a escala.",
    w3_p:"App de reseñas full-stack con API RESTful HATEOAS — backend Spring + Hibernate, front Angular.",
    w4_p:"Un servicio cloud para compartir código de forma segura, desplegado en AWS con Infra as Code.",
    w5_p:"Un proyecto de SO de bajo nivel: scheduling de procesos, gestión de memoria y multitarea, cerca del metal.",
    w6_p:"Una plataforma de fitness en web (Vue) y una app Android nativa (Kotlin) para registrar entrenamientos.",
    work_more:"Ver todo en GitHub →",
    eye_stack:"stack --list", stack_h:"Herramientas que uso",
    sg_lang:"lenguajes", sg_infra:"infra y cloud", sg_back:"backend", sg_ai:"ia / llm",
    eye_contact:"contacto", contact_h:"Construyamos algo",
    cd_email:"email", cd_uni:"universidad",
    foot:"hecho desde cero · sin template esta vez",
  }
};

let lang = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";

function applyLang(l) {
  lang = l;
  const t = I18N[l];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (t[k] != null) el.innerHTML = t[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (t[k] != null) el.placeholder = t[k];
  });
  document.documentElement.lang = l;
  document.getElementById("langCur").textContent = l.toUpperCase();
  document.getElementById("langAlt").textContent = (l === "en" ? "ES" : "EN");

  // serve the CV that matches the active language
  const resumeLink = document.getElementById("resumeLink");
  if (resumeLink) resumeLink.href = (l === "es") ? "cv_franco_rupnik_es.pdf" : "cv_franco_rupnik_en.pdf";
}

document.getElementById("langBtn").addEventListener("click", () => applyLang(lang === "en" ? "es" : "en"));
applyLang(lang);

// ---------- reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---------- smooth scroll for in-page anchors ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
  });
});
