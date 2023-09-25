import { useState, useEffect, } from "react";


const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);
  
    useEffect(() => {
        const fetchHouses = async () => {
            const resp = await fetch('/houses.json');
            const houses = await resp.json();
            setAllHouses(houses)
          };
        fetchHouses();
    }, [])
    return allHouses;
}
 
export default useHouses;