// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Forgetpassword from './components/Forgetpassword/Forgetpassword';
import Home from './components/Home/Home'
import Domain from './components/DomainSearch/Domain'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return ( <div className = "App" >

        { /* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
        <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Forgetpassword" component={Forgetpassword} />
                <Route path="/Signup" component={Signup} />
                <Route path="/" component={Home} />
                <Route path = "/Domain" component = { Domain }/> 
                </Switch> 
                </BrowserRouter> 
                </div> 
    );
}
export default App