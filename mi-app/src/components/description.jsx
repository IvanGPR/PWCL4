
export default function Description({ register, errors }) {

    return (
        <>
            <label htmlFor="description">Descripción</label>

            <textarea
                id="description"
                {...register("description", {
                    required: "La descripción es obligatoria"
                })}
            />

            {errors.description && (
                <span role="alert">{errors.description.message}</span>
            )}
        </>
    );
}