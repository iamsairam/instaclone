import React, { useEffect, useState } from 'react';

function MouseMove(props) {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    useEffect(()=>{
        window.addEventListener('mouseover',mousePosition)
        console.log("mouse moving");
        return ()=>{
            window.removeEventListener('mouseover',mousePosition)
            console.log('mouse removed');
        }
    },[])
    const mousePosition = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
        <h1>X-{x}</h1>
        <h1>Y-{y}</h1>    
        </div>
    );
}

export default MouseMove;