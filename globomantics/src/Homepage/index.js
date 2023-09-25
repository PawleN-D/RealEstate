import { BrowserRouter as Router, Switch, Route } from  'react-router-dom'
import './homepage.css';
import Header from './header';
import FeaturedHouse from './featuredHouse';
import SearchResults from '../search-results';
import HouseFilter from './houseFilter';
import HouseFromQuery from '../House/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/housesContext';


function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle='Providing houses all over the world!' />
          <HouseFilter />
          <Switch>
            <Route path='/searchresults/:country'>
              <SearchResults />
            </Route>
            <Route path='/house/:id'>
              <HouseFromQuery />
            </Route>
            <Route path='/'>
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
