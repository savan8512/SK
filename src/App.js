import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Product from './components/Product';
import Gallary from './components/Gallary';
import Store from './components/Store';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
           <div className="App">
            <ul className="App-header">
              
              
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
            </ul>
           <Routes>
                 <Route exact path='/' element={isLoggedIn=="true"?<UserDetails/>:< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/Store' element={< Store />}></Route>
                 <Route exact path='/Product' element={< Product />}></Route>
                 <Route exact path='/Gallary' element={< Gallary />}></Route>
                 <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/userDetails" element={<UserDetails />} />
          </Routes>
          </div>
       </Router>
  );
}

export default App;
