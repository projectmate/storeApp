import React, { useState } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login({ username, password }))
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
           
          </div>

          <form onSubmit={handleSubmit}>
            <span>아이디</span>
            <input
              type='text'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>패스워드 * </span>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='button'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}
