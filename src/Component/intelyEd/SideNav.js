import React from 'react'
import '../Styles/intelyEd.css'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SidebarData1 } from './SidebarData1';
import IntelyEdusericon from '../../assets/Icons/userIcon.png'
import iEdbackarrow from '../../assets/Icons/iEdbackarrow.png'
import iEduparrow from '../../assets/Icons/iEduparrow.png'
import iEdupload from '../../assets/Icons/iEdupload.png'
import iEdLogout from '../../assets/Icons/iEdLogout.png'
import MyCalender from './MyCalender';
import MyTasks from './MyTasks';
import MyNotifications from './MyNotifications';
import '../Styles/IntelyEd1.css'

import iEdCalendar from '../../assets/Icons/iEdCalendar.png'
import iEdTasks from '../../assets/Icons/iEdTasks.png'
import iEdComingSoon from '../../assets/Icons/iEdComingSoon.png'

function SideNav(props) {

  
    return (
       <>
           {
        props.sidebar ? (
          <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
          <li className= 'navbar-toggle'>
             <img src={IntelyEdusericon} className="IntelyEdusericon"/>
             <span className="containerspan"><p id="p1">Welcome</p>
             <p id="p2">Jane Doe</p></span>
             {
               !props.arrow ?
               <img  src={iEdbackarrow} className="iEdbackarrow" onClick={()=>{props.showArrow(true)}} />
               
               :
               <img  src={iEduparrow} className="iEduparrow" onClick={()=>{props.showArrow(false)}}/>
             }
           
            </li>
            {
              props.arrow ?
              <div className="userdetails-div">
                 <li className="user-details-li">
                <p>Details</p>
              </li>
              <li className="user-details-li">
                <p>Details</p>
              </li>
              <li className="user-details-li">
                <p>Details</p>
              </li>
              </div>
              : null
            }
          
          
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    
                    <span className="mytitlespan">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="btn-upload">
            <button type="submit" className="uploadRes">
<img src={iEdupload} alt="iEdupload" className="iEdupload"/>
   Upload Resource
</button>
            </li>
            <li className="btnlogout">
              <img src={iEdLogout} alt="iEdLogout" className="iEdLogout"/>
              <a href="/" className="logout">Logout</a>
            </li>
          </ul>
        </nav>
        )
        :
        (
          <nav className= 'nav-menu-new'>
             <ul className='nav-menu-items1'>
          <li className= 'navbar-toggle1'>
             <img src={IntelyEdusericon} className="IntelyEdusericon1"/>
             {
               !props.arrow ?
               <img  src={iEdbackarrow} className="iEdbackarrow1" onClick={()=>{props.showArrow(true)}} />
               
               :
               <img  src={iEduparrow} className="iEduparrow1" onClick={()=>{props.showArrow(false)}}/>
             }
           
            </li>
            {
              props.arrow ?
              <div>
              <li className="user-details-li1">
                <p>Details</p>
              </li>
              <li className="user-details-li1">
                <p>Details</p>
              </li>
              <li className="user-details-li1">
                <p>Details</p>
              </li>
              </div>
              : null
            }
             {SidebarData1.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
            <li className="btn-upload1">
            <button type="submit" className="uploadRes1">
<img src={iEdupload} alt="iEdupload" className="iEdupload1"/>
</button>
            </li>
            <li className="btnlogout1">
              <a href="/"> <img src={iEdLogout} alt="iEdLogout"  className="iEdLogout1"/></a>
            </li>
          </ul>
            </nav>
         )
      }
        
     
        {
          props.sidebar ?
          (
            <nav className={props.sidebar ? 'rigtnav-menu-active':'rigtnav-menu'}>
        
       
            <ul className='nav-right-menu-items'>
              <MyCalender />
              <MyTasks />
              <MyNotifications />
            </ul>
            </nav>
          ):
          (
            <nav className='rigtnav-menu-new'>
<ul className="nav-right-menu-items">
               <a href="/"><li className="Calender-li">
                  <img src={iEdCalendar} className="iEdCalendar" />
                </li></a>  
                <a href="/"> <li className="Task-li">
                  <img src={iEdTasks} className="iEdTasks" />
                </li></a> 
                <a href="/"> <li className="ComingSoon-li">
                <span className="comingsoonspan">20</span>
                  <img src={iEdComingSoon} className="iEdComingSoon" />
                  
                </li></a> 
              </ul>
              </nav>

          )
        }
       
     
      
              
          
 

       
         
  
       </>
    )
}

export default SideNav
