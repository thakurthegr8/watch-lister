import React from 'react'

export default function Navbar() {
  return (
    <div >
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="search">
        <input type="text" />
        <p>searching logo</p>
      </div>
      <div className='auth'>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}
