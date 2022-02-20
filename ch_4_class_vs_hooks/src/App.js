import {Hero} from "./components/Hero"
import Header from "./layout/Header"
import React, { useState } from 'react';
import Exercise2Image from "./components/Exercise2Image"
import Exercise3Data from "./components/Exercise3Data";

const App = () =>{
    const [option, setOption] = useState(1);
    const setActiveOption = (val) => {
        console.log(`Callback - changing state value to ${val}`)
        setOption(val);
    }
    let renderingPart = "";
    switch (option){
        case 1:
            renderingPart = <Hero/>
            break;
        case 2:
            renderingPart = <Exercise2Image/>
            break;
        case 3:
            renderingPart = <Exercise3Data/>
            break;
        default:
            break;
    }
    console.log(`Current state value is ${option}`)
    return (<body className="text-gray-700 bg-white">
    <Header onClick={setActiveOption}/>
    {renderingPart}
    </body>)
}

export default App;