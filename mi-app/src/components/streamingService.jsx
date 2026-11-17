export default function StreamingService({ register, errors }) {

    return (
        <>
            <label htmlFor="streamingService">
                Plataforma de streaming
            </label>

            <select
                id="streamingService"
                {...register("streamingService")}
            >
                <option value="">Seleccionar...</option>
                <option value="netflix">Netflix</option>
                <option value="primeVideo">Prime Video</option>
                <option value="disneyPlus">Disney+</option>
                <option value="hbo">HBO</option>
                <option value="filmin">Filmin</option>
            </select>

            {errors.streamingService && (
                <span role="alert">
                    {errors.streamingService.message}
                </span>
            )}
        </>
    );
}