import React from 'react'
import iEdComingSoon from '../../assets/Icons/iEdComingSoon.png'

import iEdArrowPurple from '../../assets/Icons/iEdArrowPurple.png'
function MyNotifications() {
    return (
        <>
            <li className="Notetitle">
                 <img src={iEdComingSoon} className="iEdComingSoon1"/>
                 <span className="notespan">Coming Soon</span>
                 <span className="notespan1" >20 </span>
                </li>
                <li className="Expand-Note">
                   <ul >
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-style">Lorem ipsum</li>
                     <li className="note-li-viewall"> <a href="/" className="note-li-viewall">View All Notifications <img src={iEdArrowPurple} className="iEdArrow"/></a></li>
                   </ul>
                </li> 
        </>
    )
}

export default MyNotifications
