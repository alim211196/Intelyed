import React, { useState,useEffect } from 'react'
import '../Styles/MyClasses.css'
import '../Styles/Charts.css'
import iEdClass2 from '../../assets/Icons/iEdClass2.png'
import { Bar } from 'react-chartjs-2';
import { MyClassesProgressbar } from './MyClassesProgressbar';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { MyClassDropDown } from './MyClassDropDown';

import iEdClassBooks from '../../assets/Icons/iEdClassBooks.png'

import iEdClassReports from '../../assets/Icons/iEdClassReports.png'

import iEdGroupGreen from '../../assets/Icons/iEdGroupGreen.png'

import iEdArrowBlue from '../../assets/Icons/iEdArrowBlue.png'

import uparrow from '../../assets/Icons/uparrow.png'

import downarrow from '../../assets/Icons/downarrow.png'

import Dropdowncorrect from '../../assets/Icons/Dropdowncorrect.png'
import CanvasJSReact from '../../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyClassesChild(props) {

    const [MyArrows, setMyArrows] = useState(false);
    const showArrow = () => setMyArrows(!MyArrows);
    const [Ischecked, setIschecked] = useState([]);
    const [filteredIschecked, setFilteredIschecked] = useState("");
  

    const options = {
        animationEnabled: true,
              data: [
              {
                  type: "stackedColumn",
                  color: "#EB5A5A",
                  dataPoints: [
                      { label: "K.CC.A.1", y: 1 },
                      { label: "K.CC.C.7", y: 3 },
                      { label: "K.NBT.A.1", y: 4 },
                      { label: "K.G.A.2", y: 1 },
                      { label: "K.OA.A.5", y: 3 }
                     
                  ]
              },
              {
                  type: "stackedColumn",
                  color: "#FF8C5A",
                  dataPoints: [
                      { label: "K.CC.A.1", y: 3 },
                      { label: "K.CC.C.7", y: 2 },
                      { label: "K.NBT.A.1", y: 8 },
                      { label: "K.G.A.2", y: 2 },
                      { label: "K.OA.A.5", y: 8 }
                  ]
              },
              {
                  type: "stackedColumn",
                  color: "#F8DE56",
                  
                  dataPoints: [
                      { label: "K.CC.A.1", y: 7 },
                      { label: "K.CC.C.7", y: 10 },
                      { label: "K.NBT.A.1", y: 3 },
                      { label: "K.G.A.2", y: 8 },
                      { label: "K.OA.A.5", y: 12 }
              ]
              },
              
              {
              
                  type: "stackedColumn",
                  color: "#8FEC1A",
                  dataPoints: [
                      { label: "K.CC.A.1", y: 8 },
                      { label: "K.CC.C.7", y: 8  },
                      { label: "K.NBT.A.1", y: 10},
                      { label: "K.G.A.2", y: 3 },
                      { label: "K.OA.A.5", y: 9 }
              ]
              },
              {
                  type: "stackedColumn",
                  color: "#71BC4E",
                  dataPoints: [
                      { label: "K.CC.A.1", y: 10 },
                      { label: "K.CC.C.7", y: 4 },
                      { label: "K.NBT.A.1", y: 9},
                      { label: "K.G.A.2", y: 13 },
                      { label: "K.OA.A.5", y: 9 }
                  ]
              }]
          }


       const handleChange = (e,value)=>{
        if (e.target.checked) {
            setIschecked([...Ischecked, e.target.value]);
    
          } else {
            setIschecked(Ischecked.filter((id) => id !== e.target.value));
          }
        };
        useEffect(() => {
            if (Ischecked.length === 0) {
              setFilteredIschecked("");
            } else {
              setFilteredIschecked(Ischecked.join(","));
            }
           console.log(Ischecked);
          }, [Ischecked]);
         

    const ClearAll = () => {

     setIschecked([]) 
     
 
    }

    const ViewSelected = () => {
             
        console.log(Ischecked)
       
    }

  
    return (
        // <div className={props.LearnMore ? 'myclass-super-expand ': null}>
        <div className={props.sidebar ? 'myclass' : 'myclass-expand'}>
            <li className="MyClasses-head-li">
                <img src={iEdClass2} className="iEdClass2" />
                <span className="myclass-title">My Classes</span>


                <span>
                    {
                        Ischecked.length=== 0 ?
                            <button className="myclass-dropdown-btn" onClick={() => { showArrow(true) }}>

                                ELA10 M-F 2:30 - 3:45 {MyArrows ? <img className="Myclass-arrow-img" src={uparrow} /> : <img className="Myclass-arrow-img" src={downarrow} />} </button>
                            :
                            <button className="myclass-dropdown-btn" onClick={() => { showArrow(true) }}>

                                {Ischecked[0]} {MyArrows ? <img className="Myclass-arrow-img" src={uparrow} /> : <img className="Myclass-arrow-img" src={downarrow} />} </button>
                    }


                    {
                        MyArrows ?
                            <span>
                                <img className="MyClassupperarrow" src={uparrow} />


                
                                <ul className="myclass-dropdown-ul">
                                    {
                                        MyClassDropDown.map((item) => {
                                            return (<li className="myclass-dropdown-li" key={item.id}>
                                            
                                                <label>
                                                    <input type="checkbox" checked={Ischecked.findIndex(para=>para==item.val)>-1 ? true : false}  id={item.id} value={item.val}  name={item.name}  onChange={handleChange} className="myclass-dropdown"/>

                                                 <img src={Dropdowncorrect} className="MyClass-Dropdowncorrect" />
                                                    <span className="myclass-mainspan">
                                                        <span className="myclassspan1"> {item.name}</span> <span className="myclassspan2">{item.time}</span>
                                                    </span>
                                                </label>
                                   

                                            </li>)

                                        })
                                    }
                                    <div className="dropdowndiv">
                                        <button className="myclass-clearspan" onClick={ClearAll} disabled={Ischecked.length==0}>Clear</button>
                                        <button className="myclass-viewselected"   onClick={ViewSelected} disabled={Ischecked.length==0}>View Selected</button>
                                    </div>



                                </ul>
                         
                            
                            </span>
                            :
                            null

                    }


                </span>
                {
                    props.LearnMore ?
                        <span className="myclass-learnmore" onClick={props.showLearnMore}> LEARN MORE</span>
                        :
                        <span className="myclass-learnmore" onClick={() => { props.showLearnMore(false) }}> LEARN MORE</span>
                }


            </li>
      
      
            <div className={props.sidebar ? 'myclasses-bar-div' : 'myclasses-bar-div-expand'}>
             
                 <CanvasJSChart options = {options} 
				//  onRef={ref => this.chart = ref}
			/>
            </div>

            <div className="Myclasses-span-div">
                <span className="Myclasses-span1">
                    Previous Assessments
           </span>
                <span className="Myclasses-span2">
                    <a href="/" className="Myclasses-span2"> More Details <img src={iEdArrowBlue} className="iEdArrowBlue" /></a>
                </span>
            </div>


            {
                MyClassesProgressbar.map((item) => {
                    return (
                        <ul className="Myclasses-progress1-main" >
                            <li className="myclasses-text" >{item.text}</li>
                            <li className={props.sidebar ? "myclasses-progress" : "myclasses-progress-expand"} >
                                <ProgressBar className="myprogress" now={item.progress} />
                            </li>
                            <li className="myclasses-percentage">{item.percentage}</li>
                        </ul>
                    )
                })
            }





            <div className="myclasses-Btn-row1">
                <div className="myclasses-Btn1">
                    <img src={iEdClassBooks} className="iEdClassBooks" />
                    <span className="myclasses-Btn1-span" >My Grade Book</span>
                    <img src={iEdGroupGreen} className="iEdGroupGreen" />
                </div>
                <div className="myclasses-Btn2" >
                    <img src={iEdClassReports} className="iEdClassBooks" />
                    <span className="myclasses-Btn1-span" >Reports</span>
                    <img src={iEdGroupGreen} className="iEdGroupGreen" />
                </div>
            </div>




        </div>
        // </div>

    )
}

export default MyClassesChild


   
    
   
    