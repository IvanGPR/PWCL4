
export default function Duration({ register, errors }) {

    return (
        <>
            <label htmlFor="duration">Duración (minutos)</label>

            <input
                id="duration"
                type="number"
                {...register("duration", {
                    required: "La duración es obligatoria",
                    valueAsNumber: true,
                    min: {
                        value: 1,
                        message: "La duración debe ser mayor que 0"
                    }
                })}
            />

            {errors.duration && (
                <span role="alert">{errors.duration.message}</span>
            )}
        </>
    );
}