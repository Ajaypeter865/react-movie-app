
function MovieCard({ movie }) {

    function OnfavoriteClick() {
        alert('Clicked')
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={OnfavoriteClick}>
                    🤍
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realse_date}</p>
        </div>

    </div>
}


export default MovieCard