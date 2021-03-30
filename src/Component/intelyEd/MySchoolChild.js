import React from 'react'
import '../Styles/myschool.css'
import '../Styles/Charts.css'
import iEdSchool2 from '../../assets/Icons/iEdSchool2.png'

import iEdSchoolStandard from '../../assets/Icons/iEdSchoolStandard.png'
import iEdMapSchool from '../../assets/Icons/iEdMapSchool.png'
import iEdGrouppurple from '../../assets/Icons/iEdGrouppurple.png'
import {HorizontalBar} from 'react-chartjs-2';

function MySchoolChild(props) {
    const state = {
        labels: ['Standard 01', 'Standard 02', 'Standard 03', 'Standard 04', 'Standard 05'],
        datasets: [
          {
            label: 'Standards',
            backgroundColor: '#E07CD0',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            hoverBackgroundColor: '#E07CD0',
            hoverBorderColor: '#FFFFFF',
            fontFamily:'Roboto',
            data: [50, 40, 35, 30, 20,0,100]
          }
        ]
    }
    return (
        <div        className={props.sidebar ? 'myschools' : 'myschools-expand'}>
       <li className="myschools-head-li">
               <img src={iEdSchool2} className="iEdSchool2"/>
               <span className="myschools-title">My School</span>
               <span className="myschools-learnmore"> <a href="/" className="anchor-li">LEARN MORE</a></span>
           </li>
           
           <div className="myschools-span-div">
               <span className="myschools-span">Mastery Highlights</span>
           </div>
          <div className={props.sidebar ? 'myschools-bar-div' : 'myschools-bar-div-expand'}>
          <HorizontalBar data={state} />
          </div>
          <div className="myschools-Btn-row1">
                <div className="myschools-Btn1">
                    <img src={iEdSchoolStandard} className="iEdSchoolStandard" />
                    <span className="myschools-Btn1-span" >Standards</span>
                    <img src={iEdGrouppurple} className="iEdGrouppurple" />
                </div>
                <div className="myschools-Btn2" >
                    <img src={iEdMapSchool} className="iEdSchoolStandard" />
                    <span className="myschools-Btn1-span1" >Vertical Alignment Map</span>
                    <img src={iEdGrouppurple} className="iEdGrouppurple" />
                </div>
            </div>

        </div>
    )
    
}

export default MySchoolChild
