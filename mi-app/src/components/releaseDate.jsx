export default function ReleaseDate({ register, errors }) {

    return (
        <>
            <label htmlFor="releaseDate">Fecha de estreno</label>

            <input
                id="releaseDate"
                type="date"
                {...register("releaseDate")}
            />

            {errors.releaseDate && (
                <span role="alert">
                    {errors.releaseDate.message}
                </span>
            )}
        </>
    );
}