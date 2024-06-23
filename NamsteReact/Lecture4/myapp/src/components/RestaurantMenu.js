import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerCard from "./ShimmerCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const {resId}  = useParams();
    const [showIndex, setShowIndex ] = useState(2);

    const setIndex=(index)=>{
        if(index === showIndex){
            setShowIndex(null);  
        } else{ 
            setShowIndex(index);
        }
    }

    const resInfo = useRestaurantMenu(resId); 

    if(resInfo === null) return <ShimmerCard/>
    const { name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards;
 
    return (
        <div className="text-center">
            <h1 className="font-bold my-5">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</h2>
            {
                categories.map((item , index) =>{
                    if(item?.card?.card?.itemCards){
                        const itemCards = item.card?.card;
                        const uniquekey =  `${item.card.card.itemCards[0]?.card?.info?.id || index}-${index}`;
                       return <RestaurantCategory data={itemCards} key={uniquekey}
                        showItems={showIndex === index ? true : false} setShowIndex={()=>setIndex(index)} />
                    }
                })
            }
        </div>
    )
}

export default RestaurantMenu;