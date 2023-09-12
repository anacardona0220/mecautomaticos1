import "./App.css";
import Contactanos from "./Components/Contactanos";
import Header from "./Components/Header";
import Nosotros from "./Components/Nosotros";
import Proyectos from "./Components/Proyectos";
import Servicios from "./Components/Servicios";
import useData from "./helpers/useData";

const data = useData;


function App() {
  return (
    <div>
    <Header />

    <Nosotros   />
    <Servicios data = {data}/>
    <Proyectos  />
    <Contactanos />
      
      
    </div>
  );
}

export default App;
