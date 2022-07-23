import React from 'react'

type Props = {
  title?: string
}

const Categories: React.FC<Props> = (props) => {
  const { title } = props

  return <h2>Categories: {title}</h2>
}

export default Categories
