import { plataformas } from "../constants/plataformas";

export default function DisponibilidadPelicula({streamingService}) {

    return (
        <section className="disponibilidadPelicula">

            <h2>Disponibilidad</h2>
            <ul>

                {plataformas.map((plataforma) => {

                    const datos = streamingService[plataforma.id];

                    if (!datos.disponible) {
                        return null;
                    }

                    return (
                        <li key={plataforma.id}>

                            <strong>
                                {plataforma.nombre}
                            </strong>

                            {plataforma.id === "comprada" && (

                                <span>
                                    {" · "}
                                    Comprada por {datos.precio} €
                                </span>

                            )}

                            {plataforma.id !== "comprada" &&
                             datos.modalidad === "suscripcion" && (

                                <span>
                                    {" · "}
                                    Incluida con la suscripción
                                </span>

                            )}

                            {plataforma.id !== "comprada" &&
                             datos.modalidad === "pago" && (

                                <span>
                                    {" · "}
                                    Pago adicional: {datos.precio} €
                                </span>

                            )}

                        </li>
                    );

                })}

            </ul>

        </section>
    );
}