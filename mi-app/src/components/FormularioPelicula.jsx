import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {useMutation,useQueryClient} from "@tanstack/react-query";
import { esquemaPelicula } from "../esquemaRegistro/esquemaPelicula";
import { plataformas } from "../constants/plataformas";
import { crearPelicula } from "../Api";

import Title from "./title";
import Genre from "./genre";
import Duration from "./duration";
import ReleaseDate from "./releaseDate";
import StreamingService from "./streamingService";
import Description from "./description";
import Grade from "./grade";


// Generar los valores iniciales de todas las plataformas
const streamingDefaults = {};

plataformas.forEach((plataforma) => {

    if (plataforma.id === "comprada") {

        streamingDefaults[plataforma.id] = {
            disponible: false,
            precio: ""
        };

    } else {

        streamingDefaults[plataforma.id] = {
            disponible: false,
            modalidad: "",
            precio: ""
        };

    }

});


export default function FormularioPelicula() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(esquemaPelicula),

        defaultValues: {
            title: "",
            genre: "",
            duration: "",
            releaseDate: "",
            streamingService: streamingDefaults,
            description: "",
            grade: ""
        }
    });

    const queryClient = useQueryClient();
    const mutacion = useMutation({

        mutationFn: crearPelicula,
        onSuccess: () => {
            reset();
            queryClient.invalidateQueries({
                queryKey: ["peliculas"]
            });

        }

    });

    function onSubmit(data) {

        // Limpiar datos de plataformas que ya no estan seleccionadas
        plataformas.forEach((plataforma) => {
            const datos = data.streamingService[plataforma.id];

            if (!datos.disponible) {
                datos.precio = "";
                if (plataforma.id !== "comprada") {
                    datos.modalidad = "";
                }

            } else if (datos.modalidad === "suscripcion") {
                datos.precio = "";
            }
        });

        mutacion.mutate(data);
    }

    return (
        <section className="formularioPelicula">

            <h1>Crear película</h1>

            <form 
                onSubmit={handleSubmit(onSubmit)} 
                noValidate
            >

                <Title register={register} errors={errors} />

                <Genre register={register} errors={errors} />

                <Duration register={register} errors={errors} />

                <ReleaseDate register={register} errors={errors} />

                <StreamingService register={register} errors={errors} watch={watch}/>

                <Description register={register} errors={errors} />

                <Grade register={register} errors={errors} />

                <button type="submit" disabled={mutacion.isPending}>
                    {mutacion.isPending ? "Creando..." : "REGISTRAR PELÍCULA"}
                </button>

                {mutacion.isError && (
                    <p role="alert" className="error">
                        {mutacion.error.message}
                    </p>
                )}

                {mutacion.isSuccess && (
                    <p role="status" className="ok">
                        Película registrada correctamente.
                    </p>
                )}

            </form>
        </section>
    );
}