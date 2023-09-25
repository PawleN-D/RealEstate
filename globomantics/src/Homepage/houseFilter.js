import { useHistory } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
    const history = useHistory()
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    countries.unshift(null);

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`)
    };

    return ( 
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house in country:
            </div>
            <div>
                <select className="col-md-4 mb-3" onChange={onSearchChange}>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
        </div>
     );
}
 
export default HouseFilter;