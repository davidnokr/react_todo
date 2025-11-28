import { useEffect, useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [rating, setRating] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !method || !rating) {
      setFormError('Please fill in all the fields correctly.')
      return
    }

    console.log(title, rating, method)
  }

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Method */}
        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        {/* Rating */}
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />

        <button>Create Smoothie Recipe</button>

        {formError && <p className="error">{formError}</p>}
      </form>

      <h2>Create</h2>
    </div>
  )
}

export default Create
