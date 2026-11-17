export default function Title({ register, errors }) {

    return (
        <>
            <label htmlFor="title">Título</label>

            <input
                id="title"
                type="text"
                {...register("title", {
                    required: "El título es obligatorio"
                })}
            />

            {errors.title && (
                <span role="alert">{errors.title.message}</span>
            )}
        </>
    );
}