import './Inicio.css';
import { useNavigate } from 'react-router-dom';
import { obtenerUsuario } from '../auth/auth.ts';

export default function Inicio() {
    const user = obtenerUsuario();
    const nav = useNavigate();

    const goPanel = () => {
        if (!user) return nav('/login');
        if (user.rol === 'Estudiante') nav('/estudiante');
        else if (user.rol === 'Tutor') nav('/tutor');
        else nav('/admin');
    };

    return (
        <div className="card inicio-card">
            <h2>Inicio - Lobby</h2>
            <p>Bienvenido — <strong>{user?.nombre || 'Invitado'}</strong></p>
            <div className="inicio-grid">
                <button className="btn" onClick={goPanel}>Carga académica</button>
                <button className="btn secondary" onClick={() => nav('/reportes')}>Reportes</button>
                <button className="btn secondary" onClick={() => nav('/perfil')}>Perfil</button>
                <button className="btn secondary" onClick={() => nav('/ajustes')}>Ajustes</button>
            </div>
        </div>
    );
}
