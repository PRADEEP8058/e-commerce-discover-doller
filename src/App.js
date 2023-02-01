// developed by Pradeep Kumar Yadav

// components imports
import Header from './components/Header'; //Include Header
import Footer from './components/Footer'; //Include Footer
import Home from './components/Home'; // Include Home

// some useful package imports
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const categories = {
  electronics: ["mobile", "laptop", "tv"],
};


// app component
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}

export default App;