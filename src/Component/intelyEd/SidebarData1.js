import React from 'react';
import iEdDashboard from '../../assets/Icons/iEdDashboard.png'
import iEdClass from '../../assets/Icons/iEdClass.png'
import iEdTeam from '../../assets/Icons/iEdTeam.png'
import iEdSchool from '../../assets/Icons/iEdSchool.png'
import iEdResource from '../../assets/Icons/iEdResource.png'
import iEdAssessment from '../../assets/Icons/iEdAssessment.png'
import iEdRubrics from '../../assets/Icons/iEdRubrics.png'
import iEdReports from '../../assets/Icons/iEdReports.png'
import iEdVAM from '../../assets/Icons/iEdVAM.png'
import iEdStandard from '../../assets/Icons/iEdStandard.png'
export const SidebarData1 = [
  {
    path: '/Dashboard',
    icon: <img src={iEdDashboard}/>,
    cName: 'nav-Dashboard1'
  },
  {
    path: '/MyClasses',
    icon: <img src={iEdClass}/>,
    cName: 'nav-Classes1'
  },
  {
    path: '/',
    icon: <img src={iEdTeam}/>,
    cName: 'nav-Teams1'
  },
  {
    path: '/',
    icon:<img src={iEdSchool}/>,
    cName: 'nav-School1'
  },
  {
    path: '/',
    icon:<img src={iEdResource}/>,
    cName: 'nav-Resources1'
  },
  {
    path: '/',
    icon: <img src={iEdAssessment}/>,
    cName: 'nav-Assessments1'
  }
  ,
  {
    path: '/',
    icon: <img src={iEdRubrics}/>,
    cName: 'nav-Rubrics1'
  }
  ,
  {
    path: '/',
    icon: <img src={iEdReports}/>,
    cName: 'nav-Reports1'
  }
  ,
  {
    path: '/',
    icon: <img src={iEdVAM}/>,
    cName: 'nav-Map1'
  }
  ,
  {
    path: '/',
    icon: <img src={iEdStandard}/>,
    cName: 'nav-Standards1'
  }
];