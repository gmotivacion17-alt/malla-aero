// ====================================================================
// BASE DE DATOS COMPLETA DE LA MALLA CURRICULAR (10 SEMESTRES)
// ====================================================================
// type: 'cb' (Ciencias Básicas), 'ci' (Ingeniería), 'ia' (Aeroespacial), 'hu' (Humanidades)
const materias = [
    // --- SEMESTRE 1 ---
    { id: "calcdif", nombre: "Cálculo Diferencial", sem: 1, cred: 4, req: [], type: "cb" },
    { id: "geom", nombre: "Geometría Vectorial y Analítica", sem: 1, cred: 3, req: [], type: "cb" },
    { id: "quim", nombre: "Química General", sem: 1, cred: 3, req: [], type: "cb" },
    { id: "prog1", nombre: "Programación y C. Computacional", sem: 1, cred: 3, req: [], type: "ci" },
    { id: "intro", nombre: "Intro. Ing. Aeroespacial", sem: 1, cred: 2, req: [], type: "ia" },
    { id: "hum1", nombre: "Sociohumanística I", sem: 1, cred: 2, req: [], type: "hu" },

    // --- SEMESTRE 2 ---
    { id: "calcint", nombre: "Cálculo Integral", sem: 2, cred: 4, req: ["calcdif"], type: "cb" },
    { id: "alg", nombre: "Álgebra Lineal", sem: 2, cred: 3, req: ["geom"], type: "cb" },
    { id: "fis1", nombre: "Física Mecánica", sem: 2, cred: 4, req: ["calcdif"], type: "cb" },
    { id: "matsc", nombre: "Ciencia de los Materiales", sem: 2, cred: 3, req: ["quim"], type: "ci" },
    { id: "estat", nombre: "Estática", sem: 2, cred: 3, req: ["fis1", "geom"], type: "ci" },
    { id: "hum2", nombre: "Sociohumanística II", sem: 2, cred: 2, req: ["hum1"], type: "hu" },

    // --- SEMESTRE 3 ---
    { id: "calcvec", nombre: "Cálculo Vectorial", sem: 3, cred: 4, req: ["calcint", "alg"], type: "cb" },
    { id: "ecuac", nombre: "Ecuaciones Diferenciales", sem: 3, cred: 3, req: ["calcint", "alg"], type: "cb" },
    { id: "fis2", nombre: "Física de Ondas y Campos (Física II)", sem: 3, cred: 4, req: ["fis1", "calcint"], type: "cb" },
    { id: "dinam", nombre: "Dinámica", sem: 3, cred: 3, req: ["estat"], type: "ci" },
    { id: "dibujo", nombre: "Expresión Gráfica", sem: 3, cred: 3, req: ["intro"], type: "ci" },
    { id: "estad", nombre: "Estadística y Diseño de Exp.", sem: 3, cred: 3, req: ["calcdif"], type: "cb" },

    // --- SEMESTRE 4 ---
    { id: "elec1", nombre: "Electrónica I", sem: 4, cred: 3, req: ["fis2", "prog1"], type: "ci" },
    { id: "solidos", nombre: "Mecánica de Sólidos y Lab.", sem: 4, cred: 4, req: ["estat", "matsc"], type: "ci" },
    { id: "manuf", nombre: "Procesos de Manufactura", sem: 4, cred: 3, req: ["matsc"], type: "ci" },
    { id: "termo", nombre: "Termodinámica", sem: 4, cred: 3, req: ["fis1", "calcint"], type: "ci" },
    { id: "fluidos", nombre: "Mecánica de Fluidos", sem: 4, cred: 3, req: ["fis1", "calcvec"], type: "ia" },
    { id: "hum3", nombre: "Sociohumanística III", sem: 4, cred: 2, req: ["hum2"], type: "hu" },

    // --- SEMESTRE 5 ---
    { id: "matesp", nombre: "Matemáticas Especiales", sem: 5, cred: 3, req: ["calcvec", "ecuac"], type: "cb" },
    { id: "calor", nombre: "Transferencia de Calor", sem: 5, cred: 3, req: ["termo", "fluidos", "ecuac"], type: "ci" },
    { id: "maquinas", nombre: "Máquinas Eléctricas", sem: 5, cred: 3, req: ["elec1"], type: "ci" },
    { id: "diseno1", nombre: "Diseño Mecánico y Dibujo Asistido", sem: 5, cred: 3, req: ["solidos", "dibujo"], type: "ci" },
    { id: "aero1", nombre: "Aerodinámica I", sem: 5, cred: 3, req: ["fluidos"], type: "ia" },
    { id: "sisaero1", nombre: "Sistemas Aeroespaciales I", sem: 5, cred: 3, req: ["intro", "elec1"], type: "ia" },

    // --- SEMESTRE 6 ---
    { id: "elec2", nombre: "Electrónica II", sem: 6, cred: 3, req: ["elec1"], type: "ci" },
    { id: "vibra", nombre: "Vibraciones Mecánicas", sem: 6, cred: 3, req: ["dinam", "ecuac"], type: "ci" },
    { id: "diseno2", nombre: "Diseño Mecánico y Sist. Mecánicos", sem: 6, cred: 3, req: ["diseno1"], type: "ci" },
    { id: "aero2", nombre: "Aerodinámica II", sem: 6, cred: 3, req: ["aero1"], type: "ia" },
    { id: "sisaero2", nombre: "Sistemas Aeroespaciales II", sem: 6, cred: 3, req: ["sisaero1", "maquinas"], type: "ia" },
    { id: "hum4", nombre: "Sociohumanística IV", sem: 6, cred: 2, req: ["hum3"], type: "hu" },

    // --- SEMESTRE 7 ---
    { id: "control", nombre: "Control Automático", sem: 7, cred: 3, req: ["ecuac", "elec2"], type: "ci" },
    { id: "estruct1", nombre: "Estructuras Aeroespaciales I", sem: 7, cred: 3, req: ["solidos", "aero2"], type: "ia" },
    { id: "propulsion", nombre: "Propulsión", sem: 7, cred: 3, req: ["termo", "fluidos"], type: "ia" },
    { id: "ingsis", nombre: "Ingeniería de Sistemas", sem: 7, cred: 3, req: ["sisaero2"], type: "ia" },
    { id: "navegacion", nombre: "Sistemas de Navegación", sem: 7, cred: 3, req: ["sisaero2"], type: "ia" },
    { id: "simulac", nombre: "Simulación y Modelado", sem: 7, cred: 3, req: ["matesp", "prog1"], type: "ci" },

    // --- SEMESTRE 8 ---
    { id: "estruct2", nombre: "Estructuras Aeroespaciales II", sem: 8, cred: 3, req: ["estruct1"], type: "ia" },
    { id: "disaero", nombre: "Diseño Aeroespacial", sem: 8, cred: 3, req: ["estruct1", "aero2", "propulsion"], type: "ia" },
    { id: "discontrol", nombre: "Diseño de Sistemas de Control", sem: 8, cred: 3, req: ["control", "navegacion"], type: "ia" },
    { id: "ensamble", nombre: "Ensamblaje y Calidad", sem: 8, cred: 3, req: ["manuf", "simulac"], type: "ia" },
    { id: "elecia1", nombre: "Electiva Ing. Aplicada 1", sem: 8, cred: 3, req: [], type: "ia" },
    { id: "elecp1", nombre: "Electiva Profundización 1", sem: 8, cred: 3, req: [], type: "ia" },

    // --- SEMESTRE 9 ---
    { id: "gerencia", nombre: "Gerencia de Proyectos", sem: 9, cred: 3, req: [], type: "ci" },
    { id: "dismis", nombre: "Diseño de Misiones Aeroespaciales", sem: 9, cred: 3, req: ["disaero", "discontrol"], type: "ia" },
    { id: "elecia2", nombre: "Electiva Ing. Aplicada 2", sem: 9, cred: 3, req: [], type: "ia" },
    { id: "elecp2", nombre: "Electiva Profundización 2", sem: 9, cred: 3, req: [], type: "ia" },
    { id: "eleclibre", nombre: "Electiva Libre", sem: 9, cred: 2, req: [], type: "hu" },
    { id: "hum5", nombre: "Sociohumanística V", sem: 9, cred: 2, req: ["hum4"], type: "hu" },
    
    // --- SEMESTRE 10 ---
    { id: "legal", nombre: "Legislación y Regulación Aérea", sem: 10, cred: 2, req: [], type: "ia" },
    { id: "grado", nombre: "Trabajo de Grado", sem: 10, cred: 4, req: ["dismis", "legal"], type: "ia" },
    { id: "elecia3", nombre: "Electiva Ing. Aplicada 3", sem: 10, cred: 3, req: [], type: "ia" },
    { id: "elecp3", nombre: "Electiva Profundización 3", sem: 10, cred: 3, req: [], type: "ia" },
    { id: "elecia4", nombre: "Electiva Ing. Aplicada 4", sem: 10, cred: 3, req: [], type: "ia" },
    { id: "eng5", nombre: "English V (Nivel 10)", sem: 10, cred: 2, req: [], type: "hu" },
];

