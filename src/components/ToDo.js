import React from 'react';
import Row from './Row';


    
class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [
                {id: 0, number: 1, text: 'hello world', done: false}, 
                {id: 1, number: 2, text: 'hello me', done: false},
                {id: 2, number: 3, text: 'I love world', done: true},
                {id: 3, number: 4, text: 'thank you', done: false}
            ]
        })
    }

    handleTextChange= (newText,number) => {
                this.setState( prevState => ({
                    data: prevState.data.map(
                        obj => (obj.number === number ? Object.assign({}, obj, { text: newText}) : obj)
                    )
                }))
    }

    render() {
        
        return ( 
                <div className="flex-container flex-column flex-center">
                    <p className="todo-text">My ToDo</p>

                    {
                        this.state.data.map( 
                            (obj) => {
                                return <Row 
                                    key={obj.id} 
                                    number={obj.number} 
                                    text={obj.text} 
                                    done={obj.done}
                                    onTextChange={this.handleTextChange}
                                />
                        })
                    }
                </div>
         );
    }
}
 
export default ToDo;