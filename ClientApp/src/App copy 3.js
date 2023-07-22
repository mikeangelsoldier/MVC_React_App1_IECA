import 'bootstrap/dist/css/bootstrap.min.css';
// import Tarjeta from './components/Tarjeta';
import { useState, useEffect } from 'react';

const App = () => {

  const [nombre, setNombre] = useState("Miguel");


  const EscribirEnConsola = () => {
    setNombre("ángel");

    console.log("1.- El nombre ha cambiado: ", nombre);
  }

  useEffect(() => {
    console.log("La aplicación ha iniciado ");

  }, [])

  /*
  useEffect(() => { // Es despues que se termina de renderizar
    console.log("La aplicacion ha iniciado ", nombre);

  }, [nombre])
  */

  return (
    <div className="container-fluid">
      <h1>El nombre actual es: {nombre}</h1>
      <button onClick={EscribirEnConsola}>
        Cambiar nombre
      </button>

      <br></br>
      <br></br>
      <br></br>


    </div>
  );
}

export default App;
