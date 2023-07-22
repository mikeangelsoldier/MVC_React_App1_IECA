import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjeta from './components/Tarjeta';

const App = () => {
  return (
    <div className="container-fluid">
      <div className='row justify-content-sm-center'>
        <div className='col-sm-4'>
          <Tarjeta titulo="Bienvenido a la tarjeta 1"
            parrafo="Esta es la tarjeta 1" textButton="Botón de la tarjeta 1" />
          <Tarjeta titulo="Bienvenido a la tarjeta 2"
            parrafo="Esta es la tarjeta 2" textButton="Botón de la tarjeta 2" />
          <Tarjeta titulo="Bienvenido a la tarjeta 3"
            parrafo="Esta es la tarjeta 3" textButton="Botón de la tarjeta 3" />
          <Tarjeta titulo="Bienvenido a la tarjeta 4"
            parrafo="Esta es la tarjeta 4" textButton="Botón de la tarjeta 4" />
        </div>
      </div>

    </div>
  );
}

export default App;
