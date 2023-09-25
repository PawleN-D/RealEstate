import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import './homepage.css';
import Header from './header';
import FeaturedHouse from './featuredHouse';
import SearchResults from '../search-results';
import HouseFilter from './houseFilter';
import HouseFromQuery from '../House/HouseFromQuery';

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

  const featuredHouse =  useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length)
      return allHouses[randomIndex];
    }
  }, [allHouses])

  return (
    <Router>
      <div className="container">
        <Header subtitle='Providing houses all over the world!' />
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path='/searchresults/:country'>
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path='/house/:id'>
            <HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route path='/'>
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
