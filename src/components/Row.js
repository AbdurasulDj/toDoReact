import React from 'react';
import Button from './Button';
import Input from './Input';

class TodoRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
 
    render() { 
        return ( 
                <div className="flex-container flex-row flex-space-around w-100 border my-02">
                    <p className=" ">{this.props.number}</p> 
                    <Input 
                        done={this.props.done} 
                        text={this.props.text}  
                        number={this.props.number}
                        onTextChange={this.props.onTextChange}
                    />

                    <Button 
                        done={this.props.done}
                        number={this.props.number}
                        onButtonChange={this.props.onButtonChange}
                    />
                    
                </div>
            );
    }
}
 
export default TodoRow;