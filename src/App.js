
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Contactus from './components/Contactus/Contactus';
import Depatment from './components/Depatment/Depatment';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>
          
          <Route path="/depatment">
            <Depatment></Depatment>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
      
      {/* <Header></Header>
      <Carousels></Carousels>
      <Depatments></Depatments>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
