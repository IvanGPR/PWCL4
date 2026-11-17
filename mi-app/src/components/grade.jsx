
export default function Grade({ register, errors }) {

    return (
        <>
            <label htmlFor="grade">Puntuación</label>

            <input
                id="grade"
                type="number"
                step="0.1"
                {...register("grade", {
                    required: "La puntuación es obligatoria",
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: "La puntuación mínima es 0"
                    },
                    max: {
                        value: 10,
                        message: "La puntuación máxima es 10"
                    }
                })}
            />

            {errors.grade && (
                <span role="alert">{errors.grade.message}</span>
            )}
        </>
    );
}