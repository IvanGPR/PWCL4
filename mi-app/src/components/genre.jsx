export default function Genre({ register, errors }) {

    return (
        <>
            <label htmlFor="genre">Género</label>

            <select
                id="genre"
                {...register("genre")}
            >
                <option value="">Seleccionar...</option>
                <option value="accion">Acción</option>
                <option value="aventura">Aventura</option>
                <option value="cienciaFiccion">Ciencia Ficción</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
                <option value="terror">Terror</option>
                <option value="horror">Horror</option>
                <option value="suspense">Suspense (Thriller)</option>
                <option value="fantasia">Fantasía</option>
                <option value="romance">Romance</option>
                <option value="musical">Musical</option>
                <option value="documental">Documental</option>
                <option value="western">Western</option>
                <option value="cineNegro">Cine Negro (Film Noir)</option>
                <option value="belico">Bélico (Guerra)</option>
                <option value="crimen">Crimen / Policiaco</option>
                <option value="misterio">Misterio</option>
                <option value="historico">Histórico</option>
                <option value="biografico">Biográfico (Biopic)</option>
                <option value="animacion">Animación</option>
                <option value="infantilFamiliar">Infantil / Familiar</option>
                <option value="deportes">Deportes</option>
                <option value="catastrofes">Catástrofes</option>
                <option value="artesMarciales">Artes Marciales</option>
                <option value="superheroes">Superhéroes</option>
                <option value="melodrama">Melodrama</option>
                <option value="comediaRomantica">Comedia Romántica</option>
                <option value="comediaNegra">Comedia Negra</option>
                <option value="comediaDramatica">Comedia Dramática (Dramedia)</option>
                <option value="terrorPsicologico">Terror Psicológico</option>
                <option value="slasher">Slasher</option>
                <option value="gore">Gore</option>
                <option value="zombis">Zombis</option>
                <option value="monstruos">Monstruos</option>
                <option value="vampiros">Vampiros</option>
                <option value="paranormal">Paranormal</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="steampunk">Steampunk</option>
                <option value="distopia">Distopía</option>
                <option value="postapocaliptico">Postapocalíptico</option>
                <option value="spaceOpera">Space Opera (Ópera Espacial)</option>
                <option value="viajesEnElTiempo">Viajes en el tiempo</option>
                <option value="falsoDocumental">Falso Documental (Mockumentary)</option>
                <option value="metrajeEncontrado">Metraje Encontrado (Found Footage)</option>
                <option value="cineExperimental">Cine Experimental / De autor</option>
                <option value="cineMudo">Cine Mudo</option>
                <option value="erotico">Erótico</option>
                <option value="cineDeCulto">Cine de Culto</option>
            </select>

            {errors.genre && (
                <span role="alert">
                    {errors.genre.message}
                </span>
            )}
        </>
    );
}