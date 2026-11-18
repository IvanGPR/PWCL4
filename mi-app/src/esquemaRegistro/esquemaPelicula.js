import { z } from "zod";

import { esquemaStreaming } from "./esquemaStreaming";

export const esquemaPelicula = z.object({

    title: z.string()
        .min(1, "El título es obligatorio"),

    genre: z.string()
        .min(1, "Selecciona un género"),

    duration: z.number({
        error: "Introduce una duración válida"
    })
        .int("La duración debe ser un número entero")
        .min(1, "La duración debe ser mayor que 0"),

    releaseDate: z.iso.date("Introduce una fecha válida"),

    streamingService: esquemaStreaming,

    description: z.string()
        .min(1, "La descripción es obligatoria"),

    grade: z.number({
        error: "Introduce una puntuación válida"
    })
        .min(0, "La puntuación mínima es 0")
        .max(10, "La puntuación máxima es 10")

});