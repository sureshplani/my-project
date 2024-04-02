import colorNames from 'colornames'
import React, { useState } from 'react'
import './color.css'
function ColourChange() {
    const [color, setColor] = useState("#000000")
    const [HaxValue, setHaxValue] = useState("")
    const [text, setText] = useState("#FFFF00")
  return (
    <div className='container'>
      <article className='h1'>
      <h1>Colour Changing Practice</h1>
      </article>

         <div className='boxContainer'>

         <div className='box' style={{
                   backgroundColor:color,
                   color:text}} >
                    
                 <p>{color }</p>

                 <br />

                 <p> {HaxValue ? HaxValue : null}</p> </div>

                <form className='form' onSubmit={(e) => e.preventDefault()}>

                  <div  className='inbox'  style={{
                         backgroundColor:color}} ></div>

                  <label>Background Color</label>

                    <input 
                    id='color'
                    type='text'
                    value={color}
                    placeholder={color}
                    onChange={(e)=>{ 
                    setColor(e.target.value)
                    setHaxValue(colorNames(e.target.value)) }}
                    />
                    <div className='inbox1' style={{backgroundColor:text}} > </div>
                 
                   <label className='text'>Text Color</label>

                    <input 
                    id='text'
                    type='text'
                    value={text}
                    placeholder={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                    
                </form>
      </div>
    </div>
  )
}

export default ColourChange