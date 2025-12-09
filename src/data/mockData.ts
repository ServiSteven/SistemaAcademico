import type { Usuario, Materia, Grupo, Alumno, Docente, Inscripcion } from '../types';

// ==================== MATERIAS ====================
export const MATERIAS: Materia[] = [
  // CUATRIMESTRE 1
    { clave: "1000", nombre: "INGLÉS I", creditos: 5, cuatrimestre: 1, prerequisitos: [] },
    { clave: "2000", nombre: "Química Básica", creditos: 8, cuatrimestre: 1, prerequisitos: [] },
    { clave: "3000", nombre: "Álgebra Lineal", creditos: 8, cuatrimestre: 1, prerequisitos: [] },
    { clave: "4000", nombre: "Fundamentos de Computación", creditos: 8, cuatrimestre: 1, prerequisitos: [] },
    { clave: "5000", nombre: "Algoritmos", creditos: 8, cuatrimestre: 1, prerequisitos: [] },
    { clave: "6000", nombre: "Matemáticas Discretas", creditos: 8, cuatrimestre: 1, prerequisitos: [] },
    { clave: "7000", nombre: "Expresión Oral y Escrita I", creditos: 5, cuatrimestre: 1, prerequisitos: [] },
    
  // CUATRIMESTRE 2
    { clave: "8000", nombre: "INGLÉS II", creditos: 5, cuatrimestre: 2, prerequisitos: ["1000"] },
    { clave: "9000", nombre: "Desarrollo Humano y Valores", creditos: 5, cuatrimestre: 2, prerequisitos: [] },
    { clave: "10000", nombre: "Cálculo Diferencial", creditos: 8, cuatrimestre: 2, prerequisitos: ["3000"] },
    { clave: "11000", nombre: "Programación Orientada a Objetos", creditos: 8, cuatrimestre: 2, prerequisitos: ["5000"] },
    { clave: "12000", nombre: "Estructuras de Datos", creditos: 8, cuatrimestre: 2, prerequisitos: ["5000"] },
    
  // CUATRIMESTRE 3
    { clave: "15000", nombre: "INGLÉS III", creditos: 5, cuatrimestre: 3, prerequisitos: ["8000"] },
    { clave: "17000", nombre: "Cálculo Integral", creditos: 8, cuatrimestre: 3, prerequisitos: ["10000"] },
    { clave: "18000", nombre: "Programación Visual", creditos: 8, cuatrimestre: 3, prerequisitos: ["11000"] },
    { clave: "20000", nombre: "Fundamentos de Bases de Datos", creditos: 8, cuatrimestre: 3, prerequisitos: ["12000"] },
    
  // CUATRIMESTRE 4
    { clave: "22000", nombre: "INGLÉS IV", creditos: 5, cuatrimestre: 4, prerequisitos: ["15000"] },
    { clave: "25000", nombre: "Programación WEB", creditos: 8, cuatrimestre: 4, prerequisitos: ["18000", "20000"] },
    { clave: "27000", nombre: "Bases de Datos", creditos: 8, cuatrimestre: 4, prerequisitos: ["20000"] },
    
  // CUATRIMESTRE 5
    { clave: "29000", nombre: "INGLÉS V", creditos: 5, cuatrimestre: 5, prerequisitos: ["22000"] },
    { clave: "30000", nombre: "Ética Profesional", creditos: 5, cuatrimestre: 5, prerequisitos: [] },
    { clave: "31000", nombre: "Matemáticas para Ingeniería II", creditos: 8, cuatrimestre: 5, prerequisitos: ["17000"] },
    { clave: "32000", nombre: "Programación Cliente/Servidor", creditos: 8, cuatrimestre: 5, prerequisitos: ["25000"] },
    { clave: "33000", nombre: "Fundamentos de Redes", creditos: 8, cuatrimestre: 5, prerequisitos: [] },
    { clave: "34000", nombre: "Arquitectura de Software", creditos: 8, cuatrimestre: 5, prerequisitos: ["25000"] },
];

