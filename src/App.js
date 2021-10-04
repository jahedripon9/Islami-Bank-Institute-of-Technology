import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Carousels from './components/Carousels/Carousels';
import Depatments from './components/Depatments/Depatments';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

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

          </Route>
          <Route path="/depatment">
            <Depatments></Depatments>
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
