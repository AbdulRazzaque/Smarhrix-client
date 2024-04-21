import React, { useState } from 'react'
import '../employeeinfo.scss'
import Basic from './Basic/Basic'
import Infolist from './Generallist'
import Immigration from './immigration/Immigration'
import EmergencyContact from './Emergency Contact/EmergencyContact'
import Socialprofile from './Social profile/Socialprofile'
import Document from './Document/Document'
import Qualification from './Qualification/Qualification'
import Workexperience from './work experience/Workexperience'
import BankAccount from './Bank Account/BankAccount'

const General = () => {
  const [openComponent, setOpenComponent] = useState('Basic');

  const  handleOpen = (ComponentName)=>{
    setOpenComponent(ComponentName)
  }
  return (
    <div>
        <div className="row">
            <div className="col-3">
            <Infolist handleOpen={handleOpen}/>
            </div> 

            <div className="col-9">
            {openComponent === 'Basic' && <Basic />}
          {openComponent === 'Immigration' && <Immigration />}
          {openComponent === 'EmergencyContact' && <EmergencyContact />}
          {openComponent === 'Socialprofile' && <Socialprofile />}
          {openComponent === 'Document' && <Document/>}
          {openComponent === 'Qualification' && <Qualification/>}
          {openComponent === 'Workexperience' && <Workexperience/>}
          {openComponent === 'BankAccount' && <BankAccount/>}
            </div>
     
        </div>
         
    </div>
  )
}

export default General