import { Outlet} from "react-router-dom";
import './App.css';
import Menu from "./components/Menu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <Outlet />
    </div>
  );
}
export default App;
