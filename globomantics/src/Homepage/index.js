import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import './homepage.css';
import Header from './header';
import FeaturedHouse from './featuredHouse';




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
      </div>

      <Switch>
        <Route path='/'>
          <FeaturedHouse house={featuredHouse} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
