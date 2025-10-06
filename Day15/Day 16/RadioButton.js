import React from "react"
import { useState } from "react"

export default function RadioButton()
{


    let [uservalue, setValue]=useState("")
    let [uppercasevalue, setUppercase]=useState("")
    let [lowercasevalue, setLowercase]=useState("")
    let [titlvalue, setTitlecase]=useState("")


    function update(e)
    {
        setValue(uservalue=e.target.value)
        
    }

    function uppercase(e)
    {
        var upper=uservalue
        setUppercase(uppercasevalue=upper.toUpperCase());
        console.log(uppercasevalue)
    }

     function lowercase(e)
    {
        var lower=uservalue
        setLowercase(lowercasevalue=lower.toLowerCase());
        console.log(lowercasevalue)
    }

     function title(e)
    {
        
        setTitlecase(titlvalue=uservalue);
        console.log(titlvalue)

    }



    return(<>
        <input type="text" placeholder="Enter your text" onChange={update}/>


        <label><input type="radio" name="textCase" value="UpperCase" onClick={uppercase}/> Upper Case</label><br/>
        <label><input type="radio" name="textCase" value="LowerCase" onClick={lowercase}/> Lower Case</label><br/>
        <label><input type="radio" name="textCase" value="TitleCase" onClick={title}/> Title Case</label><br/><br/>
        <label>Value is {uservalue}</label><br/>
        <label>UpperCase is {uppercasevalue}</label><br/>
        <label>LowerCase is {lowercasevalue}</label><br/>
        <label>LowerCase is {<h1>{titlvalue}</h1>}</label><br/>
    </>)
}