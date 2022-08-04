import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Login" element={<Login />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
