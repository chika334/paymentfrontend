import React, { Component } from 'react'
import oliver from '../images/oliver.jpg'
import Card from './displayServices'

import { FaLock } from 'react-icons/fa'

class Cards extends Component {
    render() {
        return (
            <div>
                <img src={oliver} className="backside" alt="cardui" />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row p-5">
                        <div className="col-md-4">
                            <Card title="Safer and protected" text="100% Secure Payments. All financial payments are well protected" />
                        </div>
                        <div className="col-md-4">
                            <Card title="Simple and convenient" text="Pay online with your Mipplepay. Stay logged in and check out without entering your password." />
                        </div>
                        <div className="col-md-4">
                            <Card title="No more late fees" text="Save time with Mipplepay. All bill payment are made fast and reliable"  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
