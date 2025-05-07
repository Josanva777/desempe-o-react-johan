import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const username = "Johan"; // Simulación de nombre de usuario

  const handleBack = () => {
    navigate('/');
  };

  const recentActivities = [
    { id: 1, title: "Maquetacion de primer momento", date: "2025-03-01" },
    { id: 2, title: "Proyecto integrador", date: "2025-05-07" },
  ];

  const featuredForums = [
    { id: 1, title: "Uso de IA", posts: 999 },
    { id: 2, title: "Codigo a mano", posts: 1 },
  ];

  const upcomingEvents = [
    { id: 1, title: "Maquetacion dos", date: "2025-05-13" },
    { id: 2, title: "Uso de react Router", date: "2025-05-13" },
  ];

  return (
    <div className="home-page-container">
      <nav className="home-nav">
        <a href="/home" className="home-nav-link">Inicio</a>
        <a href="/beneficios" className="home-nav-link">Beneficios</a>
        <a href="/contacto" className="home-nav-link">Contacto</a>
        <a href="/acerca" className="home-nav-link">Acerca de</a>
        <button onClick={handleBack} className="home-nav-button">Cerrar sesión</button>
      </nav>
      <h2 className="home-title">Bienvenido, {username}</h2>
      <div className="home-content">
        <section className="home-section">
          <h3 className="home-section-title">Actividades Recientes</h3>
          <div className="home-card-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="home-card">
                <h4>{activity.title}</h4>
                <p>Fecha: {activity.date}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="home-section">
          <h3 className="home-section-title">Foros Destacados</h3>
          <div className="home-card-list">
            {featuredForums.map(forum => (
              <div key={forum.id} className="home-card">
                <h4>{forum.title}</h4>
                <p>{forum.posts} publicaciones</p>
              </div>
            ))}
          </div>
        </section>
        <section className="home-section">
          <h3 className="home-section-title">Próximos Eventos</h3>
          <div className="home-card-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="home-card">
                <h4>{event.title}</h4>
                <p>Fecha: {event.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;