// ==================== GRUPOS ====================
export const GRUPOS: Grupo[] = [
    {
        id_grupo: 1,
        codigo: "ISW-5A",
        clave_materia: "29000",
        nombre_materia: "INGLÉS V",
        cuatrimestre: 5,
        profesor: "Prof. María García",
        cupo: 30,
        inscritos: 15,
        horarios: [
        { dia: "Lunes", hora_inicio: "10:20", hora_fin: "11:10", aula: "11" },
        { dia: "Martes", hora_inicio: "10:20", hora_fin: "11:10", aula: "11" },
        { dia: "Miércoles", hora_inicio: "10:20", hora_fin: "11:10", aula: "11" },
        { dia: "Jueves", hora_inicio: "10:20", hora_fin: "11:10", aula: "11" },
        { dia: "Viernes", hora_inicio: "10:20", hora_fin: "11:10", aula: "11" },
        ]
    },
    {
        id_grupo: 2,
        codigo: "ISW-5A",
        clave_materia: "30000",
        nombre_materia: "Ética Profesional",
        cuatrimestre: 5,
        profesor: "Prof. Juan Pérez",
        cupo: 30,
        inscritos: 18,
        horarios: [
        { dia: "Lunes", hora_inicio: "11:10", hora_fin: "12:00", aula: "11" },
        { dia: "Martes", hora_inicio: "11:10", hora_fin: "12:00", aula: "11" },
        { dia: "Miércoles", hora_inicio: "11:10", hora_fin: "12:00", aula: "11" },
        ]
    },
    {
        id_grupo: 3,
        codigo: "ISW-5A",
        clave_materia: "31000",
        nombre_materia: "Matemáticas para Ingeniería II",
        cuatrimestre: 5,
        profesor: "Prof. Carlos Ruiz",
        cupo: 30,
        inscritos: 20,
        horarios: [
        { dia: "Lunes", hora_inicio: "12:00", hora_fin: "12:50", aula: "22" },
        { dia: "Miércoles", hora_inicio: "12:00", hora_fin: "12:50", aula: "22" },
        { dia: "Jueves", hora_inicio: "07:00", hora_fin: "07:50", aula: "22" },
        { dia: "Jueves", hora_inicio: "11:10", hora_fin: "12:00", aula: "22" },
        { dia: "Viernes", hora_inicio: "12:00", hora_fin: "12:50", aula: "22" },
        ]
    },
    {
        id_grupo: 4,
        codigo: "ISW-5A",
        clave_materia: "32000",
        nombre_materia: "Programación Cliente/Servidor",
        cuatrimestre: 5,
        profesor: "Prof. Ana López",
        cupo: 30,
        inscritos: 22,
        horarios: [
        { dia: "Lunes", hora_inicio: "13:40", hora_fin: "14:30", aula: "Lab 1" },
        { dia: "Martes", hora_inicio: "12:50", hora_fin: "14:30", aula: "Lab 1" },
        { dia: "Miércoles", hora_inicio: "12:50", hora_fin: "13:40", aula: "Lab 1" },
        { dia: "Jueves", hora_inicio: "12:00", hora_fin: "12:50", aula: "Lab 1" },
        { dia: "Jueves", hora_inicio: "13:40", hora_fin: "14:30", aula: "Lab 1" },
        ]
    },
];

// ==================== USUARIOS ====================
export const USUARIOS: Usuario[] = [
    { id: 1, nombre: "Steven Reyes Alvarado", email: "24020200010@uppenjamo.edu.mx", rol: "Estudiante", activo: true },
    { id: 2, nombre: "Pablo Negrete Madrigal", email: "24030200041@uppenjamo.edu.mx", rol: "Estudiante", activo: true },
    { id: 3, nombre: "Demian Rodríguez Gutiérrez", email: "24020200013@uppenjamo.edu.mx", rol: "Estudiante", activo: true },
    { id: 4, nombre: "José Octavio Esqueda", email: "joesqueda@uppenjamo.edu.mx", rol: "Tutor", activo: true },
    { id: 5, nombre: "Evaristo Admin", email: "admin@uppenjamo.edu.mx", rol: "Admin", activo: true },
];

// ==================== ALUMNOS ====================
export const ALUMNOS: Alumno[] = [
    {
        id: 1,
        usuario_id: 1,
        matricula: "24020200010",
        carrera: "Ingeniería en Software",
        cuatrimestre_actual: 5,
        promedio: 9.2,
        creditos_acumulados: 120,
        tutor_id: 4,
        materias_aprobadas: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000", "11000", "12000", "15000", "17000", "18000", "20000", "22000", "25000", "27000"]
    },
    {
        id: 2,
        usuario_id: 2,
        matricula: "2403020041",
        carrera: "Ingeniería en Software",
        cuatrimestre_actual: 5,
        promedio: 8.8,
        creditos_acumulados: 118,
        tutor_id: 4,
        materias_aprobadas: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000", "11000", "12000", "15000", "17000", "18000", "20000", "22000", "25000"]
    },
];

