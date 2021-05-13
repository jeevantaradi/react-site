import React from "react";
import "./style.css";


class Component1 extends React.Component{
render(){


return(
    <div className="component1">
        <h1>{this.props.title}</h1>
        <img src={this.props.path}/>
            <label>Realease Date: <span>{this.props.date}</span></label>    
        
        
    </div>

);



}
}

export default Component1;