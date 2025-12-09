import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { guardarUsuario } from '../auth/auth.ts';
import { validarCredenciales } from '../utils/validaciones';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const nav = useNavigate();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = validarCredenciales(email, pass);
        if (!user) {
        alert('Credenciales inválidas o usuario no encontrado.');
        return;
        }
        guardarUsuario(user);
        if (user.rol === 'Estudiante') nav('/alumno');
        else if (user.rol === 'Tutor') nav('/tutor');
        else nav('/admin');
    };

    return (
        <div className="app-container login-container">
        <div className="card login-card">
            <h2>Login / Autenticación</h2>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Correo institucional</label>
                <input
                id="email"
                className="input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ej. 24020200010@uppenjamo.edu.mx, joesqueda@uppenjamo.edu.mx"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                id="password"
                className="input"
                type="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="Ingresa tu contraseña"
                />
            </div>
            <div className="login-actions">
                <button className="btn" type="submit">Entrar</button>
                <button
                type="button"
                className="btn secondary"
                onClick={() => alert('Recuperación "1234"')}
                >
                Recuperar contraseña
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}



/* import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { guardarUsuario } from '../auth/auth.ts';
import './Login.css';

import { USUARIOS } from '../data/mockData';
import type { Usuario } from '../types';

export function validarCredenciales(email: string, password: string): Usuario | null {
    // Simulación: todos los usuarios usan "1234" como contraseña
    const user = USUARIOS.find(u => u.email === email);
    if (user && password === '1234') return user;
    return null;
}


export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const nav = useNavigate();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/login', { email, password: pass });
            guardarUsuario(data);
            const rol = data.rol;
            if (rol === 'Alumno') nav('/alumno');
            else if (rol === 'Tutor') nav('/tutor');
            else nav('/admin');
        } catch (err) {
            alert('Credenciales inválidas o usuario no encontrado.');
        }
    };

    return (
        <div className="app-container login-container">
        <div className="card login-card">
            <h2>Login / Autenticación</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correo institucional</label>
                    <input
                    id="email"
                    className="input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="ej. 24020200010@uppenjamo.edu.mx"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                    id="password"
                    className="input"
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    />
                </div>
                <div className="login-actions">
                    <button className="btn" type="submit">Entrar</button>
                    <button
                    type="button"
                    className="btn secondary"
                    onClick={() => alert('La contraseña es "1234"')}
                    >
                    Recuperar contraseña
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}
 */