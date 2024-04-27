import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import Company from './components/pages/dashboard/company/Company';
import Employees from './components/pages/dashboard/employee/Employees';
// import Corehr from './components/pages/hr/Corehr';
// import Timesheets from './components/pages/hr/Timesheets';
// import Payroll from './components/pages/hr/Payroll';
import Addcompany from './components/pages/dashboard/company/Addcompany';
import Addemployee from './components/pages/dashboard/employee/Addemployee';
import Employeeinfo from './components/pages/dashboard/employee/employeeinfo/Employeeinfo';
import Hrdetails from './components/pages/hr/Hrdetails';
import Timesheets from './components/pages/hr/Timesheets';
import Payroll from './components/pages/hr/Payroll';
import Clients from './components/pages/recruitment/clients/Clients';
import Jobs from './components/pages/recruitment/jobs/Jobs';
import Candidates from './components/pages/recruitment/candidates/Candidates';
import Interview from './components/pages/recruitment/Interview/Interview';
import Invoice from './components/pages/account/invoice/Invoice';
import Clientinfo from './components/pages/recruitment/clients/Clientinfo';
import AddClient from './components/pages/recruitment/clients/AddClient';
import AddJob from './components/pages/recruitment/jobs/AddJob';
import AddCadidate from './components/pages/recruitment/candidates/AddCadidate';
import Jobinfo from './components/pages/recruitment/jobs/Jobinfo';
import Dashboard from './components/pages/dashboard/Dashboard';
function App() {
  return (
    <Switch>
      <Route exact path="/Dashboard" component={Dashboard} />
      {/* ===========================company section========================================================================= */}

      <Route exact path="/Company" component={Company} />
      <Route exact path="/Addcompany" component={Addcompany} />
      {/* ===========================Employee section========================================================================= */}

      <Route exact path="/Employees" component={Employees} />
      <Route exact path="/Addemployee" component={Addemployee} />
      <Route exact path="/Employeeinfo" component={Employeeinfo} />
   

      {/* ==================================================================================================== */}
      <Route exact path="/Hrdetails" component={Hrdetails} />
      <Route exact path="/Timesheets" component={Timesheets} />
      <Route exact path="/Payroll" component={Payroll} />
      {/* ===========================Recruitment========================================================================= */}
      <Route exact path="/Clients" component={Clients} />
      <Route exact path="/Clientinfo" component={Clientinfo} />
      <Route exact path="/AddClient" component={AddClient} />





      <Route exact path="/Jobs" component={Jobs} />
      <Route exact path="/AddJob" component={AddJob} />
      <Route exact path="/Jobinfo" component={Jobinfo} />

      <Route exact path="/Candidates" component={Candidates} />
      <Route exact path="/AddCadidate" component={AddCadidate} />


      <Route exact path="/Interview" component={Interview} />

      
      {/* ===========================Account========================================================================= */}
      <Route exact path="/Invoice" component={Invoice} />
      

      


    </Switch>
  );
}

export default App;
