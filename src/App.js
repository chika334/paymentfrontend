// import React, { Component } from 'react'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import { dataTransaction } from './_action/data';
import { NumberverifyTransaction } from './_action/electric';
import { getSmartcard } from './_action/TvsubAction';
//import Example from './component/walletTran'
import { getUserDetails } from './_action/userAction';
import { getElectricTransaction } from './_action/electric';
import { getTransaction } from './_action/airtime';
import { getVerifiedPayement, clearPaystackDetails } from './_action/paystack';

import Routes from './Routes';

export default class App extends Component {
	componentDidMount() {
		if (localStorage.getItem('token')) {
			// store.dispatch({type: USER_DETAIL_LOADED})
			store.dispatch(getUserDetails());
			//store.dispatch(getPay())
			store.dispatch(getTransaction());
			store.dispatch(dataTransaction());
			store.dispatch(getElectricTransaction());
			store.dispatch(getSmartcard());
			// store.dispatch(getVerifiedPayement());
			// setTimeout(() => {
			// 	store.dispatch(clearPaystackDetails());
			// }, 2000);
		} else {
			return <Redirect to={`/`} />;
		}
		// getUser()
		// initialWallet()
		// NumberverifyTransaction()
	}

	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
}

// export default connect(null, { showLoader, hideLoader })(Routes)

// export class App extends Component {
//   componentDidMount() {
//     if (localStorage.getItem('token')) {
//       // store.dispatch({type: USER_DETAIL_LOADED})
//       store.dispatch(getUserDetails())
//       //store.dispatch(getPay())
//       store.dispatch(getTransaction())
//       store.dispatch(dataTransaction())
//       store.dispatch(getElectricTransaction())
//       store.dispatch(getSmartcard())
//     }
//     // getUser()
//     // initialWallet()
//     // NumberverifyTransaction()
//   }
//   render() {
//     const pageVariants = {
//       initial: {
//         opacity: 0,
//       },
//       in: {
//         opacity: 1,
//       },
//       out: {
//         opacity: 0,
//       },
//     }

//     const pageTransition = {
//       type: 'tween',
//       ease: 'linear',
//       duration: 0.6,
//     }
//     return (
//       <Provider store={store}>
//         <AnimatePresence>
//           <Navbar />
//           <Switch>
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               <Route exact path={'/'} component={Home} />
//               <Route exact path={'/login'} component={Login} />
//               <Route exact path={'/register'} component={Register} />
//               <Route exact path={'/about'} component={About} />
//               {/* profile */}
//               <ProtectedRoutes path="/profile/:path?">
//                 <Switch>
//                   <ProtectedRoutes
//                     path="/profile/paid"
//                     exact
//                     component={Paid}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/payment"
//                     exact
//                     component={Payment}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/wallet"
//                     exact
//                     component={Wallet}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/dashboard"
//                     exact
//                     component={UserProfile}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/tranx"
//                     exact
//                     component={Tranx}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/details/airtime"
//                     exact
//                     component={Details}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/details/data"
//                     exact
//                     component={dataDetails}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/details/electric"
//                     exact
//                     component={Details}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/details/tvsub"
//                     exact
//                     component={Details}
//                   />
//                   <ProtectedRoutes
//                     path="/profile/card"
//                     exact
//                     component={CreditCard}
//                   />
//                   <ProtectedRoutes path="/profile" exact component={Account} />
//                   <Route component={Error} />
//                 </Switch>
//               </ProtectedRoutes>
//               <Route component={Error} />
//             </motion.div>
//           </Switch>
//           <Footer />
//         </AnimatePresence>
//       </Provider>
//     )
//   }
// }

// export default App
