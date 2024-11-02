import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeData from "./CoffeData";
import { useEffect, useState } from "react";


const CoffeCard = () => {
    const navigate=useNavigate();
    const coffeData=useLoaderData();
    const [coffes,setCoffes]=useState([])
    console.log(coffeData)
    const {category}=useParams();
    useEffect(()=>{
        if(category){
            const filteCoffes=[...coffeData].filter(coffe=>coffe.category===category)

        setCoffes(filteCoffes);
        }
        else{
            setCoffes(coffeData.slice(0,6));
        }

    },[setCoffes,coffeData])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
            {
                coffes.map(coffee=><CoffeData key={coffee.id} coffeCard={coffee}></CoffeData>)

            }
            
        </div>
        <button onClick={()=>navigate('/coffees')} className="btn btn-warning">VIEW ALL</button>
        </div>
        
    );
};

export default CoffeCard;