import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"
import { CustomerService } from "./customersupport"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                      <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>배근화</h4>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>내 계정</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>주문내역</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>찜한 상품</h4>
                </button>  
                  <Link to='/customersupport'>
                  <button className='box' onClick={CustomerService}>                 
                <GrHelp className='icon' />
                  <h4>고객센터</h4>
                </button>
                </Link>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>로그아웃</h4>
                </button>
                
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}