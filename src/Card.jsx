import React, {useState,useEffect,useContext,createContext} from 'react'
import './Card.css'


function Card({Card_Name,Card_Src}) {
  return (
    <div className='Card-Container'>
        <h1 className='Card-Name'>{Card_Name}</h1>
        <img className='Card-Img' src={Card_Src} />
    </div>
  )
}

export default Card;
