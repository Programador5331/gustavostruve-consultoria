// Contenido centralizado del sitio. Editar aquí actualiza el sitio completo.

export const site = {
  name: "Gustavo Struve",
  brand: "Consultoría Integral",
  domain: "gustavostruve.com",
  email: "gustavo.struve@gmail.com",
  phone: "+593 995 008 070",
  whatsapp: "593995008070",
  meetingUrl: "https://meetings.hubspot.com/gstruve",
  linkedin: "https://linkedin.com/in/gustavostruve",
  facebook: "https://www.facebook.com/gustavostruveconsultoria",
  instagram: "https://www.instagram.com/gustavostruvemkt/",
  youtube: "https://www.youtube.com/@gustavos1850",
  location: "Quito, Ecuador",
};

export const smartHospitalIndex = {
  name: "Evaluación de Madurez Digital con IA",
  tagline: "Diagnóstico ejecutivo en menos de 15 minutos",
  text: "Evalúa gratis la madurez digital de tu hospital o clínica en 8 dimensiones clave y recibe un plan de acción ejecutivo. Sin costo.",
  cta: "Iniciar evaluación gratis",
  url: "https://smarthospitalindex.base44.app",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Consultoría", href: "/#consultoria" },
  { label: "KliniQ 24/7", href: "/kliniq" },
  { label: "Productos Digitales", href: "/#productos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
];

export const hero = {
  eyebrow: "Consultoría Estratégica en Gestión de Salud + IA",
  headline: "Transformamos la gestión de tu institución de salud.",
  subheadline:
    "Resultados medibles. Sin grandes inversiones. A la medida de tu presupuesto.",
  cta: "Agenda una llamada de 20 minutos",
  ctaSecondary: "Ver servicios",
  stats: [
    { value: 200, suffix: "+", label: "Personas lideradas" },
    { value: 20, suffix: "+", label: "Años en gestión de salud" },
    { value: 4, suffix: "", label: "Países de impacto" },
  ],
};

export const painPoints = [
  {
    icon: "Clock",
    title: "Procesos lentos",
    text: "Demoras que frustran al paciente y generan costos innecesarios cada día.",
  },
  {
    icon: "LineChart",
    title: "Sin indicadores",
    text: "Decisiones tomadas por intuición, sin datos que las respalden.",
  },
  {
    icon: "Banknote",
    title: "Costos sin control",
    text: "Gastos que se repiten sin saber exactamente dónde está la fuga.",
  },
  {
    icon: "Users",
    title: "Equipo desalineado",
    text: "Cada área trabaja distinto, sin protocolos ni estándares comunes.",
  },
  {
    icon: "ShieldAlert",
    title: "Riesgo de calidad",
    text: "Procesos sin documentar que exponen a la institución a errores y sanciones.",
  },
  {
    icon: "Rocket",
    title: "Sin tiempo para crecer",
    text: "El día a día consume todo el tiempo y la estrategia queda postergada.",
  },
];

export const pillars = [
  {
    id: "consultoria",
    tag: "01",
    color: "teal",
    title: "Consultoría Personalizada",
    text: "Diagnóstico, optimización operativa y formación directiva 1 a 1 para clínicas, consultorios y centros de salud.",
    href: "#consultoria",
  },
  {
    id: "kliniq",
    tag: "02",
    color: "blue",
    title: "KliniQ 24/7",
    text: "El sistema operativo de tu consultorio: agenda, historia clínica, facturación y telemedicina en una sola plataforma.",
    href: "#kliniq",
  },
  {
    id: "productos",
    tag: "03",
    color: "amber",
    title: "Productos Digitales",
    text: "Ebooks y cursos on-demand para formarse en gestión de salud, transformación digital e inteligencia artificial.",
    href: "#productos",
  },
];

export const consultingServices = [
  {
    num: "01",
    name: "Diagnóstico 360 de Gestión Clínica",
    category: "Gestión Clínica",
    text: "La fotografía completa de tu operación. El primer paso para cualquier mejora real y sostenible.",
    price: "$500",
    unit: "pago único · 2 semanas",
    color: "teal",
    steps: [
      { title: "Sesión 1 — Levantamiento", text: "Análisis completo de tu operación: procesos, personas, indicadores, tecnología y cultura organizacional. 90 minutos." },
      { title: "Sesión 2 — Validación", text: "Presentación de hallazgos preliminares y profundización en áreas clave con el equipo directivo. 90 minutos." },
      { title: "Informe Ejecutivo", text: "Documento de 10-15 páginas con hallazgos, causas raíz y plan de acción priorizado por impacto y facilidad." },
      { title: "Sesión de Presentación", text: "Presentación del informe final, con espacio para preguntas y definición de próximos pasos. 60 minutos." },
    ],
  },
  {
    num: "02",
    name: "Programa de Optimización Operativa",
    category: "Operativa",
    text: "Acompañamiento mensual recurrente para implementar mejoras con indicadores y resultados reales.",
    price: "$700–$900",
    unit: "por mes · mínimo 3 meses",
    color: "blue",
    steps: [
      { title: "Mes 1", text: "Diagnóstico de los 3 problemas principales, diseño del plan de acción y definición de KPIs y tablero de control." },
      { title: "Mes 2", text: "Revisión de avance con datos reales, optimización de procesos identificados y diseño de herramientas de gestión." },
      { title: "Mes 3", text: "Consolidación de mejoras implementadas, entrenamiento al equipo y propuesta de continuidad y escalamiento." },
    ],
  },
  {
    num: "03",
    name: "Talleres Ejecutivos",
    category: "Formación Directiva",
    text: "Formación práctica para equipos directivos en gestión eficiente del sector salud.",
    price: "$120–$150",
    unit: "por persona · grupo de 8-15 · 4 sesiones",
    color: "violet",
    steps: [],
  },
  {
    num: "04",
    name: "Desarrollo de Sistemas de Gestión de la Calidad",
    category: "Consultoría Personalizada",
    text: "Diseño e implementación de tu sistema de gestión de calidad, alineado a normativa vigente y a la realidad operativa de tu institución.",
    price: "",
    unit: "consultoría personalizada",
    color: "amber",
    steps: [],
  },
  {
    num: "05",
    name: "Desarrollo y Acompañamiento en Plan de Negocios",
    category: "Estrategia",
    text: "Construcción de tu plan de negocios y acompañamiento en su ejecución, de la idea a un modelo viable y financiable.",
    price: "Según proyecto",
    unit: "se personaliza según alcance",
    color: "violet",
    steps: [],
  },
  {
    num: "06",
    name: "Planeación Estratégica Ágil en Salud",
    category: "Estrategia",
    text: "Desarrollo y acompañamiento de planeación estratégica ágil aplicada al sector salud, adaptada al contexto y ritmo real de tu institución.",
    price: "Según proyecto",
    unit: "se personaliza según alcance",
    color: "blue",
    steps: [],
  },
];

export const consultingResults = [
  { value: "15–30%", label: "Reducción de costos operativos", note: "En promedio en los primeros 3 meses de intervención" },
  { value: "2–4×", label: "Mayor velocidad de procesos clave", note: "Reducción de tiempos muertos y retrabajos documentados" },
  { value: "8.5+", label: "Satisfacción del paciente (NPS)", note: "Impacto directo de la mejora operativa en la experiencia" },
];

export const consultingProcess = [
  { num: "01", title: "Reunión exploratoria", text: "20 min gratuitos. Conversamos sobre tu realidad y definimos si hay fit. Sin compromiso." },
  { num: "02", title: "Propuesta personalizada", text: "En 48h te envío una propuesta ajustada a tu situación específica y tu presupuesto." },
  { num: "03", title: "Diagnóstico inicial", text: "Iniciamos con el Diagnóstico 360 para conocer a fondo tu operación antes de proponer soluciones." },
  { num: "04", title: "Plan de acción", text: "Definimos juntos las prioridades y el plan de trabajo mes a mes con indicadores claros." },
  { num: "05", title: "Implementación", text: "Trabajamos con tu equipo para ejecutar los cambios, no solo recomendarlos." },
  { num: "06", title: "Seguimiento y mejora", text: "Medimos resultados, ajustamos el rumbo y seguimos mejorando de forma continua." },
];

export const faq = [
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "En el Diagnóstico 360 ya tienes un plan de acción al final de la segunda semana. En el Programa de Optimización los primeros resultados medibles aparecen entre el mes 1 y el mes 2, dependiendo de la velocidad de implementación del equipo.",
  },
  {
    q: "¿Funciona para una clínica pequeña o solo para hospitales grandes?",
    a: "El modelo está diseñado específicamente para instituciones medianas y pequeñas: clínicas privadas, consultorios especializados y centros de salud que no tienen acceso a consultoras internacionales pero sí necesitan resultados profesionales.",
  },
  {
    q: "¿Necesito conocimientos previos de gestión?",
    a: "No. Una de las fortalezas de trabajar con Gustavo Struve es adaptar el lenguaje y las herramientas a la realidad de cada institución. Trabajamos con lo que ya existe y mejoramos desde ahí.",
  },
  {
    q: "¿Cómo funciona el precio del plan de negocios o del sistema de gestión de calidad?",
    a: "Ambos se cotizan según el alcance real de tu proyecto — tamaño de la institución, complejidad y tiempo estimado. En la reunión exploratoria definimos el alcance y en 48h recibes una propuesta con precio cerrado.",
  },
];

