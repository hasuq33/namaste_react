import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus , setOnlineStatus ] = useState(navigator.onLine); 

    // check if online or offline in useEffect Function
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    },[])

    return onlineStatus; 
}

export default useOnlineStatus;