import React, { Component } from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

// component
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes.js'
import Wallet from './component/Wallet'
//import { getPay } from './_action/airtime'
import { getTransaction } from './_action/airtime'

// pages
import Login from './pages/Login.js';
import Register from './pages/Register.js'
import UserProfile from './pages/UserProfile.js'
import Home from './pages/Homesecond.js'
//import Home from './pages/Home.js'
import About from './pages/About.js'
import Error from './pages/Error.js'
import Transactions from './pages/AirtimeTranx'
import Payment from './pages/Payment'
import Account from './pages/Account'
import {getUser} from './_action/userAction.js'
import Paid from './component/paidTransaction'
import store from './store'
import { initialWallet } from './_action/wallet'
import CreditCard from './component/creditCard'
import Details from './component/Details'
import dataDetails from './component/dataDetails'
import { dataTransaction } from './_action/data'
import { NumberverifyTransaction } from './_action/electric'
import { getSmartcard } from './_action/TvsubAction'
import Example from './component/walletTran'
import { getUserDetails } from './_action/userAction'
import { getElectricTransaction } from './_action/electric'

export class App extends Component {
  	componentDidMount() {
		if(localStorage.getItem('token')) {
			// store.dispatch({type: USER_DETAIL_LOADED})
			store.dispatch(getUserDetails())
			//store.dispatch(getPay())
			store.dispatch(getTransaction())
			store.dispatch(dataTransaction())
			store.dispatch(getElectricTransaction())
			store.dispatch(getSmartcard())
		}
        getUser()
        initialWallet()
        NumberverifyTransaction()
        
	}
  render() {
    return (
		<Provider store={store}>
    	<Navbar />
    	<Switch>
    	    <Route exact path={"/"} component={Home} />
    		<Route exact path={"/login"} component={Login} />
    		<Route exact path={"/register"} component={Register} />
    		<Route exact path={"/about"} component={About} />
			{/* profile */}
			<ProtectedRoutes path='/profile/:path?'>
				<Switch>
					<ProtectedRoutes
						path='/profile/paid'
						exact
						component={Paid}
					/>
					<ProtectedRoutes
						path='/profile/payment'
						exact
						component={Payment}
					/>
					<ProtectedRoutes
						path='/profile/wallet'
						exact
						component={Wallet}
					/>
					
					<ProtectedRoutes
						path='/profile/dashboard'
						exact
						component={UserProfile}
					/>
					
					<ProtectedRoutes
						path='/profile/details/airtime'
						exact
						component={Details}
					/>
					<ProtectedRoutes
						path='/profile/details/data'
						exact
						component={dataDetails}
					/>
					<ProtectedRoutes
						path='/profile/details/electric'
						exact
						component={Details}
					/>
					<ProtectedRoutes
						path='/profile/details/tvsub'
						exact
						component={Details}
					/>
					<ProtectedRoutes
						path='/profile/confirmWallet'
						exact
						component={Example}
					/>
					<ProtectedRoutes
						path='/profile'
						exact
						component={Account}
					/>
					<Route component={Error} />
				</Switch>
			</ProtectedRoutes>
			{/* <Route exact path={"/paid"} component={Paid} />
			<Route exact path={"/payment"} component={Payment} />
    		<Route exact path={"/profile/wallet"} component={Wallet} />
			<Route exact path={"/profile/transaction"} component={Transactions} />
    		<ProtectedRoutes exact path={"/profile/dashboard"} component={UserProfile} />
			<ProtectedRoutes exact path={"/card"} component={CreditCard} />
    		<Route exact path={"/details"} component={Details} />
    		<Route exact path={"/confirmWallet"} component={Example} />
    		<ProtectedRoutes exact path={"/profile"} component={Account} /> */}
			 {/* Error */}
    		<Route component={Error} />
    	</Switch>
    	<Footer/>
	</Provider>
    )
  }
}

export default App
