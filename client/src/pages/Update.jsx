import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: '',
    cover: ''
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split('/')[2]
  console.log(bookId)

  const handleChange = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:8800/books/' + bookId, book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(book)
  return (
    <div className='form'>
      <h1>Update the book</h1>
      <input
        type='text'
        placeholder='title'
        name='title'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='desc'
        name='desc'
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='price'
        name='price'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='cover'
        name='cover'
        onChange={handleChange}
      />

      <button className='formButton' onClick={handleClick}>
        update
      </button>
    </div>
  )
}

export default Update
