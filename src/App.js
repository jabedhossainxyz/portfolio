import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar";
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
