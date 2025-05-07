import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/registro');
  };

  return (
    <div className="login-page-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <div className="login-form-group">
        <label htmlFor="email">Usuario / Correo</label>
        <input type="text" id="email" placeholder="Ingresa tu correo" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
      <a href="/registro" onClick={(e) => { e.preventDefault(); handleRegister(); }} className="login-page-link">
        Unirse a la Comunidad
      </a>
    </div>
  );
}