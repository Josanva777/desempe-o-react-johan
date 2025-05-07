import { useNavigate } from 'react-router-dom';
import './Contacto.css';

function Contacto() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sugerencia enviada (simulación)');
  };

  return (
    <div className="contacto-page-container">
      <h2 className="contacto-title">Contáctanos</h2>
      <div className="contacto-content">
        <section className="contacto-form-section">
          <h3 className="contacto-section-title">Envía tus Sugerencias o Solicita Ayuda</h3>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Ingresa tu nombre" required />
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" required />
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" placeholder="Escribe tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section className="contacto-direct-section">
          <h3 className="contacto-section-title">Contacto Directo</h3>
          <p>Chatea con un administrador:</p>
          <a href="#" className="contacto-chat-link">Iniciar Chat</a>
        </section>
        <button onClick={handleBack} className="contacto-back-button">Volver a Home</button>
      </div>
    </div>
  );
}

export default Contacto;