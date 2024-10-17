import React, { useState } from 'react';
import jsPDF, {jsPDDF} from 'jspdf';
export default function Anformatonpersonne(){
    const [imgcv,getimagecv]=useState('');
    const [name,getname]=useState('');
    const [prenom,getprenom]=useState('');
    const [email,getemail]=useState('');
    const [telephon,getphon]=useState('');
    const [genchoix,getgen]=useState('');
    const [inputvalue,setinputvalue]=useState('');
    const [items,setitems]=useState([]);

    const handrtimg =(event)=>{
        const filecv=event.target.files[0];
        const redefile= new FileReader(); 
        redefile.onloadend=()=>{
            getimagecv(redefile.result);
        };
        redefile.readAsDataURL(filecv);
    };

    const handerchangename=(event)=>{
        getname(event.target.value);
    }

    const handerchangprenom=(event)=>{
        getprenom(event.target.value);
    }
    
    const handerchangeemail=(event)=>{
        getemail(event.target.value);
    }
    
    const handerchangetel=(event)=>{
        getphon(event.target.value);
    }

    const handerchanggen=(event)=>{
        getgen(event.target.value);
    }
    const hnderchange=(event)=>{
        setinputvalue(event.target.value);
    };
    const handreClick=()=>{
        if(inputvalue.trim()!==''){
            setitems([...items,inputvalue]);
             setinputvalue("");
        }
    };
 
    const generPDF=()=>{
        const document1=new jsPDF();
        if(imgcv){
            document1.addImage(imgcv,'JPEG',10,10,40,20);
        };
        document1.text("le CV",10,50);
        document1.text(`Nom:${name}`,10,60);
        document1.text(`Prenom:${prenom}`,10,70);
        document1.text(`Email:${email}`,10,80);
        document1.text(`Tel:${telephon}`,10,90);
        document1.text(`Genne:${genchoix}`,10,100);
        document1.text("Langes",10,110);
        items.forEach((item,index)=>{
            document1.text(`- ${item}`,10,120+(index*10));
            
        })

        
        document1.save("le CV.pdf");

    }
 
    return (
        <>
           <h1>Entre les anformation</h1>
           <label>CHoisi une Photo</label>
           <input type="file" accept="image/*" onChange={handrtimg}/><br/><br/>
           <label>Nom:</label>
           <input type="text" id='btname' placeholder='Nom' value={name} onChange={handerchangename}/><br/><br/>
           <label>Prenom:</label>
           <input type="text" id='btnprenom'  value={prenom} onChange={handerchangprenom} /><br/><br/>
           <label>Email:</label>
           <input type='email' placeholder='Email' value={email} onChange={handerchangeemail} /><br/><br/>
           <label>TEl:</label>
           <input type='number' placeholder='Entre note telephon' value={telephon} onChange={handerchangetel}/><br/><br/>
           <h2>CHoisi Tu as Femme Ou Homme</h2>
           <input type='radio' id='rad1' name='btnH' value='Homme' onChange={handerchanggen}/><label>Homme</label><br/>
           <input type='radio' id='rad2' name='btnH' value='Femme' onChange={handerchanggen} /><label>Femme</label><br/>
           <h5>Ajouter les langes</h5>
           <input type='text' value={inputvalue} onChange={hnderchange}/><button onClick={handreClick}>Ajouer les langes</button><br/>
           <ol typeof='1'>
            {items.map((item,index)=>(
             <li key={index}>{item}</li>
            ))}
            </ol><br/>
            <button onClick={generPDF}>Aficher le PDF</button>
            <></>
        </>
   
    )

}



 


