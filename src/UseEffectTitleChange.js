import React, { useEffect, useState } from 'react';

function UseEffectTitleChange(props) {
    const [name,setName] = useState({Ttlname:'React App'})
    useEffect(()=>{
        document.title=name.Ttlname
    },[name.Ttlname]);
    const inputHandler = (event) =>{
        setName({
           Ttlname:event.target.value
        })
    }

    return (
        <div>
            <form>
                <label>Edit App Title here </label>
                <input value={name.Ttlname} onChange={inputHandler}  />
            </form>
        </div>
    );
}

export default UseEffectTitleChange;