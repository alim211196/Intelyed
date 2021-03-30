import React,{useState} from 'react'
import '../Styles/MyTeams.css'
import '../Styles/Charts.css'
import iEdMyTeam from '../../assets/Icons/iEdMyTeam.png'
import iEdTeamPlans from '../../assets/Icons/iEdTeamPlans.png'
import { MyTeamsDropDown } from './MyTeamsDropDown';
import iEdTeamMinutes from '../../assets/Icons/iEdTeamMinutes.png'

import iEdTeamReports from '../../assets/Icons/iEdTeamReports.png'
import iEdCalenderTeam from '../../assets/Icons/iEdCalenderTeam.png'

import iEdGroupRed from '../../assets/Icons/iEdGroupRed.svg'
import uparrow from '../../assets/Icons/uparrow.png'

import downarrow from '../../assets/Icons/downarrow.png'
import { Doughnut } from 'react-chartjs-2';
import Dropdowncorrect from '../../assets/Icons/Dropdowncorrect.png'
function MyTeamsChild(props) {

  const [MyArrows, setMyArrows] = useState(false);
  const showArrow = () => setMyArrows(!MyArrows);
  const [checked, setchecked] = useState('');
    const state = {
      labels: ['Assessment 01', 'Assessment 01'],
        datasets: [
          {
            backgroundColor: [
            
              '#A796EB',
              '#51047B'
            ],
            hoverBackgroundColor: [
              '#A796EB',
              '#51047B'
           
            ],
            hoverBorderColor : [
              '#FFFFFF',
              '#FFFFFF'
            ],
            data: [80, 20]
          }
        ],
    }
    const state1 = {
      labels: ['Assessment 02', 'Assessment 02'],
      datasets: [
        {
          backgroundColor: [
            '#F28080',
            '#FF8F27'
          ],
          hoverBackgroundColor: [
          '#F28080',
          '#FF8F27'
          ],
          hoverBorderColor : [
            '#FFFFFF',
            '#FFFFFF'
          ],
          data: [30, 70]
        }
      ],
  }
    const state2 = {
      labels: ['Assessment 03', 'Assessment 03'],
      datasets: [
        {
          backgroundColor: [
         
            '#E07CD0',
            '#F5D114'
          ],
          hoverBackgroundColor: [
          '#E07CD0',
          '#F5D114'
          ],
          hoverBorderColor : [
            '#FFFFFF',
            '#FFFFFF'
          ],
          data: [5, 95]
        }
      ],
  }


  const clearAll=()=>{
    setchecked('');

  }

  const ViewSelected=()=>{
  
 }
    return (
        <div  className={props.sidebar ? 'myteams' : 'myteams-expand'}>
               <li className="myteams-head-li">
               <img src={iEdMyTeam} className="iEdMyTeam"/>
               <span className="myteams-title">My Teams</span>
               
               <span>

                 {
                   checked=='' ?
                   <button className="myteams-dropdown-btn" onClick={()=>{showArrow(true)}}>
                   My Super Team 01
                    {MyArrows ? <img className="Myclass-arrow-img"  src={uparrow}/> : <img className="Myclass-arrow-img"  src={downarrow}/> } </button>
                    :
                    <button className="myteams-dropdown-btn" onClick={()=>{showArrow(true)}}>
                    {checked}
                     {MyArrows ? <img className="Myclass-arrow-img"  src={uparrow}/> : <img className="Myclass-arrow-img"  src={downarrow}/> } </button>
                 }
                    
                 
                         {
                       MyArrows ?
                       <span>
                            <img className="Myteamsupperarrow" src={uparrow}/>
                       <ul className="myteams-dropdown-ul">
                         {

                           MyTeamsDropDown.map((item)=>{
                             return( <li className="myteams-dropdown-li" key={item.id}>
                         <label>
                             <input type="checkbox" id={item.id} className="myteams-dropdown"  checked={checked===item.val} onClick={()=>{setchecked(item.val)}} value={item.val} name="Myteams-dropdown"/>
                           <img src={Dropdowncorrect} className="MyTeams-Dropdowncorrect"/>
                                 <span className="myteam-mainspan"> 
                                 <span className="myteamspan1">{item.name}</span>
                                      </span>
                                      </label>
                             </li>

                             )
                           }) 
                         }
                      
                        <div className="dropdowndiv">
                            <button className="myteams-clearspan" onClick={clearAll} disabled={!checked}>Clear</button>
                            <button className="myteams-viewselected"  onClick={ViewSelected} disabled={!checked}>View Selected</button>
                        </div>
                     
    
                       
                       </ul>
                       </span>
                    
                       :
        null

                         }


                  </span>

               <span className="myteams-learnmore"> <a href="/" className="anchor-li">LEARN MORE</a></span>
           </li>
           <div>    <span className="Myteams-span1">
             Most Recent Assessments 
           </span>
           <span className="Myteams-span2">
                Master Overview: March 3,2921
           </span></div>
       

           <div className="piechartmain-div">
               <div className={props.sidebar ? 'piechart1-div' : 'piechart1-div-expand'}>
               <Doughnut
   data={state}
   options={{
     legend:{
       display:false,
       position:'right'
     }
   }}
 />
                 <h1 className="sample-span"> Sample</h1>
                 <h1 className="Assessment-span"> Assessment 01</h1>
               </div>
               <div className={props.sidebar ? 'piechart2-div' : 'piechart2-div-expand'} >
               <Doughnut
          data={state1}
          options={{
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
               <h1 className="sample-span"> Sample</h1>
                 <h1 className="Assessment-span"> Assessment 02</h1>
               </div>
               <div className={props.sidebar ? 'piechart3-div' : 'piechart3-div-expand'} >
               <Doughnut
          data={state2}
          options={{
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
               <h1 className="sample-span"> Sample</h1>
                 <h1 className="Assessment-span"> Assessment 03</h1>
               </div> 
           </div>



           <div className="MyTeams-Btn-row1">
                 <div className="MyTeams-Btn1">
                   <img src={iEdTeamPlans} className="iEdTeamPlans"/>
                   <span className="MyTeams-Btn1-span" >Standard Planning</span>
                   <img src={iEdGroupRed} className="iEdGroupred" />
                 </div>
                 <div className="MyTeams-Btn2" >
                 <img src={iEdTeamMinutes} className="iEdTeamPlans"/>
                   <span className="MyTeams-Btn1-span" >PLC Minutes</span>
                   <img src={iEdGroupRed} className="iEdGroupred" />
                 </div>
             </div>
               <div className="MyTeams-Btn-row2">
               <div className="MyTeams-Btn3">
                   <img src={iEdTeamReports} className="iEdTeamPlans"/>
                   <span className="MyTeams-Btn1-span" >Reports</span>
                   <img src={iEdGroupRed} className="iEdGroupred" />
                 </div>
                 <div className="MyTeams-Btn4" >
                 <img src={iEdCalenderTeam} className="iEdTeamPlans"/>
                   <span className="MyTeams-Btn1-span" >Calender</span>
                   <img src={iEdGroupRed} className="iEdGroupred" />
                 </div>

               </div>

        </div>
    )
}

export default MyTeamsChild
