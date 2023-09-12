import ServiciosComp from "./ServiciosComp";

// eslint-disable-next-line react/prop-types
const Servicios = ({ data }) => {
  const info = data[0];
  const info1 = data[1];
  const info2 = data[2];
  const info3 = data[3];
  const info4 = data[4];

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

     
      
        <div className="list-2-8">
          <li>Consultoría y Desarrollo a Medida</li>
          <p>
            Brindamos servicios de consultoría en automatización industrial y
            electrónica, asesorando a las empresas en la optimización de sus
            procesos y sistemas. Además, desarrollamos soluciones a medida para
            abordar desafíos específicos de nuestros clientes.
          </p>
          <img
            className="box"
            src="https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?w=900&t=st=1694187938~exp=1694188538~hmac=f782c5091764eb549bd88d192fb2811b85c19cfccbec1e603106d042b895b102"
            alt="consultaria"
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
