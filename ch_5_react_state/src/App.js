import Header from "./layout/Header"
import React from 'react';
import {AppProvider} from "./AppContextProvider";
import {Main} from "./layout/Main";

const App = () => {
    return (
        <AppProvider>
            <div className="text-gray-700 bg-white">
                <Header/>
                <Main/>
            </div>
        </AppProvider>
    )
}

export default App;