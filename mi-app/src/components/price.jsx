
export default function Price({ register, errors }) {

    return (
        <>
            <label htmlFor="price">Precio (€)</label>

            <input
                id="price"
                type="number"
                step="0.01"
                {...register("price", {
                    required: "El precio es obligatorio",
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: "El precio no puede ser negativo"
                    }
                })}
            />

            {errors.price && (
                <span role="alert">{errors.price.message}</span>
            )}
        </>
    );
}