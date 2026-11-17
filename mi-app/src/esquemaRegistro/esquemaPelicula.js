import { z } from "zod";

export const esquemaPelicula = z.object({

    title: z.string()
        .min(1, "El título es obligatorio"),

    genre: z.string()
        .min(1, "Selecciona un género"),

    duration: z.number()
        .int("La duración debe ser un número entero")
        .min(1, "La duración debe ser mayor que 0"),

    releaseDate: z.iso.date("Introduce una fecha válida"),

    streamingService: z.string()
        .min(1, "Selecciona una plataforma"),

    price: z.number()
        .min(0, "El precio no puede ser negativo"),

    description: z.string()
        .min(1, "La descripción es obligatoria"),

    grade: z.number()
        .min(0, "La puntuación mínima es 0")
        .max(10, "La puntuación máxima es 10")

});