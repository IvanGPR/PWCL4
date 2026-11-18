export default function Description({ register, errors }) {

    return (
        <>
            <label htmlFor="description">Descripción</label>

            <textarea
                id="description"
                {...register("description")}
                aria-invalid={!!errors.description}
                aria-describedby={
                    errors.description ? "error-description" : undefined
                }
            />

            {errors.description && (
                <span role="alert">
                    {errors.description.message}
                </span>
            )}
        </>
    );
}