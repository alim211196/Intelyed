import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IntelyEd from './Component/intelyEd/IntelyEd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Component/Pages/Dashboard'
import MyClasses from './Component/Pages/MyClasses'
import IEdHeader from '../src/Component/intelyEd/Iedheader'
import SideNav from '../src/Component/intelyEd/SideNav';


function App() {
  const [sidebar, setSidebar] = useState(false);

  const [arrow, setarrow] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showArrow = () => setarrow(!arrow);

  const [LearnMore, setLearnMore] = useState(false);
  const showLearnMore = () => setLearnMore(!LearnMore);
  return (

     <>

     <Router>
     <IEdHeader
        sidebar={sidebar}
        showSidebar={showSidebar}
      />


      <SideNav
        sidebar={sidebar}
        showSidebar={showSidebar}
        arrow={arrow}
        showArrow={showArrow}

      />
     {/* <IntelyEd/> */}
       <Switch>
       <Route path='/Dashboard' exact render={(props)=><Dashboard {...props} sidebar={sidebar} showSidebar={showSidebar} />} />
      
       <Route path='/MyClasses' component={MyClasses} />
       </Switch>
     </Router>
   </>
  );
}

export default App;
