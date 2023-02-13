import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"
import "./signup.css"

export const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const signupHandler = (e) => {
    e.preventDefault()

    if (username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || passwordConfirm.trim().length === 0) {
      setError("All fields are required.")
      return
    }

    if (password !== passwordConfirm) {
      setError("Passwords do not match.")
      return
    }

    dispatch(authActions.signup(username, email, password))
  }

  return (
    <div className='formContainer'>
      <h1>회원가입</h1>
      {error && (
        <div className='error'>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={signupHandler}>
        <div className='inputContainer'>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='아이디' />
        </div>
        <div className='inputContainer'>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='이메일' />
        </div>
        <div className='inputContainer'>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호' />
        </div>
        <div className='inputContainer'>
          <input type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder='비밀번호 확인' />
        </div>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}
