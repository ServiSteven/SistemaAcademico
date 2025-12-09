const THEME_KEY = 'theme';

export function guardarTema(theme: 'light' | 'dark') {
    sessionStorage.setItem(THEME_KEY, theme);
}

export function obtenerTema(): 'light' | 'dark' {
    return (sessionStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'light';
}

export function limpiarTema() {
    sessionStorage.removeItem(THEME_KEY);
}
