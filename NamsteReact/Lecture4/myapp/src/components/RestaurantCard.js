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

export default RestaurantCard