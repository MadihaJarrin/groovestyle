import React from 'react'
import "../App.css"
import {MdClose} from "react-icons/md"

const Formtable = ({handleSubmit, handleOnChange, handleclose, rest}) => {
  return (
   
    <div className= "addContainer">
          
    <form onSubmit = {handleSubmit} >
     <div className= "close-btn" onClick = {handleclose}><MdClose/></div>
      <label htmlFor= "name">Name : </label>
      <input type= "text" id="name" name="name" onChange = {handleOnChange} value={rest.name}/>

       <label htmlFor= "detail">Detail : </label>
       <input type= "text" id="detail" name="detail" onChange = {handleOnChange} value={rest.detail}/>

       <label htmlFor= "price">Price : </label>
       <input type= "text" id="price" name="price" onChange = {handleOnChange} value={rest.price}/>

      <button className = "btn" >Submit</button>

    </form>
  </div>
  )
}

export default Formtable