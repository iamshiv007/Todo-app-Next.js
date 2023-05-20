"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerHandler = () => {

  }

  return (
    <div className='login'>
        <section>
          <form onSubmit={registerHandler}>
          <input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter Name"
          type="text" />
          <input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email"
          type="email" />
          <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
          type="password" />
          <button type={'submit'}>Sign Up</button>
          <p>OR</p>
          <Link href='login'>Log In</Link>
          </form>
        </section>
    </div>
  )
}

export default Page