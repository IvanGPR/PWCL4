export default function Price({ register, errors }) {

    return (
        <>
            <label htmlFor="price">Precio (€)</label>

            <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                    valueAsNumber: true
                })}
            />

            {errors.price && (
                <span role="alert">
                    {errors.price.message}
                </span>
            )}
        </>
    );
}