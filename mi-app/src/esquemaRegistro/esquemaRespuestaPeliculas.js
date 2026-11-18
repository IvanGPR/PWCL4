import { z } from "zod";

import { esquemaPelicula } from "./esquemaPelicula";


// Validar los datos de todas las películas
export const esquemaListaPeliculas = z.array(esquemaPelicula);


// Validar los identificadores
export const esquemaIdentificadores = z.array(z.object({
        id: z.string()
            .min(1,"Identificador de película incorrecto")
    })
);