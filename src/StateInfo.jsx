import React from 'react'
import Allcountry from './myjson/allindia.json';

function StateInfo() {
    return (
        <div className="alls">
        {Allcountry.map((allcases,index) => {
        return <>
        <div className="allstateinfo">
        <h4>Totalcases {allcases.Totalcases} </h4>      
        <h4>NewCases {allcases.NewCases} </h4>
        <h4>TotalDeaths {allcases.TotalDeaths} </h4>
        <h4>NewDeaths {allcases.NewDeaths} </h4>
        <h4>TotalRecovered {allcases.TotalRecovered} </h4>
        <h4>ActiveCases {allcases.ActiveCases} </h4>
        <h4>LastUpdated {allcases.LastUpdated} </h4>
        </div>
        <hr/>
         </>
         })}
         </div>
    )
}

export default StateInfo;
