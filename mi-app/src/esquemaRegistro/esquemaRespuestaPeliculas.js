import { z } from "zod";
import { esquemaPelicula } from "./esquemaPelicula";

// Validar los datos de todas las películas
export const esquemaListaPeliculas = z.array(esquemaPelicula);

// Validar el identificador de una película
export const esquemaIdentificador = z.object({
    id: z.string()
        .min(1, "Identificador de película incorrecto")
});

// Validar los identificadores de todas las películas
export const esquemaIdentificadores = z.array(esquemaIdentificador);