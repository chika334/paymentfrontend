import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BiWallet } from 'react-icons/bi'
import { Redirect } from 'react-router-dom'
import '../css/balance.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3%',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(45),
      height: theme.spacing(35),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false)
  
  const handleButton = () => {
    setRedirect(true)
    if (redirect) return (<Redirect to="/profile/" />)
  }
  

  return (
    <div className={classes.root}>
      <Paper className="bg-dark" elevation={3} style={{ borderRadius: '20px', color: 'white' }}>
        <div className="news" style={{ padding: '15px'}}>
            <BiWallet size={80} style={{ display: 'inline-block', borderRadius: '60px', boxShadow: '0px 0px 2px #888', padding: '0.5em 0.6em', backgroundColor: 'skyblue' }} /> 
            <div>
                <b>LIFETIME EARNINGS</b>
                <p>0.00 NGN</p>
            </div>
        </div>
       <b className="pl-4" >EARNINGS</b>
        <div className="news" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
            <div>
                <div>0.00 NGN</div>
                <small>TODAY</small>
            </div>
            <div>
                <div>0.00 NGN</div>
                <small>THIS MONTH</small>
            </div>
            <div>
                <div>0.00 NGN</div>
                <small>LAST MONTH</small>
            </div>
        </div>
      </Paper>
      
      <Paper className="new secondtab" elevation={7} style={{ paddingTop: 5, borderRadius: '20px', width: '765px', minHeight: '300px' }} >
        <div>
            <BiWallet className="nav-center" size={50} />
            <div>WALLET BALANCE</div>
            <h3><b>0.00</b></h3><small>NGN</small>
        </div>
        <div>
            <p>Available Payment Method</p>
            <div className="news">Debit Cards: <p style={{ color: 'blue' }}>Available</p></div>
            <div className="news">Bank Transfer: <p style={{ color: 'blue' }}>Available</p></div>
             <button onClick={handleButton} className="btn btn-primary"> <BiWallet /> Fund With Card Transfer</button> 
        </div>
      </Paper>
      
      <Paper elevation={3} style={{ borderRadius: '20px', color: 'black', padding: "4%" }}>
        <p style={{ color: "blue" }}>Recent Transaction</p>
        <div style={{ paddingLeft: '2px', paddingRight: '2px' }}>
            <div>
                <div className="news">0.00: <p>Transactions This Month</p></div>
                <div className="news">0.00: <p>Transactions Last Month</p></div>
            </div>
            <button className="btn btn-primary">view more</button>
        </div>
      </Paper>
    </div>
  );
}

