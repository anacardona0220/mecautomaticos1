const Header = () => {
  return (
    <div className="header">
      <div className="container container-header">
        <div className="barra" />
          <div className="logo">
            <h1 className="nombre-sitio">
            Mecautomaticos <span>S.A.S</span>
            </h1>
          </div>
          <div className="contacto">
            <a href="tel:3136789101">3136789101</a>
            <nav className="navegacion">
            <ul>

              <li className="list" href="#">Nosotros</li>
              <li className="list" href="#">Servicios</li>
              <li className="list" href="#">Proyectos</li>
              <li className="list" href="#">Contactanos</li>
            </ul>
              
            </nav>


          </div>
        <div />
      </div>
      <div className="slogan">
      <h1>Automatizando el futuro</h1>
      <p>Soluciones inteligentes para la industria</p>

      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVd0xngEMMtA5DN6tRPdb0j98y-BZnZXzpQ&usqp=CAU" />
      
    </div>
  );
};

export default Header;
