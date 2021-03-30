import React,{useState} from 'react'
import MyClassesChild from '../intelyEd/MyClassesChild';
import MyTeamsChild from '../intelyEd/MyTeamsChild';
import MySchoolChild from '../intelyEd/MySchoolChild';
import MyResourcesChild from '../intelyEd/MyResourcesChild';
import '../Styles/intelyEd.css'
import '../Styles/Calender.css'
function Dashboard(props) {
    return (
        <>
             <div className='Charts'>
        <MyClassesChild sidebar={props.sidebar}
          showSidebar={props.showSidebar} />
        <MyTeamsChild sidebar={props.sidebar}
          showSidebar={props.showSidebar} />
      </div>

      <div className='Charts1'>
        <MySchoolChild sidebar={props.sidebar}
          showSidebar={props.showSidebar} />
        <MyResourcesChild sidebar={props.sidebar}
          showSidebar={props.showSidebar} />
      </div>
        </>
    )
}

export default Dashboard
