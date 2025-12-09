export type Rol = 'Estudiante' | 'Tutor' | 'Admin';

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: Rol;
    activo: boolean;
}

export interface Materia {
    clave: string;
    nombre: string;
    creditos: number;
    cuatrimestre: number;
    prerequisitos: string[];
}

export interface Horario {
    dia: string;
    hora_inicio: string;
    hora_fin: string;
    aula: string;
}

export interface Grupo {
    id_grupo: number;
    codigo: string;
    clave_materia: string;
    nombre_materia: string;
    cuatrimestre: number;
    profesor: string;
    cupo: number;
    inscritos: number;
    horarios: Horario[];
}

export interface Alumno {
    id: number;
    usuario_id: number;
    matricula: string;
    carrera: string;
    cuatrimestre_actual: number;
    promedio: number;
    creditos_acumulados: number;
    tutor_id: number;
    materias_aprobadas: string[];
}

export interface Docente {
    id: number;
    usuario_id: number;
    clave_docente: string;
    especialidad: string;
    tutorados: number[];
}

export interface Inscripcion {
    id: number;
    alumno_id: number;
    grupo_id: number;
    materia_clave: string;
    ciclo: string;
    estatus: 'Cursando' | 'Aprobada' | 'Reprobada' | 'Baja';
    calificacion_final: number | null;
    fecha_registro: string;
}