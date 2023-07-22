const Tarjeta = (props) => {
    return (

        <div className='card text-center bg-dark mt-5'>
            <div className='card-body'>
                <h1 className='card-title text-info'>
                    {props.titulo}
                </h1>
                <p className='card-text text-light'>
                    {props.parrafo}
                </p>
                <a href='#' className='btn btn-danger'>
                    {props.textButton}
                </a>
            </div>

            {/*<div className='card-body'>
                <h1 className='card-title text-info'>
                    Bienvenido a mi sitio web
                </h1>
                <p className='card-text text-light'>
                    Hola soy Miguel
                </p>
                
                <p className='card-text text-light'>
                    Hola soy Miguel y este es mi proyecto con React dentro de .NET Core.
                </p>
                <a href='#' className='btn btn-danger'>
                    Da click aquí
                </a>

                <h1 className='card-title'>Hola soy Miguel y este es mi proyecto con React dentro de .NET Core.</h1>
            </div>*/}
        </div>


    );
}

export default Tarjeta;