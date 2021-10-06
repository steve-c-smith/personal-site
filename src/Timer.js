import reactDom from "react-dom";
import React from 'react';

export class Timer extends React.Component {
 
    get totalTime(){
        const seconds = 0;
        const minutes = 0;
        const hours = 0;
        return `${hours}:${minutes}:${seconds}`;
    }    

    render(){
        return(
            <div>
                {this.totalTime}
            </div>
        );
    }
}