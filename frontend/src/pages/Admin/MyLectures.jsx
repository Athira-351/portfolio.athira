import React from 'react'
import { Link } from 'react-router-dom'

const MyLectures = () => {
  return (
    <div>
        <h1>Learning Point</h1>
        <ul>
            <h3>Computer Organization and Architecture</h3>
            <li><Link to="/alu">ALU, Data Path and Control unit</Link></li>
        </ul>
    </div>
  )
}

export default MyLectures