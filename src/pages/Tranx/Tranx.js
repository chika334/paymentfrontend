import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Airtime from '../AirtimeTranx'
import Data from '../DataTranx'
import Electric from '../ElectricTranx'

function Tranx() {
  const [key, setKey] = useState('home')

  return (
    <div className="container mt-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Airtime">
          <Airtime />
        </Tab>
        <Tab eventKey="profile" title="Data">
          <Data />
        </Tab>
        <Tab eventKey="contact" title="Electric">
          <Electric />
        </Tab>
        <Tab eventKey="contacts" title="Tv sub">
          <Electric />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Tranx