export const kliniq = {
  name: "KLINIQ 24/7",
  url: "/kliniq",
  demoUrl: "https://www.kliniq247.com/",
  slogan: "Tu consultorio, en control. Las 24 horas.",
  pitch:
    "El sistema operativo de tu consultorio médico: centraliza cada proceso desde la primera cita hasta la última factura, disponible las 24 horas, los 7 días de la semana.",
  value:
    "KLINIQ 24/7 elimina la fragmentación administrativa de tu consultorio o clínica, reuniendo en una sola plataforma en la nube todo lo que necesitas para gestionar tu práctica — sin importar la hora ni el dispositivo.",
  differentiators: [
    "Gestión clínica completa (agenda + historia clínica + recetas + exámenes)",
    "Facturación electrónica SRI nativa",
    "Telemedicina integrada, sin apps de terceros",
    "Cumplimiento normativo ecuatoriano desde el primer día",
    "Disponibilidad 24/7 en la nube, con app móvil incluida",
  ],
  modules: [
    { name: "Agenda", text: "Gestión de citas, recordatorios automáticos, calendario por médico." },
    { name: "Historia Clínica", text: "HCE estructurada, evoluciones, antecedentes, plantillas por especialidad." },
    { name: "Órdenes Médicas", text: "Generación de recetas, órdenes de laboratorio e imagen." },
    { name: "Facturación", text: "Facturación electrónica SRI, notas de crédito, reportes fiscales." },
    { name: "Telemedicina", text: "Videoconsulta integrada, sala de espera virtual, grabación opcional." },
    { name: "Odontología", text: "Odontograma digital, presupuestos por tratamiento, seguimiento." },
  ],
  plans: [
    { name: "Solo", desc: "1 médico", features: ["Agenda", "Historia Clínica", "Órdenes Médicas", "Facturación"] },
    { name: "Clínica", desc: "Hasta 5 usuarios", features: ["Todo Solo", "Exámenes", "Inventarios", "NPS", "Firma Digital"] },
    { name: "Pro", desc: "Usuarios ilimitados", features: ["Todo Clínica", "Telemedicina", "Odontología", "Salud Ocupacional", "Normativa"] },
    { name: "Enterprise", desc: "Red de clínicas", features: ["Todo Pro", "White-label", "Integraciones API"] },
  ],
};

