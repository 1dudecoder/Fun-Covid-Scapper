import './App.css';
import MovieData from './myjson/Movie.json';
import Cases from './myjson/covidindo.json';
import StateName from './StateName';
import StateInfo from './StateInfo';
import MyNewz from './MyNewz';
import WhatTo from './WhatTo';

function App() {
  return (
    <>
  <center><h1> INDIA TOTAL CASES </h1></center>

    {Cases.map((cases,index) => {
      return <>
      <div className="allindia">
      <h4>Confirmed - {cases['All India Confirmed']} </h4>      
      <h4>Active  - {cases['All India Active']} </h4>
      <h4>Death  - {cases['All India Death']} </h4>
      <h4>Recovered  - {cases['All India Recovered']} </h4>  
      </div>
    </>
    })}

    <hr/>
    <center><h2> All State Covid Info 🔥 </h2> </center>

    <hr/>
    <div className="covidstatus">
    <hr/>
     <StateName></StateName>
     <StateInfo></StateInfo>
     <hr/>
    </div>
    <hr/>

    <center><h2>TOP 30 Local Covid News 😄</h2> </center>
    <hr/>

    <MyNewz></MyNewz>
    <br></br>
    <center><h2> Top 20 Movies Watch IN Lockdown 🔥🔥</h2> </center>
    {MovieData.map((movie,index) => {
     return <>
      <center>
      <ul>
      <li>
      <h3>NAME - {movie.MovieName} </h3> <p>Rating {movie.IMDb_Rating} </p>
      <p>Summery - {movie.Summery}</p>
      <a href = {movie.Trailer} > Trailer  </a>
      </li>
      </ul>
      </center>
      </>
        })}
        <hr/>
        <center><h1> TODO LIST IN LOCKDOWN 😄😄</h1></center>
        <hr/>
        <WhatTo></WhatTo>
        <h3> 6 And Watch Movies</h3>

        <center><h1> 😄HAVE FUN BYE BYE ✈️🔥</h1></center>
    </>
    
  );
}

export default App;
