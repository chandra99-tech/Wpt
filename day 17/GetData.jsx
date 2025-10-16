import React, { useEffect, useState } from 'react'

function GetData() {
    const[length,setLength]=useState(12)
    const[password,setPassword]=useState()
    const[includesymbol,setIncludesymbol]=useState()
    const[includenumber,setIncludeNumber]=useState()
 function generatepass(){
    let characters= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includenumber) characters += '0123456789';
    if (includesymbol) characters += '!@#$%^&*()_+';
    let newpass='';
    for(let i=0;i<length;i++){
        newpass+=characters.charAt(
            Math.floor(Math.random()*characters.length)
        )
    }
    setPassword(newpass)
 }
 useEffect(()=>{
    generatepass()
 },[length,includenumber,includesymbol])

  return (
    <div style={{backgroundColor : 'aqua'}}>
      <h1>Password Generator</h1>
      <label htmlFor="">Enter Length</label>
      <input type="number" 
      name='length'
      id='length'
      value={length}
      onChange={(e)=>setLength(e.target.value)}/> <br />

      <input type="checkbox" name="includesymbol" id="includesymbol"
      value='includesymbol'
      checked={includenumber}
      onChange={(e)=>setIncludeNumber(!includenumber)} 
      />IncludeNumber <br />

      <input type="checkbox" name="includesymbol" id="includesymbol" 
      value={includesymbol}
      onChange={(e)=>{setIncludesymbol(!includesymbol)}}/> IncludeSymbol <br />

      <button onClick={generatepass}>Generate</button>
      <p>{password}</p>
      
    </div>
  )
}

export default GetData
