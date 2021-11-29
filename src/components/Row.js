import React from 'react';

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    inputHandler = (e) => {
        this.props.onTextChange( e.target.value, this.props.number);
    } 
    render() { 
        return ( 
                <div className="flex-container flex-row flex-space-around w-100 border my-02">
                    <p className=" ">{this.props.number}</p> 
                    <input className="w-70 m-0 p-0 input" onChange={this.inputHandler} value={this.props.text}/>
                    <button className="button" type="button">+</button>
                </div>
            );
    }
}
 
export default TodoRow;