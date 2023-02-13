import React, { useState } from 'react'
import "./customersupport.css"

export const CustomerService = () => {
  const [refund, setrefund] = useState(false)
  const [faq, setfaq] = useState(false)

  const handlerefund = () => {
    setrefund(true)
  }

  const handleFaqOpen = () => {
    setfaq(true)
  }

  const handleFaqClose = () => {
    setfaq(false)
  }

  return (
    <>
      <button onClick={handlerefund}>환불 요청</button>
      {refund && (
        <div className='refund-request-form'>
          <h2>환불</h2>
          <form>
            <label htmlFor='orderNumber'>
              주문 번호:
              <input type='text' id='orderNumber' name='orderNumber' />
            </label>
            <label htmlFor='reason'>
              환불 요청 사유:
              <textarea id='reason' name='reason' />
            </label>
            <button type='submit'>제출</button>
            <button type='button' onClick={handlerefund}>
              닫기
            </button>
          </form>
        </div>
      )}
      <button onClick={handleFaqOpen}>FAQ</button>
      {faq && (
        <div className='faq'>
          <h2>FAQ</h2>
          <ul>
            <li>
              <h3>환불 정책에 대해 알고 싶습니다</h3>
              <p>
                구매 후 7일 이내, 파손 없는 상품에 관해 환불이 가능합니다</p>
            </li>
            <li>
              <h3>지난 주문을 조회하는 방법은 무엇인가요?</h3>
              <p>
                운송장을 통해서 조회하실 수 있습니다
              </p>
            </li>
            <li>
              <h3>물품이 파손되었으면 어떡해야 하나요?</h3>
              <p>
                즉시 연락 주시면 검수 후 환불 및 반품 절차 진행해 드리겠습니다
              </p>
            </li>
          </ul>
          <button type='button' onClick={handleFaqClose}>
            닫기
          </button>
        </div>
      )}
    </>
  )
}

export default CustomerService
