import logoPepito from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting";
import React from "react";
//import {GreetingAux} from "./components/GreetingAux";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Ahora si que entiendo algo',
            user: '',
            data:[]
        }
    }
    componentDidMount() {
        console.log('hi there!')
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()
        ).then(data => this.setState({data: data}))
            .then(pepito => conso )
        setTimeout(() => {
            this.setState({user: "Bart Simpson"})
        }, 10000)
    }

    render(){
        return (
            <>
                <div>{this.state.title}</div>
                <div>
                    <Greeting user={this.state.user}/>
                </div>
            </>
        );
    }
}

export default App;
