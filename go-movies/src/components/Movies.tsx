import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from 'src/models/movie'

const Movies: React.FC = () => {
  // test data
  const tmpData = [
    { id: '1', title: 'The Shawshank Redemption', runtime: 142 },
    { id: '2', title: 'Harry Potter', runtime: 175 },
    { id: '3', title: 'The Dark Kngiht', runtime: 142 },
  ]

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    ;(() => {
      setMovies(tmpData)
    })()
  }, [])

  return (
    <>
      <h2>Choose a movie</h2>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Movies
