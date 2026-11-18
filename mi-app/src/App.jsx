import FormularioPelicula from "./components/FormularioPelicula";
import ListadoPeliculas from "./components/ListadoPeliculas";
import "./App.css";


export default function App() {

    return (
        <>

            <header className="cabecera">
                <h1>Peliculero</h1>
                <p> Tu colección personal de películas </p>
            </header>


            <main className="aplicacion">
                <FormularioPelicula />
                <ListadoPeliculas />
            </main>

        </>
    );
}