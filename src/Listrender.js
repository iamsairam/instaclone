import React, { useState } from 'react';

function Listrender(props) {
    const Persons =[
        {name:'sairam',age:22,place:'PTL'},
        {name:'Saireddy',age:23,place:'PTL'},
        {name:'JeevanKumar',age:24,place:'BZA'}
    ]
    const[personList,setPersonList]=useState(Persons)
    const clickHandler =() =>{
        setPersonList([
            {name:'Sairam Nagulavancha',age:22,place:'PTL'},
            {name:'Saireddy S',age:23,place:'PTL'},
            {name:'JeevanKumar V',age:24,place:'BZA'}
        ])
    }
    return (
        <div>
            {personList.map(person=><div key={person.age}>{person.name}</div>)}
            <button onClick={clickHandler}>Update to Full Nmae</button>
        </div>
    );
}

export default Listrender;