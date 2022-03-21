import './App.css';
import Car from './components/Car'
import Person from './components/Person'
//import Business from './components/Business'
import Counter from './components/Counter'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter/>
                <Car/>
                <Person/>
                <Person name={"Yo pispo"}/>
                <Person name="Pepito" eyeColor="blue" />
            </header>

        </div>
    );
}

export default App;
