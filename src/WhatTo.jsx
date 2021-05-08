import React from 'react'
import What from './myjson/Todoinlockdown.json';
function WhatTo() {
    return (
    <>
        <div>
            {What.map((what,index)=>{
                return<>
                    <h3>{what}</h3>
                </>
            })}
        </div>
    </>
    )
}
export default WhatTo;
