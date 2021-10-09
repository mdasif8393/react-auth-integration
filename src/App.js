import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './Register/Register';
import Header from './components/Home/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Register></Register>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;