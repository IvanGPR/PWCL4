import { plataformas } from "../constants/plataformas";

export default function StreamingService({
    register,
    errors,
    watch
}) {

    const errorStreaming =
    errors.streamingService?.message ||
    errors.streamingService?.root?.message;

    return (
        <fieldset 
            className="streamingService"
            aria-invalid={!!errorStreaming}
            aria-describedby={
                errorStreaming ? "error-streamingService" : undefined
            } 
        >

            <legend>Disponibilidad de la película</legend>

            {plataformas.map((plataforma) => {

                const campo = `streamingService.${plataforma.id}`;

                const disponible = watch(`${campo}.disponible`);

                const modalidad = watch(`${campo}.modalidad`);

                const error =
                    errors.streamingService?.[plataforma.id];

                return (
                    <div
                        key={plataforma.id}
                        className="plataforma"
                    >

                        <label htmlFor={`${campo}.disponible`}>

                            <input
                                id={`${campo}.disponible`}
                                type="checkbox"
                                {...register(`${campo}.disponible`, {
                                    deps: [
                                        "streamingService",
                                        `${campo}.modalidad`,
                                        `${campo}.precio`
                                    ]
                                })}
                            />

                            {plataforma.nombre}

                        </label>

                        {disponible && (

                            <div className="opcionesPlataforma">

                                {plataforma.id !== "comprada" && (

                                    <>
                                        <label htmlFor={`${campo}.modalidad`}>
                                            Modalidad de acceso
                                        </label>

                                        <select
                                            id={`${campo}.modalidad`}
                                            {...register(`${campo}.modalidad`, {
                                                deps: [`${campo}.precio`]
                                            })}
                                            aria-invalid={
                                                !!error?.modalidad
                                            }
                                            aria-describedby={
                                                error?.modalidad
                                                    ? `${campo}.error-modalidad`
                                                    : undefined
                                            }
                                        >
                                            <option value="">
                                                Seleccionar...
                                            </option>

                                            <option value="suscripcion">
                                                Incluida con la suscripción
                                            </option>

                                            <option value="pago">
                                                Pago adicional
                                            </option>

                                        </select>

                                        {error?.modalidad && (
                                            <span
                                                id={`${campo}.error-modalidad`}
                                                role="alert"
                                            >
                                                {error.modalidad.message}
                                            </span>
                                        )}
                                    </>

                                )}

                                {(plataforma.id === "comprada" ||
                                    modalidad === "pago") && (

                                    <>
                                        <label htmlFor={`${campo}.precio`}>
                                            Precio (€)
                                        </label>

                                        <input
                                            id={`${campo}.precio`}
                                            type="number"
                                            step="0.01"
                                            {...register(`${campo}.precio`)}
                                            aria-invalid={
                                                !!error?.precio
                                            }
                                            aria-describedby={
                                                error?.precio
                                                    ? `${campo}.error-precio`
                                                    : undefined
                                            }
                                        />

                                        {error?.precio && (
                                            <span
                                                id={`${campo}.error-precio`}
                                                role="alert"
                                            >
                                                {error.precio.message}
                                            </span>
                                        )}
                                    </>

                                )}

                            </div>

                        )}

                    </div>
                );

            })}

            {errorStreaming && (
                <span id="error-streamingService" role="alert">
                    {errorStreaming}
                </span>
            )}

        </fieldset>
    );
}