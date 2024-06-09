import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    // const [ resInfo , setResInfo ] = useState(null);
    const {resId}  = useParams();
    // Take resIS as a 812598

    const resInfo = useRestaurantMenu(resId); 
    

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