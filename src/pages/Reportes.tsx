import { obtenerUsuario } from '../auth/auth';
import { INSCRIPCIONES, PROPUESTAS_TUTOR, PENDIENTES_ADMIN } from '../data/mockData';
import './Reportes.css';

export default function Reportes() {
    const user = obtenerUsuario();

    if (!user) {
        return (
        <div className="card reportes-card">
            <h2>Reportes</h2>
            <p>No hay usuario en sesión.</p>
        </div>
        );
    }

    return (
        <div className="card reportes-card">
        <h2>Reportes</h2>

        {user.rol === 'Estudiante' && (
            <>
            <h3>Historial de inscripciones</h3>
            <ul>
                {INSCRIPCIONES.filter(i => i.alumno_id === user.id).map(i => (
                <li key={i.id}>
                    {i.materia_clave} — {i.estatus} ({i.ciclo})
                </li>
                ))}
            </ul>
            </>
        )}

        {user.rol === 'Tutor' && (
            <>
            <h3>Propuestas enviadas</h3>
            <ul>
                {PROPUESTAS_TUTOR.map((p, i) => (
                <li key={i}>{p.alumno}: {p.propuesta} — {p.estado}</li>
                ))}
            </ul>
            </>
        )}

        {user.rol === 'Admin' && (
            <>
            <h3>Pendientes de validación</h3>
            <ul>
                {PENDIENTES_ADMIN.map(p => (
                <li key={p.id}>{p.resumen}</li>
                ))}
            </ul>
            </>
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
