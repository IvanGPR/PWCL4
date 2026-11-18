import { useQuery } from "@tanstack/react-query";

import { obtenerPeliculas } from "../Api";

import Pelicula from "./Pelicula";


export default function ListadoPeliculas() {

    const {
        data,
        isPending,
        isError,
        error,
        isFetching

    } = useQuery({

        queryKey: ["peliculas"],

        queryFn: obtenerPeliculas

    });


    if (isPending) {

        return (
            <p role="status">
                Cargando películas...
            </p>
        );

    }


    if (isError) {

        return (
            <p role="alert">
                {error.message}
            </p>
        );

    }


    return (
        <section className="listadoPeliculas">

            <h2>Mi colección de películas</h2>

            {isFetching && (

                <p role="status">
                    Actualizando películas...
                </p>

            )}

            {data.length === 0 && (

                <p>
                    Todavía no has registrado ninguna película.
                </p>

            )}

            <div className="contenedorPeliculas">

                {data.map((pelicula) => (

                    <Pelicula
                        key={pelicula.id}
                        pelicula={pelicula}
                    />

                ))}

            </div>

        </section>
    );
}