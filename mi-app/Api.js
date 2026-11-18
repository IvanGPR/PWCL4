const BASE = "http://localhost:3001";

export async function obtenerPeliculas() {
    const r = await fetch(`${BASE}/peliculas`);
    if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
    const json = await r.json();
    return json;
}

export async function obtenerPelicula(id) {
    const r = await fetch(`${BASE}/peliculas/${id}`);
    if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);
    return r.json();
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

    return r.json();
}

export async function eliminarPelicula(id) {
    const r = await fetch(`${BASE}/peliculas/${id}`, {
        method: "DELETE"
    });

    if (!r.ok) {
        throw new Error(`Error HTTP: ${r.status}`);
    }
}