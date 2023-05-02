import { useEffect, useState } from "react";
import "./CatList.css";
import { CatModel } from "../../../Models/Cat";
import axios from "axios";
import CatCard from "../../Shared/CatCard/CatCard";
import notifyService from "../../../Sevices/NotificationService";

function CatList(): JSX.Element {
   const[cats, setCats]=useState<CatModel[]>([]);
 
   //Mounting
   useEffect(() => {
    axios.get<CatModel[]>('https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json')
    .then(res => {setCats(res.data);
    notifyService.success('Meou Chatula!!!!')
    })
    .catch(err => {notifyService.error('oops I did it again!!!')})
   },[])
    return (
        <div className="CatList">
			<button onClick={() => window.alert("Woho!!!") }>Click Me</button>
            <h1>Cat List</h1>
            {/* {cats.map(c => <p key={'cat'+c.id}> {c.id},{c.name},{c.color},{c.weight},{c.image}</p>)} */}
            <div className="cards-display">
            {cats.map(c => <CatCard key={'cat'+c.id} cat={c}/>)}
            </div>
        </div>
    );
}

export default CatList;
