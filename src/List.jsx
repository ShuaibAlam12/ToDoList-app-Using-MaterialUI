import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const List=(props)=>{

    const [line,steline]=useState(false);
    const CutIt=()=>{
        steline(true);
    }
    return  <>
    <div className='todo_style'>
    <span onClick={CutIt}><DeleteIcon className='deleteIcon'/></span>
    <li style={{textDecoration:line?'line-through':"none"}}>{props.text}</li>
    </div>
    </>
}
export default List;
