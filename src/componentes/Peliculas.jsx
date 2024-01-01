import React, { useState, useEffect } from 'react';

function Peliculas() {

    //variables de estado
    const [peliculas, setPeliculas] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`)
            .then(data => data.json())
            .then(json => setPeliculas(json.results)
            );
    }, [pagina]);

    // console.log(peliculas);
    console.log(pagina);

    return (
        <div>
            <div className='contenedor'>
                {peliculas.map( pelicula => (
                
                    <div className="pelicula" key={pelicula.id}>
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} />
                        <h3 className="titulo">{pelicula.title}</h3>
                        <p>{pelicula.overview}</p>
                    </div>
                ))}
            </div>

            <div className="paginacion">
                <button onClick={()=>{setPagina(pagina - 1)}} id="btnAnterior">Anterior</button>
                <button onClick={()=>{setPagina(pagina + 1)}} id="btnSiguiente">Siguiente</button>
            </div>
        </div>
    )
}

export default Peliculas