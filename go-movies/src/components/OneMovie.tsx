import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movie } from 'src/models/movie'

type Props = {
  id: number
}

const OneMovie: React.FC = () => {
  const { id } = useParams()

  const [movie, setMovie] = useState<Movie>({
    id: '0',
    title: 'No Movie',
    runtime: 0,
  })

  useEffect(() => {
    ;(() => {
      setMovie({
        id: id === undefined ? '0' : id,
        title: 'Some movie',
        runtime: 150,
      })
    })()
  }, [])

  return (
    <>
      <h2>OneMovie</h2>
      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Run Time:</strong>
            </td>
            <td>{movie.runtime}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default OneMovie
