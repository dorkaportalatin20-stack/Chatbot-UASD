// ==========================================
// Lógica de funcionamiento
// ==========================================

// Elementos del HTML
const areaChat = document.getElementById('area-chat');
const entradaTexto = document.getElementById('entrada-texto');
const botonEnviar = document.getElementById('btn-enviar');
const contenedorSugeridas = document.getElementById('preguntas-sugeridas');

// Inicializar: mostrar preguntas sugeridas al cargar
cargarPreguntasSugeridas();

// Enviar mensaje al hacer clic en el botón
botonEnviar.addEventListener('click', enviarMensaje);

// Enviar mensaje al presionar Enter
entradaTexto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});

// ==========================================
// Función: Enviar mensaje del usuario
// ==========================================
function enviarMensaje() {
    const texto = entradaTexto.value.trim();
    
    if (texto === '') return;
    
    // Agregar mensaje del usuario al chat
    agregarMensaje(texto, 'usuario');
    
    // Limpiar entrada
    entradaTexto.value = '';
    
    // Mostrar indicador "escribiendo..."
    mostrarEscribiendo();
    
    // Buscar respuesta después de una pequeña pausa
    setTimeout(() => {
        const respuesta = buscarRespuesta(texto);
        quitarEscribiendo();
        agregarMensaje(respuesta, 'bot');
    }, 800);
}

// ==========================================
// Función: Buscar respuesta en la base de conocimientos
// ==========================================
function buscarRespuesta(preguntaUsuario) {
    const texto = preguntaUsuario.toLowerCase().normalize("NFD").replace(/[áéíóú]/g, "");
    
    let mejorRespuesta = null;
    let mejorPuntuacion = 0;
    
    // Recorrer toda la base de conocimientos
    for (let item of baseConocimientos) {
        for (let preguntaClave of item.preguntas) {
            const clave = preguntaClave.toLowerCase().normalize("NFD").replace(/[áéíóú]/g, "");
            
            // Calcular coincidencias
            const palabrasUsuario = texto.split(/\s+/);
            const palabrasClave = clave.split(/\s+/);
            let coincidencias = 0;
            
            for (let p1 of palabrasUsuario) {
                for (let p2 of palabrasClave) {
                    if (p1.includes(p2) || p2.includes(p1)) {
                        coincidencias++;
                    }
                }
            }
            
            const puntuacion = coincidencias / Math.max(palabrasClave.length, 1);
            
            if (puntuacion > mejorPuntuacion && puntuacion >= 0.4) {
                mejorPuntuacion = puntuacion;
                mejorRespuesta = item.respuesta;
            }
        }
    }
    
    // Si no encuentra coincidencias
    if (mejorRespuesta === null) {
        return "🤔 Lo siento, no tengo información específica sobre eso en el Estatuto Orgánico de la UASD. Te sugiero revisar las preguntas recomendadas o intentar con otra consulta relacionada con la Universidad.";
    }
    
    return mejorRespuesta;
}

// ==========================================
// Función: Agregar mensaje al área del chat
// ==========================================
function agregarMensaje(texto, emisor) {
    const div = document.createElement('div');
    div.className = `mensaje ${emisor}`;
    
    const icono = emisor === 'usuario' ? '👤' : '🤖';
    
    div.innerHTML = `
        <div class="avatar">${icono}</div>
        <div class="texto-mensaje">${texto}</div>
    `;
    
    areaChat.appendChild(div);
    
    // Desplazar hacia abajo automáticamente
    areaChat.scrollTop = areaChat.scrollHeight;
}

// ==========================================
// Función: Mostrar "escribiendo..."
// ==========================================
function mostrarEscribiendo() {
    const div = document.createElement('div');
    div.id = 'escribiendo-indicador';
    div.className = 'indicacion-escribiendo';
    div.innerHTML = '🤖 El asistente está consultando el Estatuto...';
    areaChat.appendChild(div);
    areaChat.scrollTop = areaChat.scrollHeight;
}

// ==========================================
// Función: Quitar "escribiendo..."
// ==========================================
function quitarEscribiendo() {
    const indicador = document.getElementById('escribiendo-indicador');
    if (indicador) indicador.remove();
}

// ==========================================
// Función: Cargar preguntas sugeridas
// ==========================================
function cargarPreguntasSugeridas() {
    contenedorSugeridas.innerHTML = '';
    
    preguntasSugeridas.forEach(pregunta => {
        const boton = document.createElement('button');
        boton.className = 'btn-sugerido';
        boton.textContent = pregunta;
        boton.addEventListener('click', function() {
            entradaTexto.value = pregunta;
            enviarMensaje();
        });
        contenedorSugeridas.appendChild(boton);
    });
}
