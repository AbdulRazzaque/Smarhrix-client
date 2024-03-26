import React from 'react'
import "./Dashhead.scss"
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleIcon from '@mui/icons-material/People';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TimerIcon from '@mui/icons-material/Timer';
const Dashhead = (props) => {
    console.log(props);
    let {id,display} = props
    return (
        
            
        <div className={display?"shadow-lg dashhead":'dashhead displayhidden min-vh-100'}
        id="sidebar-wrapper"
        >
            <div className="heading py-4">
            <h2>SMARTHIREX</h2>
            </div>
            <div className='mx-3 my-3 '>

            <h6 className='subtitle'>DASHBOARD</h6>
            </div>
            {id===1?<div className="menu-container-active" onClick={()=>props.history.push('/')}>
                <p><DashboardIcon className='mx-1' /> Dashboard</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('/')} >
            <p><DashboardIcon /> Dashboard</p>
            </div>
            }

            {id===2?<div className="menu-container-active" onClick={()=>props.history.push('Company')}>
                <p><ApartmentIcon /> Company</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('Company')}>
            <p><ApartmentIcon /> Company</p>
            </div>
            }

            {id===3?<div className="menu-container-active" onClick={()=>props.history.push('Employees')}>
                <p><PeopleIcon /> Employees</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('Employees')} >
            <p><PeopleIcon /> Employees</p>
            </div>
            }
            <hr className='ml-2' />
            {/* =================================Hr========================================================== */}
            <div className='mx-3 my-3 '>

         <h6 className='subtitle'> HR</h6>
            </div>
            {id===4?<div className="menu-container-active"  onClick={()=>props.history.push('Hrdetails')}>
                <p><PeopleIcon /> Core HR</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('Hrdetails')}>
            <p><PeopleIcon /> Core HR</p>
            </div>
            }

            {id===5?<div className="menu-container-active" onClick={()=>props.history.push('Timesheets')}>
                <p><TimerIcon /> Timesheets</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('Timesheets')}>
            <p><TimerIcon /> Timesheets</p>
            </div>
            }
            {id===6?<div className="menu-container-active" onClick={()=>props.history.push('Payroll')}>
                <p><RecordVoiceOverIcon /> Payroll</p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('Payroll')}>
            <p><RecordVoiceOverIcon /> Payroll</p>
            </div>
            }

            <hr className='ml-2' />
 {/* ================================Recruitment========================================================== */}
            <div className='mx-3 my-3 '>

<h6 className='subtitle'> RECRUITMENT</h6>
   </div>
   {id===7?<div className="menu-container-active"  onClick={()=>props.history.push('Clients')}>
       <p><PeopleIcon /> Clients</p>
   </div>:
   <div className="menu-container" onClick={()=>props.history.push('Clients')}>
   <p><PeopleIcon /> Clients</p>
   </div>
   }

   {id===5?<div className="menu-container-active" onClick={()=>props.history.push('Timesheets')}>
       <p><TimerIcon /> Jobs</p>
   </div>:
   <div className="menu-container" onClick={()=>props.history.push('Timesheets')}>
   <p><TimerIcon /> Jobs</p>
   </div>
   }
   {id===6?<div className="menu-container-active" onClick={()=>props.history.push('Payroll')}>
       <p><RecordVoiceOverIcon /> Candidates</p>
   </div>:
   <div className="menu-container" onClick={()=>props.history.push('Payroll')}>
   <p><RecordVoiceOverIcon /> Candidates</p>
   </div>
   }
   {id===6?<div className="menu-container-active" onClick={()=>props.history.push('Payroll')}>
       <p><RecordVoiceOverIcon /> Interview Schedule</p>
   </div>:
   <div className="menu-container" onClick={()=>props.history.push('Payroll')}>
   <p><RecordVoiceOverIcon /> Interview Schedule</p>
   </div>
   }
            
        </div>
    );
}

const mapStateToProps = ({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(withRouter(Dashhead));