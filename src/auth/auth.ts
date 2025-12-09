import type { Usuario } from '../types';

const KEY = 'user';

export function guardarUsuario(u: Usuario) {
    sessionStorage.setItem(KEY, JSON.stringify(u));
}

export function obtenerUsuario(): Usuario | null {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
}

export function limpiarSesion() {
    sessionStorage.removeItem(KEY);
}
