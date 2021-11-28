import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import ToDo from "./components/ToDo"

class App extends React.Component {
    render() {
        return(
            <div className="center">
                <ToDo/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))