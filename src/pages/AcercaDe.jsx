import { useNavigate } from 'react-router-dom';
import './AcercaDe.css';

function AcercaDe() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="acerca-page-container">
      <h2 className="acerca-title">Acerca de Nuestra Comunidad</h2>
      <div className="acerca-content">
        <section className="acerca-section">
          <h3 className="acerca-section-title">Nuestra Historia</h3>
          <p className="acerca-section-text">
            En 2023, Johan Sánchez y Jaime Zapata, dos apasionados por la tecnología, fundaron esta comunidad con un sueño: unir a mentes curiosas para explorar el futuro digital. Lo que comenzó como una idea en una pequeña reunión en Medellín, Colombia, se ha convertido en un movimiento global que inspira a miles de personas a aprender, innovar y colaborar.
          </p>
        </section>
        <section className="acerca-section">
          <h3 className="acerca-section-title">Misión y Visión</h3>
          <p className="acerca-section-text">
            Nuestra misión es democratizar el acceso al conocimiento tecnológico, empoderando a individuos de todos los orígenes. Creemos en la colaboración abierta, la creatividad sin límites y el impacto positivo a través de la tecnología. Nuestra visión es ser el epicentro global para innovadores y aprendices.
          </p>
        </section>
        <section className="acerca-section">
          <h3 className="acerca-section-title">Nuestros Fundadores</h3>
          <div className="acerca-team-list">
            <div className="acerca-team-member">
              <h4>Johan Sánchez</h4>
              <p>Fundador y Visionario Tecnológico</p>
            </div>
            <div className="acerca-team-member">
              <h4>Jaime Zapata</h4>
              <p>Co-Fundador y Estratega de Comunidad</p>
            </div>
          </div>
        </section>
        <button onClick={handleBack} className="acerca-back-button">Volver a Home</button>
      </div>
    </div>
  );
}

export default AcercaDe;