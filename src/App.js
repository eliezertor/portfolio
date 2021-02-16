import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Policy from "./Components/Policy/Policy";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Projects" component={Projects}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route exact path="/Policy" component={Policy}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
