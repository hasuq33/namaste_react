import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const { resData } = props;
    return (
        <div className='res-card m-4 p-4 w-[250px] rounded min-h-[27em] bg-gray-100 hover:bg-gray-200'>
            <img alt='res-logo' className='res-logo rounded-lg w-[100%] h-[200px]' src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.costForTwo} FOR TWO</h4>
            <h4>{resData.info.sla.slaString} minutes</h4>
        </div>
    )
}

// Higher Order Component

// input RestaurantCard  ==> ResTaurantCardPramoted

export const withPromatedLabel = ( RestaurantCard )=>{
    return(props) =>{
        return(
            <>
            <div className="relative">
                <label className="absolute left-4 top-0 bg-black text-white rounded p-[1px]">Opened</label>
                <RestaurantCard {...props}/>
            </div>
            </>
        )
    }
}

export default RestaurantCard