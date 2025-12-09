import { useEffect, useState } from 'react';
import { obtenerUsuario } from '../auth/auth';
import './Ajustes.css';
import { guardarTema, obtenerTema } from '../utils/theme';

export default function Ajustes() {
    const user = obtenerUsuario();
    const [notifActivas, setNotifActivas] = useState(false); // estado inicial: desactivadas
    const [darkMode, setDarkMode] = useState(obtenerTema() === 'dark');

    useEffect(() => {
        document.body.classList.toggle('dark-theme', darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        const nuevoTema = darkMode ? 'light' : 'dark';
        guardarTema(nuevoTema);
        setDarkMode(!darkMode);
        alert(`Tema ${nuevoTema} activado`);
    };

    if (!user) {
        return (
        <div className="card ajustes-card">
            <h2>Ajustes</h2>
            <p>No hay usuario en sesión.</p>
        </div>
        );
    }

    const toggleNotificaciones = () => {
        setNotifActivas(!notifActivas);
        alert(notifActivas ? 'Notificaciones de materias desactivadas' : 'Notificaciones de materias activadas');
    };

    return (
        <div className="card ajustes-card">
        <h2>Ajustes</h2>
        <p><strong>Usuario:</strong> {user.nombre} ({user.rol})</p>

        <section>
        <section>
            <h3>Preferencias</h3>
            <button className="btn secondary" onClick={toggleTheme}>
            {darkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            </button>
        </section>
            <button className="btn secondary" onClick={() => alert('Idioma cambiado (simulado)')}>
            Cambiar idioma
            </button>
        </section>

        {user.rol === 'Estudiante' && (
            <section>
            <h3>Ajustes de estudiante</h3>
            <button className="btn" onClick={toggleNotificaciones}>
                {notifActivas ? 'Desactivar notificaciones de materias' : 'Activar notificaciones de materias'}
            </button>
            </section>
        )}

        {user.rol === 'Tutor' && (
            <section>
            <h3>Ajustes de tutor</h3>
            <button className="btn" onClick={() => alert('Preferencias de tutoría guardadas')}>
                Guardar preferencias de tutoría
            </button>
            </section>
        )}

        {user.rol === 'Admin' && (
            <section>
            <h3>Ajustes de administrador</h3>
            <button className="btn" onClick={() => alert('Configuración de sistema actualizada')}>
                Actualizar configuración del sistema
            </button>
            </section>
        )}
            <div className="volver">
                <button
                    className="btn secondary"
                    onClick={() => (window.location.href = '/')}
                >
                    « Volver al inicio
                </button>
            </div>
        </div>
    );
}
