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
            />

            {errors.grade && (
                <span role="alert">
                    {errors.grade.message}
                </span>
            )}
        </>
    );
}