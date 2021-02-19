import React, { useState } from 'react'

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
      </div>
    </div>
  )
}

export default Card
