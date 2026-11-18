export default function Grade({ register, errors }) {

    return (
        <>
            <label htmlFor="grade">Puntuación</label>

            <input
                id="grade"
                type="number"
                step="0.1"
                {...register("grade", {
                    valueAsNumber: true
                })}
                aria-invalid={!!errors.grade}
                aria-describedby={
                    errors.grade ? "error-grade" : undefined
                }
            />

            {errors.grade && (
                <span role="alert">
                    {errors.grade.message}
                </span>
            )}
        </>
    );
}