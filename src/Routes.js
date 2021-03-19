import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

// component
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes.js';
import Wallet from './component/Wallet';
import Forgot from './component/Forgotpassword/ForgotPassword';
import SuspenseLoading from './component/SuspendLoading/SuspendLoading';

import { showLoader, hideLoader } from './_action/loading';

// pages
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import UserProfile from './pages/UserProfile.js';
import Home from './pages/Homesecond.js';
//import Home from './pages/Home.js'
import About from './pages/About.js';
import Error from './pages/Error.js';
import Transactions from './pages/AirtimeTranx';
import Payment from './pages/Payment';
import Account from './pages/Account';
import { getUser } from './_action/userAction.js';
import Paid from './component/paidTransaction';
import store from './store';
import { initialWallet } from './_action/wallet';
import CreditCard from './component/creditCard';
import Details from './component/Details';
import dataDetails from './component/dataDetails';
import Tranx from './pages/Tranx/Tranx';
import Success from './pages/successMsg';

const Routes = (props) => {
	const location = useLocation();
	const loading = useSelector((state) => state.loading.loading);

	const pageVariants = {
		initial: {
			opacity: 0
		},
		in: {
			opacity: 1
		},
		out: {
			opacity: 0
		}
	};

	const pageTransition = {
		type: 'tween',
		ease: 'linear',
		duration: 0.6
	};

	useEffect(() => {
		props.showLoader();
		setTimeout(() => {
			props.hideLoader();
		}, 2000);
	}, []);

	return (
		<div>
			<AnimatePresence>
				<motion.div
					initial="initial"
					animate="in"
					exit="out"
					variants={pageVariants}
					transition={pageTransition}
				>
					{loading ? (
						<SuspenseLoading />
					) : (
						<div>
							<Navbar />
							<Suspense fallback={<SuspenseLoading />}>
								<Switch>
									<Route exact path={'/'} component={Home} />
									<Route exact path={'/login'} component={Login} />
									<Route exact path={'/forgotpassword'} component={Forgot} />
									<Route exact path={'/register'} component={Register} />
									<Route exact path={'/about'} component={About} />
									<ProtectedRoutes
										path={[
											`/profile`,
											`/profile/paid`,
											`/profile/payment`,
											`/profile/wallet`,
											`/profile/dashboard`,
											`/profile/tranx`,
											`/profile/details/airtime`,
											`/transfer`,
											`/deposits`,
											`/products`,
											`/profilepage`,
											`/buytoken`,
											`/settings`,
											`/walletTranx`,
											`/reportTranx`,
											`/fundWallet`,
											`/debitWallet`,
											`/success`
											// `/PageRegisterOverlay`,
										]}
									>
										<Switch location={location} key={location.pathname}>
											<ProtectedRoutes path={`/success`} exact component={Success} />
											<ProtectedRoutes path={`/profile`} exact component={Account} />
											<ProtectedRoutes path={`/profile/paid`} exact component={Paid} />
											<ProtectedRoutes path={`/profile/payment`} exact component={Payment} />
											<ProtectedRoutes path={`/profile/wallet`} exact component={Wallet} />
											<ProtectedRoutes
												path={`/profile/dashboard`}
												exact
												component={UserProfile}
											/>
											<ProtectedRoutes path={`/profile/tranx`} exact component={Tranx} />
											<ProtectedRoutes
												path={`/profile/details/airtime`}
												exact
												component={Details}
											/>
											<ProtectedRoutes
												path={`/profile/details/data`}
												exact
												component={dataDetails}
											/>
											<ProtectedRoutes
												path={`/profile/details/electric`}
												exact
												component={Details}
											/>
											<ProtectedRoutes
												path={`/profile/details/tvsub`}
												exact
												component={Details}
											/>
											<ProtectedRoutes path={`/profile/card`} exact component={CreditCard} />
										</Switch>
									</ProtectedRoutes>
									<Route component={Error} />
								</Switch>
							</Suspense>
						</div>
					)}
					<Footer />
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default connect(null, { showLoader, hideLoader })(Routes);
