import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import Home from '../pages/Home.jsx';
import Beneficios from '../pages/Beneficios.jsx';
import Contacto from '../pages/Contacto.jsx';
import AcercaDe from '../pages/AcercaDe.jsx';

export let enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/registro',
    element: <Registro />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/beneficios',
    element: <Beneficios />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/acerca',
    element: <AcercaDe />
  }
];