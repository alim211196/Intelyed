import React from 'react'
import '../Styles/MyResource.css'
import '../Styles/Charts.css'
import iEdbooks from '../../assets/Icons/iEdbooks.png'
import iEdMyAssessments from '../../assets/Icons/iEdMyAssessments.png'
import iEdRubricsMyResource from '../../assets/Icons/iEdRubricsMyResource.png'
import iEdAssLibrary from '../../assets/Icons/iEdAssLibrary.png'
import iEdGroupBlue from '../../assets/Icons/iEdGroupBlue.png'
import iEdRubricsResource from '../../assets/Icons/iEdRubricsResource.png'
import iEdAssStrategies from '../../assets/Icons/iEdAssStrategies.png'
import iEdUploadResource from '../../assets/Icons/iEdUploadResource.png'

import iEdArrowBlue from '../../assets/Icons/iEdArrowBlue.png'
function MyResourcesChild(props) {
    return (
        <div className={props.sidebar ? 'myresources' : 'myresources-expand'}>
        <li className="myresources-head-li">
               <img src={iEdbooks} className="iEdbooks"/>
               <span className="myresources-title">My Resources</span>
               <span className="myresources-learnmore"> <a href="/" className="anchor-li">LEARN MORE</a></span>
           
           </li>
             
             <div className="MyResource-maindiv">



                 <div className="MyAssessments-div">
                   <u>
                       <li className="MyAssessments-main-li" > 
                       <img src={iEdMyAssessments} className="iEdMyAssessments"/>
                       <span className="MyAssessments-main-span">My Assessments</span>
                       </li>
                       <li className="MyAssessments-main-li1">
                       <img src={iEdMyAssessments} className="iEdMyAssessments1"/>
                       <span className="MyAssessments-main-span1">Assessment 1</span>
                       </li>
                       <li className="MyAssessments-main-li1">
                       <img src={iEdMyAssessments} className="iEdMyAssessments1"/>
                       <span className="MyAssessments-main-span1">Assessment 2</span>
                       </li>
                       <li className="MyAssessments-main-li1">
                       <img src={iEdMyAssessments} className="iEdMyAssessments1"/>
                       <span className="MyAssessments-main-span1">Assessment 3</span>
                       </li>
                       <li className="MyAssessments-main-li1">
                       <img src={iEdMyAssessments} className="iEdMyAssessments1"/>
                       <span className="MyAssessments-main-span1">Assessment 4</span>
                       </li>
                       <li className="MyAssessments-main-li1">
                       <img src={iEdMyAssessments} className="iEdMyAssessments1"/>
                       <span className="MyAssessments-main-span1">Assessment 5</span>
                       </li>
                       <li className="MyAssessments-main-li2">
                       <span className="MyAssessments-main-span2"> <a href="/" className="Myclasses-span2"> View all my assessments <img src={iEdArrowBlue} className="iEdArrowBlue"/> </a></span>
                       </li>
                   </u>
                 </div>
                 <div className="MyRubrics-div">
                 <u>
                       <li className="MyRubrics-main-li" > 
                       <img src={iEdRubricsMyResource} className="iEdRubrics"/>
                       <span className="MyRubrics-main-span">My Rubrics</span>
                       </li>
                       <li className="MyRubrics-main-li1">
                       <img src={iEdRubricsMyResource} className="iEdRubrics1"/>
                       <span className="MyRubrics-main-span1">Rubric 1</span>
                       </li>
                       <li className="MyRubrics-main-li1">
                       <img src={iEdRubricsMyResource} className="iEdRubrics1"/>
                       <span className="MyRubrics-main-span1">Rubric 2</span>
                       </li>
                       <li className="MyRubrics-main-li1">
                       <img src={iEdRubricsMyResource} className="iEdRubrics1"/>
                       <span className="MyRubrics-main-span1">Rubric 3</span>
                       </li>
                       <li className="MyRubrics-main-li1">
                       <img src={iEdRubricsMyResource} className="iEdRubrics1"/>
                       <span className="MyRubrics-main-span1">Rubric 4</span>
                       </li>
                       <li className="MyRubrics-main-li1">
                       <img src={iEdRubricsMyResource} className="iEdRubrics1"/>
                       <span className="MyRubrics-main-span1">Rubric 5</span>
                       </li>
                       <li className="MyRubrics-main-li2">
                       <span className="MyRubrics-main-span2"><a href="/" className="Myclasses-span2"> View all my rubrics <img src={iEdArrowBlue} className="iEdArrowBlue"/></a></span>
                       </li>
                   </u>
                 </div>

             </div>





             <div className="MyResource-Btn-row1">
                 <div className="MyResource-Btn1">
                   <img src={iEdAssLibrary} className="iEdAssLibrary"/>
                   <span className="MyResource-Btn1-span" >Assessment Library</span>
                   <img src={iEdGroupBlue} className="iEdGroupBlue" />
                 </div>
                 <div className="MyResource-Btn2" >
                 <img src={iEdRubricsResource} className="iEdAssLibrary"/>
                   <span className="MyResource-Btn1-span" >Rubrics</span>
                   <img src={iEdGroupBlue} className="iEdGroupBlue" />
                 </div>
             </div>
               <div className="MyResource-Btn-row2">
               <div className="MyResource-Btn3">
                   <img src={iEdAssStrategies} className="iEdAssLibrary"/>
                   <span className="MyResource-Btn1-span" >Strategies</span>
                   <img src={iEdGroupBlue} className="iEdGroupBlue" />
                 </div>
                 <div className="MyResource-Btn4" >
                 <img src={iEdUploadResource} className="iEdAssLibrary"/>
                   <span className="MyResource-Btn1-span" >Upload Assessments</span>
                   <img src={iEdGroupBlue} className="iEdGroupBlue" />
                 </div>

               </div>
        </div>
    
    )
}

export default MyResourcesChild
