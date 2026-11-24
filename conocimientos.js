// =====================================================
// BASE DE CONOCIMIENTO — ESTATUTO ORGÁNICO DE LA UASD
// Fuente: https://postgrado.uasd.edu.do/wp-content/uploads/2024/06/ESTATUTO-ORGANICO-UASD.pdf
// =====================================================

const baseConocimientos = [
    {
        preguntas: ["qué es la uasd", "qué es la universidad", "definición uasd", "universidad autónoma de santo domingo"],
        respuesta: "🏛️ La Universidad Autónoma de Santo Domingo (UASD) es la institución de educación superior más antigua y grande de la República Dominicana. Es una institución autónoma de derecho público, con personalidad jurídica, patrimonio propio y capacidad para dictar sus propias normas en lo que concierne a su régimen interno."
    },
    {
        preguntas: ["misión de la uasd", "cuál es la misión", "objetivo principal"],
        respuesta: "🎯 Su misión es formar profesionales críticos, reflexivos y competentes, comprometidos con el desarrollo sostenible de la nación dominicana, mediante la docencia, la investigación y la extensión universitaria."
    },
    {
        preguntas: ["fines de la universidad", "cuáles son los fines", "propósitos de la uasd"],
        respuesta: "📜 Los fines esenciales de la UASD son:\n• La creación, desarrollo y difusión del conocimiento y la cultura;\n• La formación integral de profesionales y técnicos de nivel superior;\n• El estudio y solución de los problemas nacionales;\n• La contribución al desarrollo sostenible del país;\n• La preservación del patrimonio nacional y universal."
    },
    {
        preguntas: ["funciones fundamentales", "cuáles son las funciones", "tareas principales"],
        respuesta: "📚 Las funciones fundamentales de la UASD son tres:\n1️⃣ **Docencia:** Enseñanza y formación de profesionales.\n2️⃣ **Investigación:** Generación de nuevos conocimientos.\n3️⃣ **Extensión:** Difusión cultural y servicio a la comunidad."
    },
    {
        preguntas: ["autonomía universitaria", "qué es la autonomía", "estatuto autonomía"],
        respuesta: "⚖️ La autonomía universitaria es el derecho que tiene la UASD para dictar sus propias normas, elegir sus autoridades, administrar su patrimonio y establecer sus planes de estudio, sin injerencia externa, dentro de los límites de la Constitución y las leyes de la República."
    },
    {
        preguntas: ["principios que orientan a la universidad", "principios rectores", "valores"],
        respuesta: "💡 La UASD se orienta por los siguientes principios:\n• La libertad de pensamiento y de cátedra;\n• La igualdad de oportunidades;\n• La equidad;\n• La democracia universitaria;\n• La solidaridad;\n• El respeto a la dignidad humana;\n• La responsabilidad social."
    },
    {
        preguntas: ["organización de la universidad", "cómo está organizada", "estructura organizativa"],
        respuesta: "🏗️ La UASD se organiza jerárquicamente en:\n• **Nivel Central:** Órganos superiores de gobierno;\n• **Nivel Intermedio:** Recintos y Centros Universitarios;\n• **Nivel de Facultades:** Cada área del conocimiento;\n• **Escuelas:** Unidades académicas dentro de cada Facultad."
    },
    {
        preguntas: ["organismos de gobierno", "cuáles son los organismos de gobierno", "quién gobierna la uasd"],
        respuesta: "🏛️ Los organismos de gobierno de la UASD son:\n1. El Claustro Mayor\n2. El Claustro Menor\n3. El Consejo Universitario\n4. El Rector\n5. Los Vicerrectores\n6. Los Consejos Directivos de Facultad\n7. Los Decanos\n8. Los Directores de Escuela"
    },
    {
        preguntas: ["qué es el claustro mayor", "claustro mayor"],
        respuesta: "📋 El **Claustro Mayor** es la máxima autoridad de la Universidad. Está integrado por representantes de los profesores, los estudiantes y los egresados. Se reúne ordinariamente cada cuatro años y tiene atribuciones como reformar el Estatuto y elegir al Rector y Vicerrectores."
    },
    {
        preguntas: ["qué es el claustro menor", "claustro menor"],
        respuesta: "📋 El **Claustro Menor** es el organismo que evalúa la marcha general de la Universidad. Se reúne ordinariamente cada año y está integrado por las autoridades centrales y los decanos de cada facultad."
    },
    {
        preguntas: ["qué es el consejo universitario", "consejo universitario"],
        respuesta: "📋 El **Consejo Universitario** es el máximo organismo de dirección entre sesiones del Claustro Mayor y el Claustro Menor. Lo preside el Rector y toma decisiones sobre la gestión académica, administrativa y financiera de la Universidad."
    },
    {
        preguntas: ["quiénes integran el consejo universitario", "miembros del consejo universitario"],
        respuesta: "👥 El Consejo Universitario está integrado por:\n• El Rector (quien lo preside);\n• Los Vicerrectores;\n• Los Decanos de cada Facultad;\n• Tres representantes de los profesores;\n• Tres representantes de los estudiantes;\n• Un representante de los egresados;\n• El Secretario General con voz sin voto."
    },
    {
        preguntas: ["atribuciones del consejo universitario", "qué hace el consejo universitario", "funciones del consejo"],
        respuesta: "📋 Entre las atribuciones del Consejo Universitario están:\n• Aprobar el presupuesto anual;\n• Crear, modificar o suprimir carreras y programas;\n• Supervisar la ejecución de las políticas universitarias;\n• Dictar reglamentos internos;\n• Conocer las apelaciones en materia disciplinaria."
    },
    {
        preguntas: ["funciones del rector", "qué hace el rector", "quién es el rector"],
        respuesta: "🎓 El **Rector** es la autoridad ejecutiva superior de la Universidad y su representante legal. Sus funciones principales son:\n• Cumplir y hacer cumplir el Estatuto y los reglamentos;\n• Presidir el Consejo Universitario;\n• Dirigir la administración general;\n• Presentar el informe anual de gestión;\n• Representar a la Universidad ante autoridades nacionales e internacionales."
    },
    {
        preguntas: ["funciones de los vicerrectores", "vicerrectores"],
        respuesta: "🎓 Los **Vicerrectores** colaboran con el Rector y lo sustituyen en sus ausencias. Existen Vicerrectores de:\n• Docencia;\n• Investigación y Postgrado;\n• Extensión;\n• Administración y Finanzas;\n cada uno responsable de su área específica según el Estatuto."
    },
    {
        preguntas: ["qué son las facultades", "facultades"],
        respuesta: "🏫 Las **Facultades** son las unidades académicas fundamentales de la Universidad, agrupadas según la afinidad de las disciplinas del conocimiento. Ejemplo: Facultad de Ciencias, Facultad de Humanidades, Facultad de Ingeniería y Arquitectura, entre otras."
    },
    {
        preguntas: ["cómo se organizan las facultades", "organización de facultades"],
        respuesta: "🏗️ Cada Facultad está integrada por una o más **Escuelas**. Es dirigida por un **Decano** y cuenta con un **Consejo Directivo** como organismo de gobierno."
    },
    {
        preguntas: ["consejos directivos de facultad", "qué es el consejo directivo"],
        respuesta: "📋 El **Consejo Directivo** es el organismo de gobierno de cada Facultad. Está integrado por el Decano, quien lo preside, los directores de Escuela, representantes de profesores y de estudiantes. Se reúne periódicamente para tratar los asuntos de la facultad."
    },
    {
        preguntas: ["funciones de los decanos", "decanos"],
        respuesta: "🎓 El **Decano** es la autoridad ejecutiva superior de cada Facultad. Sus funciones son:\n• Dirigir y coordinar todas las actividades de la facultad;\n• Convocar y presidir el Consejo Directivo;\n• Velar por el cumplimiento de los planes de estudio;\n• Promover la calidad académica;\n• Administrar los recursos de la facultad."
    },
    {
        preguntas: ["qué son las escuelas", "escuelas"],
        respuesta: "🏫 Las **Escuelas** son las unidades académicas básicas dentro de cada Facultad, dedicadas a una carrera o área específica del conocimiento. Son dirigidas por un **Director de Escuela**."
    },
    {
        preguntas: ["funciones de los directores de escuela", "director de escuela"],
        respuesta: "🎓 El **Director de Escuela** dirige y coordina las actividades de su escuela. Sus funciones incluyen:\n• Planificar y supervisar la docencia;\n• Coordinar la labor del cuerpo docente;\n• Atender a los estudiantes;\n• Gestionar los recursos de la escuela;\n• Velar por la calidad del proceso educativo."
    },
    {
        preguntas: ["recintos centros y subcentros universitarios", "sedes fuera de santo domingo", "recintos"],
        respuesta: "📍 La UASD cuenta con Recintos, Centros y Subcentros Universitarios para extender su cobertura nacional. Los **Recintos** son sedes principales en regiones fuera de Santo Domingo; los **Centros** y **Subcentros** funcionan como extensiones académicas en diferentes municipios del país."
    },
    {
        preguntas: ["personal docente", "profesores", "docentes"],
        respuesta: "👨‍🏫 El personal docente es el conjunto de profesores que prestan servicios en la Universidad. Su ingreso, promoción y permanencia se basan en méritos académicos, según establece el Estatuto Orgánico."
    },
    {
        preguntas: ["derechos del personal docente", "qué derechos tienen los profesores"],
        respuesta: "✅ Los docentes tienen derecho a:\n• La libertad de cátedra e investigación;\n• Participar en la vida institucional;\n• Recibir capacitación y actualización;\n• Ascender en el escalafón docente;\n• Percibir una remuneración justa;\n• Ser protegidos en sus derechos laborales."
    },
    {
        preguntas: ["deberes del personal docente", "obligaciones de los profesores"],
        respuesta: "📝 Los docentes deben:\n• Cumplir con sus obligaciones académicas;\n• Respetar los principios y normas de la Universidad;\n• Mantener actualizados sus conocimientos;\n• Contribuir al desarrollo de la institución;\n• Velar por la formación integral de los estudiantes."
    },
    {
        preguntas: ["estudiantes", "quiénes son los estudiantes"],
        respuesta: "🎓 Son estudiantes de la UASD las personas matriculadas en cualquiera de sus carreras o programas académicos, con los derechos y deberes que establece el Estatuto Orgánico."
    },
    {
        preguntas: ["derechos de los estudiantes", "qué derechos tenemos"],
        respuesta: "✅ Los estudiantes tienen derecho a:\n• Recibir educación de calidad;\n• Participar en los procesos democráticos de la Universidad;\n• Elegir y ser elegidos como representantes estudiantiles;\n• Expresar libremente sus ideas;\n• Recibir orientación académica;\n• Conocer los criterios de evaluación."
    },
    {
        preguntas: ["deberes de los estudiantes", "obligaciones del estudiante"],
        respuesta: "📝 Los estudiantes deben:\n• Cumplir con sus obligaciones académicas;\n• Respetar las autoridades, compañeros y personal de la Universidad;\n• Cuidar los bienes e instalaciones;\n• Conocer y cumplir el Estatuto Orgánico y los reglamentos;\n• Mantener una conducta digna de la Universidad."
    },
    {
        preguntas: ["representación estudiantil", "cómo nos representamos", "organización estudiantil"],
        respuesta: "🗳️ Los estudiantes tienen derecho a organizarse y elegir libremente sus representantes ante los organismos de gobierno de la Universidad, según lo establece el Estatuto Orgánico. Estas representaciones son: en el Consejo Universitario, en los Consejos Directivos de Facultad y en los Claustros."
    },
    {
        preguntas: ["investigación", "qué dice el estatuto sobre la investigación"],
        respuesta: "🔬 La investigación es una función esencial de la Universidad. El Estatuto establece que la UASD debe promover y fortalecer la investigación científica, humanística y tecnológica, orientada principalmente a resolver los problemas del país y contribuir al desarrollo nacional."
    },
    {
        preguntas: ["postgrado", "estudios de postgrado"],
        respuesta: "🎓 El Postgrado comprende los estudios que siguen a la carrera de grado. La UASD crea y organiza programas de especialidades, maestrías y doctorados, coordinados a nivel central, garantizando calidad académica y pertinencia social."
    },
    {
        preguntas: ["extensión universitaria", "qué es la extensión"],
        respuesta: "🤝 La Extensión Universitaria es la función mediante la cual la Universidad comparte con la comunidad sus conocimientos, cultura y servicios. Incluye actividades culturales, asesorías, educación continua, servicios técnicos y proyectos de impacto social."
    },
    {
        preguntas: ["bienestar universitario", "bienestar estudiantil"],
        respuesta: "❤️ El Bienestar Universitario comprende programas y servicios dirigidos a mejorar las condiciones de vida de los miembros de la comunidad universitaria: salud, deportes, cultura, becas, orientación y asistencia económica, según las posibilidades de la institución."
    },
    {
        preguntas: ["régimen disciplinario", "normas de conducta", "sanciones"],
        respuesta: "⚖️ El Estatuto establece un régimen disciplinario que garantiza el debido proceso. Tanto estudiantes como docentes pueden ser sancionados por incumplimiento de sus deberes o violación de las normas universitarias, con medidas que van desde amonestación hasta expulsión, según la gravedad de la falta."
    },
    {
        preguntas: ["patrimonio universitario", "recursos de la universidad"],
        respuesta: "💰 El patrimonio de la UASD está constituido por:\n• Los bienes muebles e inmuebles que le pertenecen;\n• Las asignaciones presupuestarias del Estado;\n• Donaciones y legados;\n• Ingresos por servicios y actividades propias;\n• Cualquier otro bien o ingreso que adquiera legalmente."
    }
];

// Preguntas sugeridas que aparecerán en la interfaz
const preguntasSugeridas = [
    "¿Qué es la Universidad Autónoma de Santo Domingo?",
    "¿Cuál es la misión de la UASD?",
    "¿Cuáles son los fines de la Universidad?",
    "¿Qué es el Claustro Mayor?",
    "¿Qué es el Consejo Universitario?",
    "¿Cuáles son las funciones del Rector?",
    "¿Qué son las Facultades?",
    "¿Cuáles son los derechos de los estudiantes?",
    "¿Qué establece el Estatuto sobre la investigación?",
    "¿Qué es la extensión universitaria?"
];
