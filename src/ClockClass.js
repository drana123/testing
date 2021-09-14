import React from "react";

export class ClockClass extends React.Component{
     
    constructor(props){
           super(props);
           this.state={currentTime:new Date().toLocaleTimeString()};
    }
    componentDidMount(){
        this.timerId=setInterval(() => {
            this.setState({...this.state,currentTime:new Date().toLocaleTimeString()});
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render(){
        return(
           <div>
               <h1>Sapient Clock</h1>
               <h2>It is { this.state.currentTime}</h2>
           </div>

        );
    }
}