import React from 'react'
import IntelyEd from '../../assets/Images/iEd.png'
import IntelyEdSearch from '../../assets/Icons/iEdSearch.png'
import IntelyEdZoom from '../../assets/Icons/iEdcompress-arrows.png'
import iEdexpandarrows from '../../assets/Icons/iEdexpand-arrows.png'
import IntelyEdSettings from '../../assets/Icons/iEdSettings.png'
import '../Styles/Header.css'
function IEdHeader(props) {
    return (
   <>
 <div className="maindiv">
   <div className="imgdiv">
     <a href="/Dashboard"><img src={IntelyEd} alt="IntelyEd" className="IntelyEd"/></a>
     <div className="mixeddiv">
     <span className="MySpan"> <input className="searchinput" type="text" placeholder="Search" />
     <img src={IntelyEdSearch} className="search"/></span>
<span className="MySpan1">
  {
    props.sidebar ?
<img src={IntelyEdZoom} alt="IntelyEdZoom" className="IntelyEdZoom" onClick={props.showSidebar}/> :
<img src={iEdexpandarrows} alt="iEdexpandarrows" className="IntelyEdZoom" onClick={()=>{props.showSidebar(false)}}/>
  }
   <a href="/"><img src={IntelyEdSettings} alt="IntelyEdSettings" className="IntelyEdSettings"/></a>
     
</span>
     </div>
 
    
   </div>
 </div>


{/* <div className="container-fluid">
<div className="row mainrow">
      <div className="col-6  div1 " > <a href="/Dashboard"><img src={IntelyEd} alt="IntelyEd" className="IntelyEd"/></a></div>
      <div className="col-4 div2"> <span className="MySpan"> <input className="searchinput" type="text" placeholder="Search" />
     <img src={IntelyEdSearch} className="search"/></span></div>
        <div className="col-1 div3"> {
    props.sidebar ?
<img src={IntelyEdZoom} alt="IntelyEdZoom" className="IntelyEdZoom" onClick={props.showSidebar}/> :
<img src={iEdexpandarrows} alt="iEdexpandarrows" className="IntelyEdZoom" onClick={()=>{props.showSidebar(false)}}/>
  }
  </div>
   <div className="col-1 div4">
   <a href="/"><img src={IntelyEdSettings} alt="IntelyEdSettings" className="IntelyEdSettings"/></a>
   </div>
    </div>

    </div>
  */}
  

   </>
    )
}
export default IEdHeader
