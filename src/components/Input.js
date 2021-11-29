import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    inputHandler = (e) => {
        this.props.onTextChange( e.target.value, this.props.number);
    }

    render() { 
        if (this.props.done === true) {
            return <input className="w-70 m-0 p-0 input" onChange={this.inputHandler} value={this.props.text}/>
        } else {
            return <input className="w-70 m-0 p-0 input striked" onChange={this.inputHandler} value={this.props.text}/>
        }
    }
}
 
export default Input;