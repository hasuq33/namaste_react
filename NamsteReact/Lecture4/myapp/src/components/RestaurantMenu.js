import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{
    const [ resInfo , setResInfo ] = useState(null);
    const {resId}  = useParams();
    // Take resIS as a 812598
    useEffect(()=>{
        fetchData(); 
    },[])

    const fetchData = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>
    const { name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
 
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}-{costForTwoMessage}</h2>
            <ul>
                { itemCards.map((item)=> {
               return <li key={item.card.info.id}>{item.card.info.name}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;