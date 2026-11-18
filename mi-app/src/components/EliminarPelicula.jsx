import {useMutation, useQueryClient} from "@tanstack/react-query";

import { eliminarPelicula } from "../Api";


export default function EliminarPelicula({ id }) {

    const queryClient = useQueryClient();

    const mutacion = useMutation({

        mutationFn: eliminarPelicula,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["peliculas"]
            });
        }
    });


    return (
        <>
            <button
                type="button"
                className="botonEliminar"
                disabled={mutacion.isPending}

                onClick={() => {
                    mutacion.mutate(id);
                }}
            >

                {mutacion.isPending
                    ? "Eliminando..."
                    : "Eliminar película"}

            </button>


            {mutacion.isError && (
                <p role="alert" className="error">
                    {mutacion.error.message}
                </p>
            )}
        </>
    );
}