// ====================================================================
// LÓGICA DE INTERACTIVIDAD
// ====================================================================

const container = document.getElementById('malla-container');
const infoTitulo = document.getElementById('info-titulo');
const infoCred = document.getElementById('info-creditos');
const infoReq = document.getElementById('info-requisitos');

/**
 * 1. Dibuja la malla curricular completa en el contenedor HTML.
 */
function renderMalla() {
    const numSemestres = 10;
    
    for (let i = 1; i <= numSemestres; i++) {
        const col = document.createElement('div');
        col.classList.add('semestre-col');
        
        // Título del Semestre
        const title = document.createElement('div');
        title.classList.add('semestre-title');
        title.innerText = `Nivel ${i}`;
        col.appendChild(title);

        // Materias del Semestre
        const materiasSemestre = materias.filter(m => m.sem === i);
        
        materiasSemestre.forEach(m => {
            const card = document.createElement('div');
            card.classList.add('materia', `cat-${m.type}`);
            card.innerText = m.nombre;
            card.dataset.id = m.id; // Almacenamos el ID para las conexiones
            
            // Eventos de Mouse para interactividad
            card.addEventListener('mouseenter', () => highlightConnections(m.id));
            card.addEventListener('mouseleave', resetHighlights);
            card.addEventListener('click', () => showInfo(m));

            col.appendChild(card);
        });

        container.appendChild(col);
    }
}

