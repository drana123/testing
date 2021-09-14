import React from 'react'

export function Clock(props) {
    setInterval(() => {
        let date=new Date();
        console.log(date.toLocaleTimeString());
    }, 1000);
    return(
        
        <div>
            
            <h1>Sapient Clock</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}