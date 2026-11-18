import { z } from "zod";
import { plataformas } from "../constants/plataformas";


// Esquema de una plataforma de streaming

const esquemaPlataforma = z.object({
    disponible: z.boolean(),
    modalidad: z.string(),
    precio: z.string()
}).refine((datos) => {

    return !datos.disponible ||
           datos.modalidad === "suscripcion" ||
           datos.modalidad === "pago";

}, {

    error: "Selecciona una modalidad de acceso",
    path: ["modalidad"]

}).refine((datos) => {

    return !datos.disponible ||
           datos.modalidad !== "pago" ||
           (
               datos.precio.trim() !== "" &&
               Number.isFinite(Number(datos.precio)) &&
               Number(datos.precio) > 0
           );

}, {

    error: "Introduce un precio mayor que 0",
    path: ["precio"]

});


// Esquema de la opción Comprada
const esquemaCompra = z.object({
    disponible: z.boolean(),
    precio: z.string()
}).refine((datos) => {

    return !datos.disponible ||
           (
               datos.precio.trim() !== "" &&
               Number.isFinite(Number(datos.precio)) &&
               Number(datos.precio) > 0
           );

}, {

    error: "Introduce un precio de compra mayor que 0",
    path: ["precio"]

});


// Generar el esquema de todas las plataformas
const esquemasPlataformas = {};

plataformas.forEach((plataforma) => {

    if (plataforma.id === "comprada") {
        esquemasPlataformas[plataforma.id] = esquemaCompra;
    } else {
        esquemasPlataformas[plataforma.id] = esquemaPlataforma;
    }

});


// Validar el conjunto de plataformas
export const esquemaStreaming = z.object(esquemasPlataformas).refine((datos) => {

    return plataformas.some((plataforma) => {
        return datos[plataforma.id].disponible;
    });
}, {
    error: "Selecciona al menos una plataforma o la opción Comprada"
});