import { useState } from "react";

const ServiciosComp = ({ data }) => {
  const [mostrarParrafo, setMostrarParrafo] = useState(false);

  const cambiarStateParrafo = () => {
    setMostrarParrafo(!mostrarParrafo);
  };
  const { titulo, img, btn, parrafo } = data;

  return (
    <div className="list-2-1">
      <div className="auto">
        <div className="card">

          <h3>
            {titulo}
          </h3>
          <div className="image-btn">
            <img className="box" src={img} alt="automatizacion" />
            <button className="btn" onClick={cambiarStateParrafo}>
              {btn}
            </button>
          </div>
        </div>
      </div>
      <div className="auto pepa">
        {mostrarParrafo ? parrafo : ""}
      </div>
    </div>
  );
};

export default ServiciosComp;
