import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { esquemaPelicula } from "../esquemaRegistro/esquemaPelicula";

import Title from "./title";
import Genre from "./genre";
import Duration from "./duration";
import ReleaseDate from "./releaseDate";
import StreamingService from "./streamingService";
import Price from "./price";
import Description from "./description";
import Grade from "./grade";

export default function FormularioPelicula() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(esquemaPelicula),

        defaultValues: {
            title: "",
            genre: "",
            duration: "",
            releaseDate: "",
            streamingService: "",
            price: "",
            description: "",
            grade: ""
        }
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <section className="formularioPelicula">

            <h1>Crear película</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Title register={register} errors={errors} />

                <Genre register={register} errors={errors} />

                <Duration register={register} errors={errors} />

                <ReleaseDate register={register} errors={errors} />

                <StreamingService register={register} errors={errors} />

                <Price register={register} errors={errors} />

                <Description register={register} errors={errors} />

                <Grade register={register} errors={errors} />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creando..." : "CREAR PELÍCULA"}
                </button>

            </form>
        </section>
    );
}