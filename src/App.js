import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router";
import data from './data.json';
import Details from './pages/Portfolio_details';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />  
        <Route path="/About" element={<About/>} />  
        <Route path="/portfolio" element={<Portfolio data={data} />} />  
        <Route path="/portfolio/:id" element={<Details data={data} />} />  
      </Routes>
    </Router>
  );
}

export default App;
