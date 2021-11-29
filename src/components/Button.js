import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    clickHandler = () => {
        this.props.onButtonChange( this.props.number);
    }

    render() { 
        if (this.props.done === true) {
            return <button className="button completed" type="button" onClick={this.clickHandler} >+</button>
        } else {
            return <button className="button" type="button" onClick={this.clickHandler} >+</button>
        }
    }
}
 
export default Button;