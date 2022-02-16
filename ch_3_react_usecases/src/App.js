import {Hero} from "./components/Hero"
import Header from "./layout/Header"
import React from 'react'
import Exercise2Image from "./components/Exercise2Image"
import Exercise3Data from "./components/Exercise3Data";

class App extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return  <body className="text-gray-700 bg-white">
            <Header/>
            <Hero/>
            <Exercise2Image/>
            <Exercise3Data/>
        </body>
    }
}

export default App;