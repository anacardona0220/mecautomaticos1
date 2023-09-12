import logo from '../assets/images/logo.png'
import nosotros from './Nosotros'

const Header = () => {
  return (
    <div className="header">

      {/* contenedor-header */}
      <div className="container-header">
        {/* start info company */}
        <div className="infoCompany">
          {/* start nameCompany */}
          <div className="nameCompany">
            <h1>
              Mecautomáticos <span>S.A.S</span>
            </h1>
          </div>
          {/* end nameCompany */}

          {/*start Logo and phone number */}
          <div className="logoNumber">
            <img src={logo} alt="No image" />
          </div>
          {/* end Logo and phone number */}
        </div>
        {/* end info company */}

        {/* start navbar */}
        <div className="navbar">
          <nav className="navegacion">
            <ul>
              <li className="list" href={nosotros}>
                Nosotros
              </li>
              <li className="list" href="#">
                Servicios
              </li>
              <li className="list" href="#">
                Proyectos
              </li>
              <li className="list" href="#">
                Contactános
              </li>
            </ul>
          </nav>
        </div>
        {/* end navbar */}
        
        {/* start slogan */}
        <div className="slogan">
          <h2>Automatizando el futuro</h2>
          <p>Soluciones inteligentes para la industria</p>
        </div>
        {/* end slogan */}

      </div>
      {/* /end contenedor-header */}
    </div>
  );
};

export default Header;
