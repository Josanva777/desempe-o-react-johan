import { useNavigate } from 'react-router-dom';
import './Registro.css';

export default function Registro() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/home');
  };

  return (
    <div className="registro-page-container">
      <h2 className="registro-title">Registro</h2>
      <div className="registro-form-group">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" placeholder="Ingresa tu usuario" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" />
        <label htmlFor="fullName">Nombre Completo</label>
        <input type="text" id="fullName" placeholder="Ingresa tu nombre completo" />
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" placeholder="Ingresa tu correo" />
        <button onClick={handleRegister}>Unirse a la Comunidad</button>
      </div>
      <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="registro-page-link">
        Iniciar Sesión
      </a>
    </div>
  );
}