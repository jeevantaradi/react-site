import React from "react";

class Calculator extends React.Component{
    state = {
        a:1,b:5
    }
    render(){
        return(
            <div>{this.state.a + this.state.b}</div>
        );
    }

}

export default Calculator;