import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const { resData } = props;
    return (
        <div className='res-card' style={ {
            backgroundColor:"#f0f0f0",
        }}>
            <img alt='res-logo' className='res-logo' src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.costForTwo} FOR TWO</h4>
            <h4>{resData.info.sla.slaString} minutes</h4>
        </div>
    )
}

export default RestaurantCard