import type { Usuario, Inscripcion, Grupo, Materia } from '../types';
import { USUARIOS, INSCRIPCIONES, GRUPOS, MATERIAS } from '../data/mockData';

export function validarCredenciales(email: string, password: string): Usuario | null {
  // Simulación: el password es siempre "1234"
    const user = USUARIOS.find(u => u.email === email);
    if (user && password === '1234') return user;
    return null;
}

export function obtenerCargaAlumno(alumnoId: number) {
    return INSCRIPCIONES
        .filter(i => i.alumno_id === alumnoId)
        .map(i => {
            const grupo: Grupo | undefined = GRUPOS.find(g => g.id_grupo === i.grupo_id);
            const materia: Materia | undefined = MATERIAS.find(m => m.clave === i.materia_clave);
            return {
                ...i,
                nombreMateria: materia?.nombre || 'Desconocida',
                grupoCodigo: grupo?.codigo || 'N/A',
                profesor: grupo?.profesor || 'Sin asignar',
            };
        });
}