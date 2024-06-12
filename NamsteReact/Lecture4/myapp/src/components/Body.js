import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    //Local State Variables  - Super  powerful variables (inside the component)
    const [listofRestaurnt, setlistofRestaurnt] = useState([]);
    const [searchText , setSeachText ] = useState("");
    const [ restaurantData , setRaurantData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(()=>{
        const filterd_data = restaurantData.filter((item)=>  item.info.name.toLowerCase().includes(searchText.toLowerCase()) );
        setlistofRestaurnt(filterd_data);
    },[searchText])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        setlistofRestaurnt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus(); 
    if(onlineStatus === false){
        return <h1>You are Offline 🫡</h1>
    }

    // This is callled Conditional rendering
    return restaurantData.length ===0 ? <Shimmer/>: (
        <div className='body'>
            <div className="flex">
            <div className="m-4 p-4 ">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(ev)=>{
                    setSeachText(ev.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-300 mx-4 text-white rounded-lg" onClick={()=>{
                    const filterd_data = restaurantData.filter((item)=>  item.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                    setlistofRestaurnt(filterd_data);
                }}>Search</button>
            </div>
            <div className="flex items-center">
            <button className='px-4 py-2 bg-gray-100 rounded' onClick={()=>{
                // Filtering logic here
                const filteredList = restaurantData.filter((item)=>{
                    return item.info.avgRating > 4;
                })

                setlistofRestaurnt(filteredList);  

            }}>Top Rated RestaurantCard</button>
            </div>
            </div>
            <div className='res-container flex flex-wrap'>
                {
                    listofRestaurnt.map((restaurant)=>{
                       return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard key={restaurant.info.id}  resData={restaurant}/></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Body