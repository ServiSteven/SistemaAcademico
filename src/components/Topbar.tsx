import './Topbar.css';

type Props = { user: { nombre: string; rol: string } | null; onLogout: () => void };

export default function Topbar({ user, onLogout }: Props) {
    return (
        <header className="header topbar">
        <div className="brand">
            <div className="logo">UP</div>
            <div>
                <div className="nombre">{user?.nombre || 'Invitado'}</div>
                <div className="rol">{user?.rol || ''}</div>
            </div>
        </div>
        <div className="actions">
            {user ? (
            <button className="btn" onClick={onLogout}>Salir</button>
            ) : (
            <a href="/login" className="btn">Iniciar sesión</a>
            )}
        </div>
        </header>
    );
}
