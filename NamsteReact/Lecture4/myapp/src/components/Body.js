import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

    // This is callled Conditional rendering
    return restaurantData.length ===0 ? <Shimmer/>: (
        <div className='body'>
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(ev)=>{
                    setSeachText(ev.target.value)
                }}/>
                <button className="search-btn" onClick={()=>{
                    const filterd_data = restaurantData.filter((item)=>  item.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                    setlistofRestaurnt(filterd_data);
                }}>Search</button>
            </div>
            <button className='filter-btn' onClick={()=>{
                // Filtering logic here
                const filteredList = resObj.filter((item)=>{
                    return item.rating > 4;
                })

                setlistofRestaurnt(filteredList);  

            }}>Top Rated RestaurantCard</button>
            <div className='res-container'>
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