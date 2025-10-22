
import MovieCard from "../components/MovieCard"
import { useState } from "react"
import '../css/Home.css'
function Home() {

    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        { id: 1, title: 'Jhon wick', realese_date: "2024" },
        { id: 2, title: 'Terminatior', realese_date: "1997" },
        { id: 3, title: 'Matrix', realese_date: "1999" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (

        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(
                    (movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )

                )}
            </div>
        </div>
    )
}

export default Home