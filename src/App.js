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
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
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
      {/* ==================================================================================================== */}
      <Route exact path="/Clients" component={Clients} />
      
      {/* <Route exact path="/Corehr" component={Corehr} /> */}
      {/* <Route exact path="/Timesheets" component={Timesheets} />
      <Route exact path="/Payroll" component={Payroll} /> */}

    </Switch>
  );
}

export default App;
