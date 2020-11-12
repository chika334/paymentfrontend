import React, { Component, Suspense } from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';

// component
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes.js'
import Loading from './component/loaders'
import AdminRoute from './protectedRoutes/AdminRoute.js'
import Wallet from './component/Wallet'

// pages
import Login from './pages/Login.js';
import Register from './pages/Register.js'
import UserProfile from './pages/UserProfile.js'
import Admin from './pages/admin/Admin.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Error from './pages/Error.js'
import Transactions from './pages/Transactions'
import Earnings from './pages/Earnings'
import Payment from './pages/Payment'
import Partner from './pages/Partner'
import Account from './pages/Account'
import Agent from './pages/Agent'
import {getUser} from './_action/userAction.js'
import Paid from './component/paidTransaction'
import store from './store'

export class App extends Component {
  	componentDidMount() {
        store.dispatch(getUser())
	}
  render() {
    return (
      <div>
    	<Navbar />
    	<Switch>
    	    <Route exact path={"/"} component={Home} />
    		<Route exact path={"/login"} component={Login} />
    		<Route exact path={"/register"} component={Register} />
    		<Route exact path={"/about"} component={About} />
    		<Route exact path={"/payment"} component={Payment} />
    		<Route exact path={"/earning"} component={Partner} />
    		<Route exact path={"/agent"} component={Agent} />
    		<Route exact path={"/paid"} component={Paid} />
    		<ProtectedRoutes exact path={"/profile/transaction"} component={Transactions} />
    		<ProtectedRoutes exact path={"/profile/earning"} component={Earnings} />
    		<ProtectedRoutes exact path={"/profile/dashboard"} component={UserProfile} />
    		<ProtectedRoutes exact path={"/profile"} component={Account} />
    		<ProtectedRoutes exact path={"/loading"} component={Loading} />
    		<AdminRoute exact path={"/admin"} component={Admin} />
    		<Route component={Error} />
    	</Switch>
    	<Footer/>
      </div>
    )
  }
}

export default App
