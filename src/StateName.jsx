import './App.css';
import React from 'react';
import Allstate from './myjson/allindiastate.json';


function StateName() {
    return (
    <div className="alln">
      {Allstate.map((names,index) => {
      return <>
      <div className="allstatename">
      <h2>{names}</h2>     
      </div>
      <hr style={{width: "500px"}}></hr>
      </>
       })}
      </div>
    )
}

export default StateName;