export type DigitalProduct = {
  title: string;
  format: string;
  description: string;
  status: "live" | "soon";
  url?: string;
  coverImage?: string;
};

export const digitalProducts: DigitalProduct[] = [
  {
    title: "Calidad Práctica",
    format: "Ebook",
    description: "Guía de implementación para dirigir un sistema de gestión de calidad real en tu clínica, sin departamento de calidad ni burocracia — con plan de 90 días, matrices de riesgo y plantillas descargables.",
    status: "live",
    url: "https://go.hotmart.com/U107314702D?dp=1",
    coverImage: "/images/products/calidad-practica.jpg",
  },
  {
    title: "De la Idea al Negocio Rentable",
    format: "Ebook",
    description: "Guía práctica para emprender un negocio de comida rápida, de la idea al primer cliente.",
    status: "live",
    url: "https://go.hotmart.com/L103986937J",
    coverImage: "/images/products/idea-a-negocio-rentable.jpg",
  },
  {
    title: "Emprende Desde Cero",
    format: "Ebook",
    description: "Guía realista para crear ingresos en 90 días, sin fórmulas mágicas.",
    status: "live",
    url: "https://go.hotmart.com/Y104464949S",
    coverImage: "/images/products/emprende-desde-cero.jpg",
  },
  {
    title: "Introducción a la Inteligencia Artificial",
    format: "Curso",
    description: "Curso completo para perder el miedo a la IA y empezar a aplicarla en el día a día.",
    status: "live",
    url: "https://go.hotmart.com/U104303889M",
    coverImage: "/images/products/introduccion-ia.jpg",
  },
];

export const about = {
  name: "Gustavo L. Struve A.",
  title: "Consultor Principal · MBA · Mgtr. Gerencia en Salud",
  bio: [
    "MBA y Máster en Gerencia en Salud, con más de 20 años de experiencia liderando operaciones en el sector salud en Ecuador y Latinoamérica.",
    "Ha ocupado cargos gerenciales en empresas de distintos sectores — salud, banca y retail — entre ellos Gerente Regional en VERIS, liderando equipos de más de 200 personas. Docente universitario en gestión de salud, formando a la próxima generación de directivos del sector.",
    "Desde 2013 es fundador y CEO de Gustavo Struve Consultoría Integral, acompañando al sector salud y a otros sectores con metodologías modernas de gestión — mejorando resultados operativos y optimizando la relación con cada cliente que asesora.",
  ],
  credentials: [
    "MBA · Formación ejecutiva",
    "CEO GSCI desde 2013",
    "200+ colaboradores liderados",
    "Docente universitario · Gestión de Salud",
    "Salud · Banca · Retail",
  ],
};

export const contact = {
  headline: "El siguiente paso es tuyo.",
  text: "Una conversación de 20 minutos puede ser el inicio de la transformación que tu institución necesita.",
  steps: [
    { num: "01", title: "Escríbeme hoy", text: "Un mensaje corto a WhatsApp o email con el nombre de tu institución y el área que más te preocupa." },
    { num: "02", title: "Agenda la llamada", text: "Eliges tú mismo el horario que más te convenga en mi calendario. Sin ida y vuelta de mensajes, sin costo." },
    { num: "03", title: "Conversamos sin compromiso", text: "Te escucho, te hago las preguntas correctas y te digo con honestidad si puedo ayudarte y cómo." },
    { num: "04", title: "Recibe tu propuesta", text: "En 48 horas tienes una propuesta personalizada con precio, alcance y próximos pasos concretos." },
  ],
};
