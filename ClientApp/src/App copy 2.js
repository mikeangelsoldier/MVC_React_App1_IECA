import 'bootstrap/dist/css/bootstrap.min.css';
// import Tarjeta from './components/Tarjeta';
import { useState } from 'react';

const App = () => {

  const [numero, setNumero] = useState(0);

  /*
  numero = nombre de la variable para obtener el valor | aqui se le puede decir "El
  estado actual"

  setNumero = funcion que actualiza el valor o que actualiza el estado
  */

  let modeloPersona = {
    Nombre: "Miguel",
    Correo: "mikeangelsoldier1@gmail.com",

  }

  const [persona, setPersona] = useState(modeloPersona);

  return (
    <div className="container-fluid">
      <h1>Valor actual {numero}</h1>
      <button onClick={() =>
        setNumero(numero + 1)
      }
      >
        Sumar +1
      </button>

      <br></br>
      <br></br>
      <br></br>

      <p>Nombre: {persona.Nombre}</p>
      <p>Correo: {persona.Correo}</p>
      <button onClick={() => setPersona({
        ...persona,
        Correo: "migueram_5@hotmail.com"
      })}>
        Cambiar correo
      </button>


    </div>
  );
}

export default App;
