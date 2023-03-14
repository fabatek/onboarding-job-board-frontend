import React from 'react'
import './jobticket.scss'
import { JobModal } from '../../type/type'
type Props = {
   
}

const JobTicket = (props: Props) => {
   
  return (
    <div className='job-ticket'>
        <div className='job-ticket__left'>
            <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/01104813/1268-768x591.png' alt="234" />
        </div>
        <div className='job-ticket__center'> 
            <h2>Mid/Senior Fullstack .Net Developer (Angular, ReactJS)</h2>
            <div className='job-ticket__center-more'><span>$</span>
             <p>Sign in to view <span><i className="fa-sharp fa-solid fa-caret-right"></i></span></p>
             </div>
            <ul className='job-ticket__center__list-tag'>
                <li>c++</li>
                <li>html</li>
            </ul>
        </div>
        <div className='job-ticket__right'>
            <span className='job-ticket__right__status'>hot</span>
            <p className='job-ticket__right__address'>Ho Chi Minh</p>
            <p className='job-ticket__right__time'>3h</p>
        </div>
    </div>
  )
}

export default JobTicket