import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"


export const Register = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My ACcount</h1>
            </div>
          </div>

          <form>
            <span>이메일 주소</span>
            <input type='text' required />
            <span>아이디 * </span>
            <input type='text' required />
            <span>비밀번호 * </span>
            <input type='text' required />
            <span>비밀번호 확인 * </span>
            <input type='text' required />
            <Link to='/login'>
          <button className='button'>등록</button>
        </Link>
          </form>
        </div>
      </section>
    </>
  )
}
