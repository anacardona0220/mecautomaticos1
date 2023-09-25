import "./App.css";
import logo from "./assets/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <header className="container-header">
        <div className="container-header1">
          <div className="container-logo">
            <img src={logo} alt="logomeca" />
            <span className="container-logo-nombre">Mecautomaticos S.A.S</span>
          </div>
          <div className="container-nsc">
            <div>Nosotros</div>
            <div>Servicios</div>
            <div className="cbtn">
              <div>Contactanos</div>
              <button className="btn">
                <BsFillTelephoneFill />
              </button>
            </div>
          </div>
        </div>
        <div className="slogan">
          <h2>Automatizando el futuro</h2>
          <p>Soluciones inteligentes para la industria</p>
        </div>
      </header>
    </div>
  );
}

export default App;
