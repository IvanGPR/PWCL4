export default function Title({ register, errors }) {

    return (
        <>
            <label htmlFor="title"> Título de la película </label>

            <input
                id="title"
                type="text"
                placeholder="Introduce el título"
                {...register("title")}
                aria-invalid={!!errors.title}
                aria-describedby={
                    errors.title ? "error-title" : undefined
                }
            />

            {errors.title && (
                <span id="error-title" role="alert">
                    {errors.title.message}
                </span>
            )}
        </>
    );
}