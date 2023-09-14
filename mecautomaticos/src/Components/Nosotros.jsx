const Nosotros = () => {
  return (
    // start conatiner-nosotros
    <div className="container-nosotros">
      {/* start title-nosotros */}
      <div className="title-nosotros">
        <h2>Nosotros</h2>
      </div>
      {/* end title-nosotros */}
      {/* start mision y vision */}
      <div className="mision-vision">
        <div className="myv-parrafos">
          <div className="myv">
            <img src="https://img.freepik.com/free-photo/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory_609648-792.jpg?w=900&t=st=1694124253~exp=1694124853~hmac=0eb15f38e3458652005a3af491d0dc64f089a9791cf7947c33e6d3d00e706dd5" />
          </div>
          {/* star parrafos */}
          <div className="myv">
            <h3>Mision</h3>
            <p>
              Nuestra misión en Mecautomaticos S.A.S es ofrecer soluciones
              integrales de automatización industrial, electrónica industrial,
              programación de PLC, montajes industriales, montajes
              metalmecánicos, puertas eléctricas y control de acceso que superen
              las expectativas de nuestros clientes. Estamos comprometidos con
              la excelencia en la calidad, la innovación y el servicio al
              cliente, con el objetivo de optimizar la eficiencia y la
              productividad de las empresas industriales
            </p>
          </div>
          <div className="myv">
            <h3>Vision</h3>
            <p>
              Nos visualizamos como líderes reconocidos en la industria de la
              automatización industrial, siendo la opción preferida por empresas
              de todo el país. Aspiramos a continuar creciendo y diversificando
              nuestros servicios, manteniendo siempre nuestros altos estándares
              de calidad y satisfacción del cliente. Buscamos contribuir al
              desarrollo sostenible de la industria, aprovechando la tecnología
              y la experiencia para impulsar el éxito de nuestros clientes
            </p>
          </div>
          {/* end parrafos */}
        </div>
      </div>
      {/* end mision y vision */}
    </div>
    // end conatiner-nosotros
  );
};

export default Nosotros;
