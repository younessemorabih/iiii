import React, { useState } from "react";
export default function Usetp(){
    const [name1,getname1]=useState('Younes');
    const [name2,getname2]=useState('Ahmed');

    const suprimer=()=>{   
       getname1(name2);
    
    }

    return(
        <>
         
          <h1>Welcom to {name1}</h1>
          <button onClick={suprimer}>Changer</button>
        </>
    )
}