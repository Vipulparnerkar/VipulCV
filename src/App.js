
import './App.css';
import Contact from "./Components/Contact/contact"
import Content from './Components/Content/content';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Components/Header/header';



function App() {
  return (
    <Router>
      
    <Header />
    <Switch>
      
    <Route exact path="/" component={Content} />
    <Route exact path="/contact" component={Contact} />

    </Switch>
    
 

</Router>
      

  );
}

export default App;
