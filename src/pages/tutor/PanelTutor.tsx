import { DOCENTES, ALUMNOS, PROPUESTAS_TUTOR } from '../../data/mockData';
import { obtenerUsuario } from '../../auth/auth';
import './PanelTutor.css';

export default function PanelTutor() {
    const user = obtenerUsuario();
    const docente = DOCENTES.find(d => d.usuario_id === user?.id);
    const tutorados = ALUMNOS.filter(a => docente?.tutorados.includes(a.id));

    return (
        <div className="panel-tutor">
        <aside className="menu-lateral">
            <h4>Menú</h4>
            <ul>
                <li>🏠 Inicio</li>
                <li>📚 Tutorados</li>
                <li>📝 Propuestas</li>
                <li>⚙️ Ajustes</li>
            </ul>
        </aside>

        <main className="contenido-principal">
            <h2>Panel del Tutor</h2>

            <section>
                <h3>Tutorados asignados</h3>
                <div className="cards-tutorados">
                    {tutorados.map(t => (
                    <div key={t.id} className="card-tutorado">
                        <h4>{t.usuario_id === 1 ? "Steven Reyes Alvarado" : t.usuario_id === 2 ? "Pablo Negrete Madrigal" : "Demian Rodríguez Gutiérrez"}</h4>
                        <p><strong>Matrícula:</strong> {t.matricula}</p>
                        <p><strong>Cuatrimestre:</strong> {t.cuatrimestre_actual}</p>
                        <p><strong>Promedio:</strong> {t.promedio}</p>
                    </div>
                    ))}
                </div>
            </section>

            <section>
                <h3>Propuestas del tutor</h3>
                <div className="cards-propuestas">
                    {PROPUESTAS_TUTOR.map((p, index) => (
                    <div key={index} className={`card-propuesta ${p.estado.toLowerCase()}`}>
                        <p><strong>Alumno:</strong> {p.alumno}</p>
                        <p><strong>Propuesta:</strong> {p.propuesta}</p>
                        <p><strong>Estado:</strong> {p.estado}</p>
                    </div>
                    ))}
                </div>
            </section> <br />
            <div className="volver">
                <button
                    className="btn secondary"
                    onClick={() => (window.location.href = '/')}
                >
                    « Volver al inicio
                </button>
            </div>
        </main>
        </div>
    );
}
