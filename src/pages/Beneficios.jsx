import { useNavigate } from 'react-router-dom';
import './Beneficios.css';

function Beneficios() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  const exclusiveActivities = [
    { id: 1, title: "ChatGPT gratis", description: "exclusivo para miembros." },
    { id: 2, title: "Mentorías personalizadas", description: "Guía con expertos." },
  ];

  const workshops = [
    { id: 1, title: "Webinar: Desarrollo frontend", date: "2025-05-20" },
    { id: 2, title: "Taller: Análisis de datos", date: "2025-06-10" },
  ];

  const resources = [
    { id: 1, title: "Guía de React", link: "#" },
    { id: 2, title: "Plantilla de diseño UI", link: "#" },
  ];

  return (
    <div className="beneficios-page-container">
      <h2 className="beneficios-title">Beneficios Exclusivos</h2>
      <div className="beneficios-content">
        <section className="beneficios-section">
          <h3 className="beneficios-section-title">Actividades Exclusivas</h3>
          <div className="beneficios-card-list">
            {exclusiveActivities.map(activity => (
              <div key={activity.id} className="beneficios-card">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="beneficios-section">
          <h3 className="beneficios-section-title">Talleres y Webinars</h3>
          <div className="beneficios-card-list">
            {workshops.map(workshop => (
              <div key={workshop.id} className="beneficios-card">
                <h4>{workshop.title}</h4>
                <p>Fecha: {workshop.date}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="beneficios-section">
          <h3 className="beneficios-section-title">Recursos Descargables</h3>
          <div className="beneficios-card-list">
            {resources.map(resource => (
              <div key={resource.id} className="beneficios-card">
                <h4>{resource.title}</h4>
                <a href={resource.link} className="beneficios-resource-link">Descargar</a>
              </div>
            ))}
          </div>
        </section>
        <button onClick={handleBack} className="beneficios-back-button">Volver a Home</button>
      </div>
    </div>
  );
}

export default Beneficios;