import React from 'react'
import iEdTasks from '../../assets/Icons/iEdTasks.png'
import iEdArrowSkyBlue from '../../assets/Icons/iEdArrowSkyBlue.png'
function MyTasks() {
    return (
        <>
               <li className="Tasktitle">
                 <img src={iEdTasks} className="iEdTasks1"/>
                 <span className="calspan">Tasks</span>
                 <span className="calspan1" >Today,Mar 3 </span>
                </li>
                <li className="Expand-Task">
                   <ul >
                     <li className="task-li-style">Task 1 goes in here</li>
                     <li className="task-li-style">Task 2 goes in here</li>
                     <li className="task-li-style">Task 3 goes in here</li>
                     <li className="task-li-style">Task 4 goes in here</li>
                     <li className="task-li-style">Task 5 goes in here</li>
                     <li className="task-li-style">Task 6 goes in here</li>
                     <li className="task-li-style">Task 7 goes in here</li>
                     <li className="task-li-viewall"> <a href="/" className="task-li-viewall">View All Task <img src={iEdArrowSkyBlue} className="iEdArrow"/></a></li>
                   </ul>
                </li>
        </>
    )
}

export default MyTasks
