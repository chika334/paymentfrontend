import React, { Component, Suspense } from 'react'
import './App.css';

import store from './store'
import {Route, Switch} from 'react-router-dom';
import {getUser} from './_action/userAction.js'

// component
import Navbar from './component/Navbar'
import SecondNav from './component/secondNav'
import Footer from './component/Footer'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes.js'
import Loading from './component/loaders'
import ContactForm from './component/ContactForm'
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

export class App extends Component {
	componentDidMount() {
		store.dispatch(getUser())
	}
  render() {
    return (
      <div>
      	<Suspense fallback={(<div>Loading...</div>)}>
        	<Navbar />
        	<SecondNav />
        	<Switch>
        	    <Route exact path="/" component={Home} />
        		<Route exact path="/login" component={Login} />
        		<Route exact path="/register" component={Register} />
        		<Route exact path="/contact" component={ContactForm} />
        		<Route exact path="/about" component={About} />
        		<Route exact path="/profile/wallet" component={Wallet} />
        		<Route exact path="/profile/transaction" component={Transactions} />
        		<Route exact path="/profile/earning" component={Earnings} />
        		<ProtectedRoutes exact path="/profile" component={UserProfile} />
        		<ProtectedRoutes exact path="/loading" component={Loading} />
        		<AdminRoute exact path="/admin" component={Admin} />
        		<Route component={Error} />
        	</Switch>
        	<Footer/>
        </Suspense>
      </div>
    )
  }
}

export default App
