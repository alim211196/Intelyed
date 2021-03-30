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
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <img src={iEdDashboard}/>,
    cName: 'nav-Dashboard'
  },
  {
    title: 'My Classes',
    path: '/',
    icon: <img src={iEdClass}/>,
    cName: 'nav-Classes'
  },
  {
    title: 'My Teams',
    path: '/',
    icon: <img src={iEdTeam}/>,
    cName: 'nav-Teams'
  },
  {
    title: 'My School',
    path: '/',
    icon:<img src={iEdSchool}/>,
    cName: 'nav-School'
  },
  {
    title: 'My Resources',
    path: '/',
    icon:<img src={iEdResource}/>,
    cName: 'nav-Resources'
  },
  {
    title: 'Assessments',
    path: '/',
    icon: <img src={iEdAssessment}/>,
    cName: 'nav-Assessments'
  }
  ,
  {
    title: 'Rubrics',
    path: '/',
    icon: <img src={iEdRubrics}/>,
    cName: 'nav-Rubrics'
  }
  ,
  {
    title: 'Reports',
    path: '/',
    icon: <img src={iEdReports}/>,
    cName: 'nav-Reports'
  }
  ,
  {
    title: 'Vertical Alignment Map',
    path: '/',
    icon: <img src={iEdVAM}/>,
    cName: 'nav-Map'
  }
  ,
  {
    title: 'Standards',
    path: '/',
    icon: <img src={iEdStandard}/>,
    cName: 'nav-Standards'
  }
];