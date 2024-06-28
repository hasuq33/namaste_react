import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({items}) =>{
    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item)=>{
              return  <div className="p-2 m-2 border-gray-200 order-2 border-b-2 flex justify-between text-left" key={item.card.info.id}>
                <div className="w-3/12 p-4 relative" >
                    <img className="w-full h-[110px]" src={CDN_URL+item.card.info.imageId}/>
                    <div className="absolute w-full left-7  bottom-1">
                    <button onClick={()=>handleAddItem(item)} className="text-green-600 bg-white border-2  shadow-lg w-8/12 p-2 rounded-lg ">Add</button>
                    </div>
                </div>
                <div className="w-9/12 order-first p-4">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>-₹ {(item.card.info.price || item.card.info.defaultPrice) /100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemList;