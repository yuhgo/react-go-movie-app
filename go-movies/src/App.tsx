import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from 'src/components/Home'
import Admin from 'src/components/Admin'
import Movies from 'src/components/Movies'
import Movie from 'src/components/Movie'
import Categories from './components/Categories'
import CategoryPage from 'src/components/CategoryPage'
import OneMovie from './components/OneMovie'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/by-category">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/movies" element={<Movies />} />
              {/* <Route path="/movies/:id" element={<Movie />} /> */}
              <Route path="/movies/:id" element={<OneMovie />} />
              <Route path="/by-category" element={<CategoryPage />} />
              <Route
                path="/by-category/comedy"
                element={<Categories title="Comedy" />}
              />
              <Route
                path="/by-category/drama"
                element={<Categories title="Drama" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
