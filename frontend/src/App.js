import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth";
import Login from "./Components/Login";
import Salon from "./Components/Salon";
import UpdateTask from "./Components/UpdateTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Auth" element={<Auth />}/>
            <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/:idUser" element={<Salon />}/>
            <Route exact path="/Making/:idUser/:idTask" element={<UpdateTask />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
