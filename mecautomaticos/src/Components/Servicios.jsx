import ServiciosComp from "./ServiciosComp";

// eslint-disable-next-line react/prop-types
const Servicios = ({ data }) => {
  const info = data[0];
  const info1 = data[1];
  const info2 = data[2];
  const info3 = data[3];
  const info4 = data[4];
  const info5 = data[5];

  return (
    <div className="servicios">
      <div className="title-servicios">
        <h2>Servicios</h2>
      </div>
      <div>
       

        {/* start automatizacion */}
        <ServiciosComp data={info} />
        <ServiciosComp data={info1} />
        <ServiciosComp data={info2} />
        <ServiciosComp data={info3} />
        <ServiciosComp data={info4} />
        <ServiciosComp data={info5} />

     
      
        
      </div>
    </div>
  );
};

export default Servicios;
