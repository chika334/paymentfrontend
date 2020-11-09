import React, { Component } from 'react'
import Password from '../component/Password'
import PersonalData from '../component/PersonalData'
import Setting from '../component/Settings'
import WebHooks from '../component/WebHooks'
import '../css/singleNav.css'

export class Account extends Component {  
  openCity = (evt, cityName) => {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
    componentDidMount() {
        document.getElementById("defaultOpen").click()
    }

  render() {
    return (
      <div className="fold">
        <h3 className="pl-3">Profile Details</h3>
        <div className="tab">
          <button className="tablinks" id="defaultOpen" onClick={event => this.openCity(event, 'PersonalData')}>Personal Data</button>
          <button className="tablinks" onClick={event => this.openCity(event, 'Setting')}>Setting</button>
          <button className="tablinks" onClick={event => this.openCity(event, 'Password')}>Password</button>
          <button><a href="/profile/dashboard">Dashboard</a></button>
        </div>

        <div id="PersonalData" className="tabcontent">
          <PersonalData />
        </div>

        <div id="Setting" className="tabcontent">
          <Setting />
        </div>

        <div id="Password" className="tabcontent">
          <Password />
        </div>
      </div>
    )
  }
}

export default Account
