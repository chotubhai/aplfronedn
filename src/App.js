import React from 'react' 
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Settings from './Pages/Settings/Settings'
import Auction from './Pages/Auction/Auction'
import Profile from './Pages/Profile/Profile'
import Landing from './Pages/Landing/Landing'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import './App.css'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={(history) => <Landing history={history} /> } /> 
        <Route exact path="/login" component={(history) => <Login history={history} /> } /> 
        <Route exact path="/signup" component={(history) => <SignUp history={history} /> } />
        <Route exact path="/forgotpassword" component={(history) => <ForgotPassword history={history} /> } />
        <Route exact path="/home" component={(history) => <Home history={history} /> } />
        <Route exact path="/settings" component={(history) => <Settings history={history} /> } />
        <Route exact path="/auction" component={(history) => <Auction history={history} /> } />
        <Route exact path="/profile" component={(history) => <Profile history={history} /> } />
      </Switch>
    </div>
  );
}

export default App;
