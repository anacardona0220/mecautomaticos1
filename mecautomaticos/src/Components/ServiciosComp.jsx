 



// eslint-disable-next-line react/prop-types
const ServiciosComp = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {titulo, img, btn,  parrafo} = data;
  return (
    <div className="list-2-1">
      {/* start image-btn */}
      <div className="title-auto auto">
        <h3>{titulo}</h3>
        <div className="image-btn">
          <img
            className="box"
            src={img}
            alt="automatizacion"
          />
       <button className={btn}>{btn}</button>
        
        
        </div>
      </div>
      {/* end image-btn */}
      <p className=" auto">
        {parrafo}
      </p>
    </div>
  );
};

export default ServiciosComp;
