import React,{ useState } from 'react';
import { SketchPicker } from 'react-color';
import './colorPicker.css'



function Color(props)
{
    const [open,setOpen]=useState(false);
   
   
    function show()
    {
        if((open)===true)
        setOpen(false)
    else
        setOpen(true)
    }
    function colorPicker(color)
    {
        console.log(color)
     
        props.setColor(color.hex)
       
    }
    
   
    
    return(
    
     <div className="color-picker" onClick={show}
      style={{backgroundColor: props.color}}>

      {open && <SketchPicker color={props.color} onChange={colorPicker}/>}
     
       </div>
     
    )
}
export default Color;