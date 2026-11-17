export default function Duration({ register, errors }) {

    return (
        <>
            <label htmlFor="duration">Duración (minutos)</label>

            <input
                id="duration"
                type="number"
                {...register("duration", {
                    valueAsNumber: true
                })}
            />

            {errors.duration && (
                <span role="alert">
                    {errors.duration.message}
                </span>
            )}
        </>
    );
}