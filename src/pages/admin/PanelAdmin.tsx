import { useState } from "react";
import { PENDIENTES_ADMIN } from "../../data/mockData";
import { obtenerUsuario } from "../../auth/auth";
import "./PanelAdmin.css";

export default function PanelAdmin() {
    const user = obtenerUsuario();
    const [filtroEstado, setFiltroEstado] = useState("Todos");
    const [acciones, setAcciones] = useState<{ [key: number]: string }>({});
    const [resumenVisible, setResumenVisible] = useState(false);

    const pendientesFiltrados = PENDIENTES_ADMIN.filter(p => {
        if (filtroEstado === "Todos") return true;
        const estadoActual = acciones[p.id] ?? p.estado;
        return estadoActual === filtroEstado;
    });

    const manejarAccion = (id: number, estado: string) => {
        setAcciones(prev => ({ ...prev, [id]: estado }));
    };

    const [toastVisible, setToastVisible] = useState(false);
        const confirmarAcciones = () => {
        setResumenVisible(false);
        setAcciones({});
        setToastVisible(true);

        setTimeout(() => setToastVisible(false), 3500);
    };


    return (
        <div className="panel-admin">
        <aside className="menu-lateral">
            <h4>Menú</h4>
            <ul>
                <li>📝 Validar cargas</li>
                <li>🛠️ Corregir errores</li>
                <li>👥 Gestión usuarios</li>
                <li>📊 Reportes</li>
            </ul>
        </aside>

        <main className="contenido-principal">
            <h2>Validación de cargas {user ? `— ${user.nombre}` : ""}</h2>

            <div className="filtros">
            <label htmlFor="filtro-estado">Filtrar por estado:</label>
                <select
                    id="filtro-estado"
                    aria-label="Filtrar por estado de propuesta"
                    onChange={e => setFiltroEstado(e.target.value)}
                >
                    <option>Todos</option>
                    <option>Pendiente</option>
                    <option>Aprobada</option>
                    <option>Rechazada</option>
                </select>
            </div>

            <div className="cards-pendientes">
            {pendientesFiltrados.map(p => {
                const estadoActual = acciones[p.id] ?? p.estado;
                return (
                <div key={p.id} className="card-pendiente">
                    <p><strong>Revisar propuesta:</strong> {p.resumen}</p>
                    <div className="acciones">
                    <button
                        className="btn aprobar"
                        onClick={() => manejarAccion(p.id, "Aprobada")}
                    >
                        ✅ Aprobar
                    </button>
                    <button
                        className="btn rechazar"
                        onClick={() => manejarAccion(p.id, "Rechazada")}
                    >
                        ❌ Rechazar
                    </button>
                    </div>
                    <p className={`estado ${estadoActual.toLowerCase()}`}>
                    Estado: {estadoActual}
                    </p>
                </div>
                );
            })}
            </div>

            <section className="confirmacion">
                <h3>Sistema - Confirmación</h3>
                <button className="btn" onClick={() => setResumenVisible(true)}>Aceptar</button> <br /> <br />
                <div className="volver">
                    <button
                    className="btn secondary"
                    onClick={() => (window.location.href = '/')}
                    >
                    « Volver al inicio
                    </button>
                </div>
            </section>

            {resumenVisible && (
            <div className="resumen-confirmacion">
                <h4>Resumen de validación</h4>
                <div className="resumen-lista">
                {PENDIENTES_ADMIN.map(p => {
                    const estadoFinal = acciones[p.id] ?? p.estado;
                    return (
                    <div key={p.id} className={`resumen-item ${estadoFinal.toLowerCase()}`}>
                        <p><strong>{p.resumen}</strong></p>
                        <span className="estado-final">Estado: {estadoFinal}</span>
                    </div>
                    );
                })}
                </div>
                <div className="acciones-resumen">
                <button className="btn" onClick={confirmarAcciones}>Confirmar</button>
                <button className="btn secondary" onClick={() => setResumenVisible(false)}>Cancelar</button>
                </div>
            </div>
            )}
            {toastVisible && (
                <div className="toast-exito">
                    ✅ Validación registrada con éxito
                </div>
            )}
        </main>
        </div>
    );
}
