// Franco Rupnik — portfolio behaviour: i18n toggle, scroll reveal.

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- i18n ----------
const I18N = {
  en: {
    nav_about:"about", nav_focus:"focus", nav_xp:"experience", nav_work:"work", nav_contact:"contact",
    status:"open to interesting problems",
    role:"Backend Engineer — distributed systems &amp; production AI",
    lede:"I build production AI systems for corporate finance on top of Spring Boot microservices on AWS — and I care about making LLM agents safe to run on top of real money.",
    cta_contact:"Get in touch", cta_resume:"Résumé ↓",
    eye_about:"whoami", about_h:"Backend at the core, AI at the edge.",
    about_p1:"I'm a backend engineer focused on distributed systems and cloud-native architectures. I work across Java, Python, Go, Docker, Kubernetes and AWS, building services and AI-driven applications that run in production.",
    about_pull:"At <b>Mendel</b>, I'm a Semi-Senior Backend Engineer on the AI platform. I grew our <b>MCP server</b> from 15 to 69 tools — listed in Anthropic's Claude connector directory and used by 250+ users at 60+ customer companies — and I own the WhatsApp expense assistant, a Spring Boot service plus a Python LangGraph agent.",
    about_p2:"Much of my work is making LLM-initiated actions safe on financial data: a multi-tenant OAuth gateway with MFA, SSO and delegated tokens for AI agents, idempotent writes with Redis locks, deterministic guardrails and an evaluation rig that replays conversations. Previously at Accenture I built multi-agent AI systems with RAG pipelines, and I teach Microservices Architecture at ITBA.",
    eye_focus:"focus[]", focus_h:"What I care about building",
    f1_h:"AI / LLM orchestration", f1_p:"Intelligent automation and agent workflows that hold up under real production traffic.",
    f2_h:"MCP &amp; agent-tool interfaces", f2_p:"Model Context Protocol servers that expose real tools to AI assistants, safely and with auth.",
    f3_h:"High-performance backend", f3_p:"Services tuned for latency, throughput and cost — where the numbers actually matter.",
    f4_h:"Cloud-native systems", f4_p:"Containerized workloads on Kubernetes, with the CI/CD and observability to keep them healthy.",
    f5_h:"Distributed architectures", f5_p:"Microservices that stay resilient as they scale, communicating over well-defined contracts.",
    eye_xp:"git log --experience", xp_h:"Where I've been building",
    xp_now:"● now", xp_parallel:"in parallel",
    xp1_h:"Semi-Senior Backend Engineer — AI Platform", xp1_p:"Promoted from Junior in Jul 2026. Grew our <b>MCP server</b> from 15 to 69 tools (listed in Anthropic's Claude connector directory; 250+ users at 60+ companies in Q3), shipped 22 tools in under two weeks for enterprise customers, and designed a <b>multi-tenant OAuth gateway</b> with MFA, Microsoft SSO and delegated tokens for AI agents. I own the <b>WhatsApp expense assistant</b> (Spring Boot + Python LangGraph): completed expense reports grew +166% quarter over quarter in Q3, and 88% of the receipts it processes end in a completed report.",
    xp2_h:"University Professor — Microservices Architecture", xp2_p:"Teaching a class of 40+ students to design and build microservice-based systems — lectures and hands-on workshops with <b>Docker, Kubernetes</b> and CI/CD, focused on deploying, scaling and observing distributed systems.",
    xp3_h:"AI &amp; LLM Technology Architecture", xp3_p:"Built a <b>multi-agent AI system</b> on a customized n8n fork that routes user queries to specialized agents — designing agent workflows, integrating <b>RAG pipelines</b> and optimizing LLM response quality. Earlier, as an intern, worked across RAG/GraphRAG, prompt engineering and fine-tuning to improve enterprise-chatbot accuracy, cost and performance.",
    eye_edu:"education --list", edu_h:"Where I studied", edu1_h:"Master of Engineering — Software Architecture &amp; Engineering", edu1_p:"Graduated with an <b>Honors Diploma</b> for academic excellence.", edu2_h:"Bachelor of Engineering — Computer Engineering",
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
    role:"Backend Engineer — sistemas distribuidos e IA en producción",
    lede:"Construyo sistemas de IA en producción para finanzas corporativas sobre microservicios Spring Boot en AWS — y me importa que los agentes de IA sean seguros cuando operan sobre dinero real.",
    cta_contact:"Contactame", cta_resume:"CV ↓",
    eye_about:"whoami", about_h:"Backend en el núcleo, IA en el borde.",
    about_p1:"Soy ingeniero backend enfocado en sistemas distribuidos y arquitecturas cloud-native. Trabajo con Java, Python, Go, Docker, Kubernetes y AWS, construyendo servicios y aplicaciones con IA que corren en producción.",
    about_pull:"En <b>Mendel</b> soy Ingeniero Backend Semi-Senior en la plataforma de IA. Llevé nuestro <b>servidor MCP</b> de 15 a 69 tools — publicado en el directorio de conectores de Claude y usado por más de 250 usuarios de más de 60 empresas cliente — y soy responsable del asistente de gastos por WhatsApp, un servicio en Spring Boot más un agente en Python con LangGraph.",
    about_p2:"Buena parte de mi trabajo es que las acciones que inicia un LLM sean seguras sobre datos financieros: un gateway OAuth multitenant con MFA, SSO y tokens delegados para agentes, escrituras idempotentes con locks en Redis, guardrails deterministas y un rig de evaluación que reproduce conversaciones. Antes, en Accenture, construí sistemas de IA multi-agente con pipelines RAG, y doy Arquitectura de Microservicios en el ITBA.",
    eye_focus:"foco[]", focus_h:"Lo que me interesa construir",
    f1_h:"Orquestación de IA / LLM", f1_p:"Automatización inteligente y flujos de agentes que aguantan tráfico real de producción.",
    f2_h:"MCP e interfaces agente-herramienta", f2_p:"Servers Model Context Protocol que exponen herramientas reales a asistentes de IA, de forma segura y con auth.",
    f3_h:"Backend de alto rendimiento", f3_p:"Servicios afinados en latencia, throughput y costo — donde los números importan de verdad.",
    f4_h:"Sistemas cloud-native", f4_p:"Cargas containerizadas sobre Kubernetes, con el CI/CD y la observabilidad para mantenerlas sanas.",
    f5_h:"Arquitecturas distribuidas", f5_p:"Microservicios que se mantienen resilientes al escalar, comunicándose por contratos bien definidos.",
    eye_xp:"git log --experiencia", xp_h:"Dónde estuve construyendo",
    xp_now:"● ahora", xp_parallel:"en paralelo",
    xp1_h:"Ingeniero Backend Semi-Senior — Plataforma de IA", xp1_p:"Ascendido desde Junior en jul. 2026. Llevé nuestro <b>servidor MCP</b> de 15 a 69 tools (publicado en el directorio de conectores de Claude; más de 250 usuarios de más de 60 empresas en Q3), puse en producción 22 tools en menos de dos semanas para clientes enterprise y diseñé un <b>gateway OAuth multitenant</b> con MFA, SSO con Microsoft y tokens delegados para agentes de IA. Soy responsable del <b>asistente de gastos por WhatsApp</b> (Spring Boot + Python con LangGraph): en Q3 las rendiciones completas crecieron +166% contra el trimestre anterior y el 88% de los comprobantes que procesa termina en una rendición completa.",
    xp2_h:"Profesor Universitario — Arquitectura de Microservicios", xp2_p:"Doy clases a un curso de más de 40 estudiantes sobre el diseño y la construcción de sistemas basados en microservicios — clases y talleres prácticos con <b>Docker, Kubernetes</b> y CI/CD, enfocados en desplegar, escalar y observar sistemas distribuidos.",
    xp3_h:"AI &amp; LLM Technology Architecture", xp3_p:"Construí un <b>sistema de IA multi-agente</b> sobre un fork customizado de n8n que rutea consultas a agentes especializados — diseñando flujos de agentes, integrando <b>pipelines RAG</b> y optimizando la calidad de respuesta de los LLM. Antes, como intern, trabajé con RAG/GraphRAG, prompt engineering y fine-tuning para mejorar precisión, costo y performance de chatbots empresariales.",
    eye_edu:"education --list", edu_h:"Dónde estudié", edu1_h:"Master of Engineering — Arquitectura e Ingeniería de Software", edu1_p:"Me gradué con <b>Diploma de Honor</b> por excelencia académica.", edu2_h:"Bachelor of Engineering — Ingeniería Informática",
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
