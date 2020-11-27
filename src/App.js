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
import { getPay } from './_action/airtime'
import { getTransaction } from './_action/airtime'

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
import {getUser} from './_action/userAction.js'
import Paid from './component/paidTransaction'
import store from './store'
import { initialWallet } from './_action/wallet'
import CreditCard from './component/creditCard'
import Details from './component/Details'
import Particulars from './component/particulars'
import { dataTransaction } from './_action/data'
import { NumberverifyTransaction } from './_action/electric' 

export class App extends Component {
  	componentDidMount() {
        store.dispatch(getUser())
        store.dispatch(initialWallet())
        store.dispatch(getPay())
        store.dispatch(getTransaction())
        store.dispatch(dataTransaction())
        store.dispatch(NumberverifyTransaction())
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
    		<Route exact path={"/paid"} component={Paid} />
    		<Route exact path={"/card"} component={CreditCard} />
    		<Route exact path={"/details"} component={Details} />
    		<Route exact path={"/party"} component={Particulars} />
    		<ProtectedRoutes exact path={"/profile/transaction"} component={Transactions} />
    		<ProtectedRoutes exact path={"/profile/earning"} component={Earnings} />
    		<Route exact path={"/profile/wallet"} component={Wallet} />
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
