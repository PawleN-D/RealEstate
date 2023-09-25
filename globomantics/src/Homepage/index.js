import { useEffect, useState } from 'react';
import './homepage.css';
import Header from './header';


function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch('/houses.json');
      const houses = await resp.json();
      setAllHouses(houses)
    };
    fetchHouses();
  }, [])

  let featuredHouse = {};

  if (allHouses.length) {
    const randomIndex = Math.floor(Math.random() * allHouses.length)
    featuredHouse = allHouses[randomIndex];
  }
  return (
    <div className="container">
      <Header subtitle='Providing houses all over the world!' />
    </div>
  );
}

export default App;