/**
 * 2. Ilumina las conexiones al pasar el mouse sobre una materia.
 */
function highlightConnections(selectedId) {
    const allCards = document.querySelectorAll('.materia');
    const selectedMateria = materias.find(m => m.id === selectedId);
    
    // Oscurecer todas las tarjetas primero
    allCards.forEach(card => card.classList.add('dimmed'));

    // --- Iluminar la seleccionada (Main) ---
    const mainCard = document.querySelector(`.materia[data-id="${selectedId}"]`);
    if(mainCard) {
        mainCard.classList.remove('dimmed');
        mainCard.classList.add('highlight-main');
    }

    // --- Iluminar Pre-requisitos (Hacia atrás) ---
    if(selectedMateria && selectedMateria.req) {
        selectedMateria.req.forEach(reqId => {
            const reqCard = document.querySelector(`.materia[data-id="${reqId}"]`);
            if(reqCard) {
                reqCard.classList.remove('dimmed');
                reqCard.classList.add('highlight-pre');
            }
        });
    }

    // --- Iluminar Post-requisitos (Hacia adelante / Habilitantes) ---
    // Buscamos materias que tienen a 'selectedId' en su lista 'req'
    materias.forEach(m => {
        if(m.req.includes(selectedId)) {
            const postCard = document.querySelector(`.materia[data-id="${m.id}"]`);
            if(postCard) {
                postCard.classList.remove('dimmed');
                postCard.classList.add('highlight-post');
            }
        }
    });
}

/**
 * 3. Restaura el estado de la malla.
 */
function resetHighlights() {
    const allCards = document.querySelectorAll('.materia');
    allCards.forEach(card => {
        card.classList.remove('dimmed', 'highlight-main', 'highlight-pre', 'highlight-post');
    });
    
    // Restablecer el panel de información al estado inicial
    infoTitulo.innerText = "Selecciona una materia";
    infoCred.innerText = "-";
    infoReq.innerText = "Pasa el mouse sobre cualquier asignatura.";
}

/**
 * 4. Muestra la información detallada en el panel inferior.
 */
function showInfo(m) {
    infoTitulo.innerText = `${m.nombre} (${m.id})`;
    infoCred.innerText = m.cred;
    
    // Convertir IDs de requisitos a Nombres reales
    const reqNombres = m.req.map(rId => {
        const found = materias.find(mat => mat.id === rId);
        return found ? found.nombre : rId;
    });

    infoReq.innerText = reqNombres.length > 0 ? reqNombres.join(', ') : 'Ninguno (Materia de Nivel I)';
}

// INICIALIZACIÓN: Dibuja la malla cuando la página carga
document.addEventListener('DOMContentLoaded', renderMalla);
