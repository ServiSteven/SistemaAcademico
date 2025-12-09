import { obtenerUsuario } from '../auth/auth';
import './Perfil.css';

export default function Perfil() {
    const user = obtenerUsuario();

    if (!user) {
        return (
            <div className="card perfil-card">
            <h2>Perfil</h2>
            <p>No hay usuario en sesión. Por favor inicia sesión.</p>
            </div>
        );
    }

    return (
        <div className="card perfil-card">
            <h2>Perfil de usuario</h2>
            <ul className="perfil-list">
            <li><strong>Nombre:</strong> {user.nombre}</li>
            <li><strong>Correo:</strong> {user.email}</li>
            <li><strong>Rol:</strong> {user.rol}</li>
            </ul>
            <button
            className="btn secondary"
            onClick={() => alert('Edición simulada')}
            >
            Editar perfil
            </button> <br /> <br />
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
