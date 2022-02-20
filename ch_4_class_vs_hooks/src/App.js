import {Hero} from "./components/Hero"
import Header from "./layout/Header"
import React from 'react'
import Exercise2Image from "./components/Exercise2Image"
import Exercise3Data from "./components/Exercise3Data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: 1
        }
        this.setActiveOption = this.setActiveOption.bind(this);
    }


    setActiveOption(val) {
        console.log(`Callback - changing state value to ${val}`)
        this.setState({option: val})
    }

    render() {
        let renderingPart = "";
        console.log(`Current state value is ${this.state.option}`)
        if (this.state.option === 2) {
            renderingPart = <Exercise2Image/>
        } else if (this.state.option === 3) {
            renderingPart = <Exercise3Data/>
        } else {
            renderingPart = <Hero/>
        }
        return <body className="text-gray-700 bg-white">
        <Header onClick={this.setActiveOption}/>
        {renderingPart}
        </body>
    }
}

export default App;