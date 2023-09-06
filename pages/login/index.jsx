import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    
    <div>
      Login Page

      <div>
      <p>Don't have an account ?</p>
      <Link href="/register">Register</Link>
      </div>
    </div>
  )
}
