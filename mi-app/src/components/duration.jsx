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
                aria-invalid={!!errors.duration}
                aria-describedby={
                    errors.duration ? "error-duration" : undefined
                }
            />

            {errors.duration && (
                <span role="alert">
                    {errors.duration.message}
                </span>
            )}
        </>
    );
}