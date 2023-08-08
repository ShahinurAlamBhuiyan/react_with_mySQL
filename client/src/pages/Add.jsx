import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        title:"",
        desc:"",
        price:"",
        cover:"",
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook(prev=> ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);
            navigate("/");

        } catch (error) {
            console.log(error)
        }
    }

    console.log(book);
  return (
    <div className='form'>
        <h1>Add new book</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange} />
        <input type="text" placeholder='desc'name="desc" onChange={handleChange}/>
        <input type="number" placeholder='price' name="price" onChange={handleChange}/>
        <input type="text" placeholder='cover' name="cover" onChange={handleChange}/>

        <button className='formButton' onClick={handleClick}>add</button>
    </div>
  )
}

export default Add