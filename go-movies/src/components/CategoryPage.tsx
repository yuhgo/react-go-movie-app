import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const CategoryPage = () => {
  const location = useLocation()

  console.log(`location: ${location.pathname}`)

  return (
    <div>
      <h2>CategoryPage</h2>

      <ul>
        <li>
          <Link to={`${location.pathname}/comedy`}>Comedy</Link>
        </li>
        <li>
          <Link to={`${location.pathname}/drama`}>Drama</Link>
        </li>
      </ul>
    </div>
  )
}

export default CategoryPage
