import React, { Component } from 'react'
import '../css/balance.css'
import { GiFlowerStar } from 'react-icons/gi'
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdWidgets } from 'react-icons/md'
import { FaHandshake, FaUserFriends } from 'react-icons/fa'
import { DiCodeBadge } from 'react-icons/di'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Partner extends Component {
    state = {
      click: false  
    }
    
    handleClick = (e) => {
        e.preventDefault()
        this.setState({ click: true })
    }
    
  render() {  
    return (
      <div className="jumbotron">
      	<div className="container pt-2">
      	<h3 className="pt-3"><b>Payment</b></h3>
      	<div>Earn easy by partnering with us.</div>
      	<div>Join the vtpass.com Happy Earner Program and earn money online.</div>
      	<div>We have provided all the tools and resources you need to earn a commision with VTpass.com.</div>
      	<div>Earn easy by partnering with us.</div>
      	There are 6 easy ways to Earn.
      	<hr />

      	<div className="new">
      	    <div className="new">
      	        <div>
      	            <GiFlowerStar size={50}/>
      	        </div>
      	        <span>
      	            AFFILIATE <button onClick={this.handleClick} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br/>
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	    
      	    <div className="new">
      	        <div>
      	            <RiCustomerService2Line size={50} />
      	        </div>
      	        <span>
      	            TERMINAL AGENT <button onClick={this.handleClicked} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br/>
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	</div>
      	
      	<div className="new">
      	    <div className="new">
      	        <div>
      	            <MdWidgets size={50} />
      	        </div>
      	        <span>
      	             WIDGETS <button onClick={this.handleClicks} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br />
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	    
      	    <div className="new">
  	            <div>
  	                <FaHandshake size={50} />
  	            </div>
      	        <span>
      	            TRADE PARTNERS <button onClick={this.handleClickes} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br />
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	</div>
      	
      		<div className="new">
      	    <div className="new">
      	        <div>
      	            <FaUserFriends size={50} />
      	        </div>
      	        <span>
      	            REFER A FRIEND <button onClick={this.handleClicky} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br />
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	    
      	   <div className="new">
  	            <div>
  	                <DiCodeBadge size={50} />
  	            </div>
      	        <span>
      	            TRADE PARTNERS <button onClick={this.handleClickt} style={{ backgroundColor: 'Transparent', color: 'black' }} className="btn btn-success">JOIN NOW</button><br />
      	        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      	        </span>
      	    </div>
      	</div>
      	</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    authUser: state.authUser
})

export default connect(mapStateToProps)(Partner)
