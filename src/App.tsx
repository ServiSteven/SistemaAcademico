import { Routes, Route, Navigate } from 'react-router-dom';
import { obtenerUsuario, limpiarSesion } from './auth/auth.ts';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import PanelAlumno from './pages/alumno/PanelAlumno';
import PanelTutor from './pages/tutor/PanelTutor';
import PanelAdmin from './pages/admin/PanelAdmin';
import Topbar from './components/Topbar';
import type { ReactNode } from 'react';
import Perfil from './pages/Perfil.tsx';
import Reportes from './pages/Reportes.tsx';
import Ajustes from './pages/Ajustes.tsx';
import { useEffect } from 'react';
import { limpiarTema, obtenerTema } from './utils/theme';


function Protected({ children, roles }: { children: ReactNode; roles?: Array<'Estudiante'|'Tutor'|'Admin'> }) {
  const user = obtenerUsuario();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.rol)) return <Navigate to="/inicio" replace />;
  return <>{children}</>;
}

export default function App() {
  const user = obtenerUsuario();

  useEffect(() => {
    const tema = obtenerTema();
    document.body.classList.toggle('dark-theme', tema === 'dark');
  }, []);

  return (
    <div className="app-container">
      {/* Topbar global: aparece una sola vez */}
      <Topbar user={user} onLogout={() => { limpiarTema(); limpiarSesion(); window.location.href = '/login'; }} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Protected><Perfil /></Protected>} />
        <Route path="/reportes" element={<Protected><Reportes /></Protected>} />
        <Route path="/ajustes" element={<Protected><Ajustes /></Protected>} />
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/estudiante" element={<Protected roles={['Estudiante']}><PanelAlumno /></Protected>} />
        <Route path="/tutor" element={<Protected roles={['Tutor']}><PanelTutor /></Protected>} />
        <Route path="/admin" element={<Protected roles={['Admin']}><PanelAdmin /></Protected>} />
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </div>
  );
}


