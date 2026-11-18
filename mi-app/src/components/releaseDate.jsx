export default function ReleaseDate({ register, errors }) {

    return (
        <>
            <label htmlFor="releaseDate">Fecha de estreno</label>

            <input
                id="releaseDate"
                type="date"
                {...register("releaseDate")}
                aria-invalid={!!errors.releaseDate}
                aria-describedby={
                    errors.releaseDate ? "error-releaseDate" : undefined
                }
            />

            {errors.releaseDate && (
                <span role="alert">
                    {errors.releaseDate.message}
                </span>
            )}
        </>
    );
}