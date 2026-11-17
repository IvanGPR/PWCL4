export default function Description({ register, errors }) {

    return (
        <>
            <label htmlFor="description">Descripción</label>

            <textarea
                id="description"
                {...register("description")}
            />

            {errors.description && (
                <span role="alert">
                    {errors.description.message}
                </span>
            )}
        </>
    );
}