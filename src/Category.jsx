import React from 'react'
import './li.css'


function Category({ categories, setCatName }) {
  let cat = categories.map((v, i) => {
    return (
      <li
        onClick={() => setCatName(v.name)}
        key={i}
        className="category-item"
      >
        {v.name}
      </li>
    )
  })
  return (
    
    <div>

      <ul>
        {cat}
      </ul>

    </div>
  )
}

export default Category
