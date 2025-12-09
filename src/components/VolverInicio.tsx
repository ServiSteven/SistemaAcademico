import { useNavigate } from 'react-router-dom';

export default function VolverInicio() {
    const nav = useNavigate();
    return <button className="btn secondary" onClick={() => nav('/inicio')}>« Volver al inicio</button>;
}
