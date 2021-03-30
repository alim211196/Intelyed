import React,{useState} from 'react'
import Calendar from 'react-calendar'
import iEdCalendar from '../../assets/Icons/iEdCalendar.png'
function MyCalender() {
    const [value, onChange] = useState(new Date());
    return (
        <>
              <li className="Caltitle">
                 <img src={iEdCalendar} className="iEdCalendar1"/>
                 <span className="calspan">Calender</span>
                </li>
              <li className="Expand-Cal">
              <Calendar
        onChange={onChange}
        value={value}
      />
         </li>
        </>
    )
}

export default MyCalender
