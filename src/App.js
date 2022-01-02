import {useState} from "react"
import './App.css';
import axios from "axios";

function App() {
  const [beerList, setBeerList] = useState([])

  const getBeers = (e) => {
    e.preventDefault();
  };

  axios
  .get("https://api.punkapi.com/v2/beers")

  .then((res) => setBeerList(res.data))
  .catch((err) => console.log(err));


  return (
    <div className="App">
      <h1>Beer aop </h1>
    <button onClick={getBeers}>Get all beers</button>

    {
      beerList.length >=1 ? beerList.map((beer, idx) => {
        return <><p key ={idx}>{beer.name}</p>
        <p>{beer.abv}</p>
        <p>{beer.boil_volume.value}</p>
        <p>{beer.brewers_tips}</p>
        </> 
      })
      : ""
    }
    </div>
  );
}

export default App;
