import Topbar from './Topbar';
import { obtenerUsuario, limpiarSesion } from '../auth/auth';
import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    const user = obtenerUsuario();

    const handleLogout = () => {
        limpiarSesion();
        window.location.href = '/login';
    };

    return (
        <>
            <Topbar user={user} onLogout={handleLogout} />
            <main>{children}</main>
        </>
    );
}
