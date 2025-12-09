import { obtenerUsuario } from '../../auth/auth';
import { INSCRIPCIONES, GRUPOS } from '../../data/mockData';
import { Link } from 'react-router-dom';
import './PanelAlumno.css';
import { generarPDFCargaAcademica } from '../../utils/pdf';

export default function PanelAlumno() {
    const user = obtenerUsuario();
    const alumnoId = user?.id;

    const inscripciones = INSCRIPCIONES.filter(i => i.alumno_id === alumnoId);
    const datosAlumno = {
        nombre: user?.nombre,
        matricula: '24020200010',
        carrera: 'Ingeniería en Software',
        cuatrimestre: 5,
        promedio: 9.2,
        creditos: 120,
    };

    return (
        <div className="panel-alumno">
        <aside className="menu-lateral">
            <h4>Menú</h4>
            <ul>
                <li><Link to="/inicio">🏠 Inicio</Link></li>
                <li><Link to="/perfil">👤 Perfil</Link></li>
                <li><Link to="/reportes">📄 Reportes</Link></li>
                <li><Link to="/ajustes">⚙️ Ajustes</Link></li>
            </ul>
        </aside>

        <main className="contenido-principal">
            <h2>Mi carga académica</h2>
            <div className="datos-alumno">
                <p><strong>Nombre:</strong> {datosAlumno.nombre}</p>
                <p><strong>Matrícula:</strong> {datosAlumno.matricula}</p>
                <p><strong>Carrera:</strong> {datosAlumno.carrera}</p>
                <p><strong>Cuatrimestre:</strong> {datosAlumno.cuatrimestre}</p>
                <p><strong>Promedio:</strong> {datosAlumno.promedio}</p>
                <p><strong>Créditos acumulados:</strong> {datosAlumno.creditos}</p>
            </div>

            <table className="tabla-carga">
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Materia</th>
                    <th>Grupo</th>
                    <th>Profesor</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {inscripciones.map(i => {
                    const grupo = GRUPOS.find(g => g.id_grupo === i.grupo_id);
                    return (
                    <tr key={i.id}>
                        <td>{i.materia_clave}</td>
                        <td>{grupo?.nombre_materia}</td>
                        <td>{grupo?.codigo}</td>
                        <td>{grupo?.profesor}</td>
                        <td>
                        <span className={`estado ${i.estatus.toLowerCase()}`}>
                            {i.estatus}
                        </span>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
            </table>

            <div className="acciones">
                <button className="btn" onClick={generarPDFCargaAcademica}>
                    📥 Descargar comprobante
                </button>
            </div>
            <div className="volver"> <br />
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
