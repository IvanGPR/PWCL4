import DisponibilidadPelicula from "./DisponibilidadPelicula";
import EliminarPelicula from "./EliminarPelicula";

export default function Pelicula({ pelicula }) {

    return (
        <article className="pelicula">

            <h3>{pelicula.title}</h3>

            <div className="datosPelicula">

                <p>
                    <strong>Género:</strong>
                    {" "}{pelicula.genre}
                </p>

                <p>
                    <strong>Duración:</strong>
                    {" "}{pelicula.duration} minutos
                </p>

                <p>
                    <strong>Fecha de estreno:</strong>
                    {" "}{pelicula.releaseDate}
                </p>

                <p>
                    <strong>Puntuación:</strong>
                    {" "}{pelicula.grade}/10
                </p>

            </div>

            <p>{pelicula.description}</p>

            <DisponibilidadPelicula
                streamingService={pelicula.streamingService}
            />

            <EliminarPelicula id={pelicula.id} />
        </article>
    );
}