// ==================== DOCENTES ====================
export const DOCENTES: Docente[] = [
    {
        id: 1,
        usuario_id: 4,
        clave_docente: "DOC001",
        especialidad: "Ingeniería de Software",
        tutorados: [1, 2]
    }
];

// ==================== INSCRIPCIONES ====================
export const INSCRIPCIONES: Inscripcion[] = [
    // Steven
    { id: 1, alumno_id: 1, grupo_id: 1, materia_clave: "29000", ciclo: "2025-2", estatus: "Aprobada", calificacion_final: null, fecha_registro: "2025-01-15" },
    { id: 2, alumno_id: 1, grupo_id: 2, materia_clave: "30000", ciclo: "2025-2", estatus: "Cursando", calificacion_final: null, fecha_registro: "2025-01-15" },
    { id: 3, alumno_id: 1, grupo_id: 3, materia_clave: "31000", ciclo: "2025-2", estatus: "Cursando", calificacion_final: null, fecha_registro: "2025-01-15" },

    // Pablo
    { id: 4, alumno_id: 2, grupo_id: 2, materia_clave: "30000", ciclo: "2025-2", estatus: "Cursando", calificacion_final: null, fecha_registro: "2025-01-16" },
    { id: 5, alumno_id: 2, grupo_id: 4, materia_clave: "32000", ciclo: "2025-2", estatus: "Cursando", calificacion_final: null, fecha_registro: "2025-01-16" },

    // Demian
    { id: 6, alumno_id: 3, grupo_id: 1, materia_clave: "29000", ciclo: "2025-2", estatus: "Reprobada", calificacion_final: null, fecha_registro: "2025-01-17" },
    { id: 7, alumno_id: 3, grupo_id: 3, materia_clave: "31000", ciclo: "2025-2", estatus: "Cursando", calificacion_final: null, fecha_registro: "2025-01-17" },
];


// ==================== PROPUESTAS DEL TUTOR ====================
export const PROPUESTAS_TUTOR = [
    { alumno: "Steven Reyes", propuesta: "Agregar Programación WEB", estado: "Pendiente" },
    { alumno: "Pablo Negrete", propuesta: "Cambiar grupo de Ética Profesional", estado: "Aprobada" },
];

// ==================== PENDIENTES ====================
export const PENDIENTES_ADMIN = [
    { id: 1, resumen: "Carga de Steven Reyes — Cuatrimestre 5 — 3 materias nuevas", estado: "Pendiente" },
    { id: 2, resumen: "Carga de Pablo Negrete — Cambio de grupo en Ética Profesional", estado: "Pendiente" },
    { id: 3, resumen: "Carga de Demian Rodríguez — Solicitud de recursamiento en Programación WEB", estado: "Pendiente" },
];



/* export const pendientesAdmin = [
    { id: 1, alumno: 'Steven', resumen: 'Carga 2025-3 (2 materias)', estado: 'En revisión' },
    { id: 2, alumno: 'Pablo', resumen: 'Carga 2025-3 (3 materias)', estado: 'Pendiente' }
];

export const cargaAlumno = [
    { id: 1, clave: 'APP-WEB', grupo: '4A-TIID', estado: 'Cursando' },
    { id: 2, clave: 'ANA-SOF', grupo: '4B-TIID', estado: 'Pendiente' }
];

export const materias = [
    { clave: 'APP-WEB', nombre: 'Aplicaciones Web', creditos: 8, semestre: 4 },
    { clave: 'ANA-SOF', nombre: 'Análisis y Diseño de Software', creditos: 8, semestre: 4 },
    { clave: 'BD', nombre: 'Bases de Datos', creditos: 8, semestre: 3 }
];

export const propuestasTutor = [
    { id: 1, alumno: 'María', propuesta: 'Carga con 3 materias (APP-WEB, BD, ANA-SOF)', estado: 'Pendiente' },
    { id: 2, alumno: 'José', propuesta: 'Carga con 2 materias (APP-WEB, BD)', estado: 'Pendiente' },
    { id: 3, alumno: 'Lucía', propuesta: 'Carga con 4 materias (APP-WEB, BD, ANA-SOF, Redes)', estado: 'Pendiente' }
];
 */