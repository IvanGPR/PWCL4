import {
    esquemaListaPeliculas,
    esquemaIdentificadores,
    esquemaIdentificador
} from "./esquemaRegistro/esquemaRespuestaPeliculas";

import { esquemaPelicula } from "./esquemaRegistro/esquemaPelicula";

const BASE = import.meta.env.VITE_API_URL;
console.log("URL de la API:", BASE);

function validacionPeliculas(json){
    const resultado = esquemaListaPeliculas.safeParse(json);
    const identificadores = esquemaIdentificadores.safeParse(json);

    if (!resultado.success) {
        console.error(resultado.error);
        throw new Error("La API ha devuelto películas con datos incorrectos");
    }

    if (!identificadores.success) {
        console.error(identificadores.error);
        throw new Error("La API ha devuelto identificadores incorrectos");
    }
}

function validacionPelicula(json) {
    const resultado = esquemaPelicula.safeParse(json);
    const identificador = esquemaIdentificador.safeParse(json);

    if (!resultado.success) {
        console.error(resultado.error);
        throw new Error("La API ha devuelto una película con datos incorrectos");
    }

    if (!identificador.success) {
        console.error(identificador.error);
        throw new Error("La API ha devuelto un identificador incorrecto");
    }
}

export async function obtenerPeliculas() {
    const r = await fetch(`${BASE}/peliculas`);
    if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
    const json = await r.json();
    validacionPeliculas(json)
    return json;
}

export async function obtenerPelicula(id) {
    const r = await fetch(`${BASE}/peliculas/${id}`);
    if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
    const json = await r.json();
    validacionPelicula(json)
    return json;
}

export async function crearPelicula(pelicula) {
    const r = await fetch(`${BASE}/peliculas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pelicula)
    });

    if (!r.ok) {
        throw new Error(`Error HTTP: ${r.status}`);
    }

    const json = await r.json();
    validacionPelicula(json)
    return json;
}

export async function eliminarPelicula(id) {
    const r = await fetch(`${BASE}/peliculas/${id}`, {
        method: "DELETE"
    });

    if (!r.ok) {
        throw new Error(`Error HTTP: ${r.status}`);
    }
}