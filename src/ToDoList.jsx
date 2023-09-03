import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from './List';
const ToDoList = () => {
    const [item, setitems] = useState("");
    const [items, newItems] = useState([]);
    const onCLickk = (event) => {
        setitems(event.target.value);
    }
    const Listofitem = () => {
        newItems((prevVal) => {
            return [...prevVal, item];
        })
        setitems("");
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>ToDoList</h1>
                    <input type='text' value={item} placeholder='Add Item' onChange={onCLickk} />
                    <Button className='newBtn' onClick={Listofitem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {items.map((val,index) => {
                            return (
                               <List key={index} text={val} />
                            )

                        })}
                    </ol>

                </div>
            </div>
        </>
    )

}
export default ToDoList;