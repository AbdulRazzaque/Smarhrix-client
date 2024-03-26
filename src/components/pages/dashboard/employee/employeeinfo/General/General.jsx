import React, { useState } from 'react'
import '../employeeinfo.scss'
import Basic from './Basic'
import Infolist from './Generallist'
import Immigration from './Immigration'
import EmergencyContact from './EmergencyContact'
import Socialprofile from './Socialprofile'
import Document from './Document'
import Qualification from './Qualification'
import Workexperience from './Workexperience'
import BankAccount from './BankAccount'

const General = () => {
  const [openComponent, setOpenComponent] = useState('Basic');

  const  handelOpen = (ComponentName)=>{
    setOpenComponent(ComponentName)
  }
  return (
    <div>
        <div className="row">
            <div className="col-3">
            <Infolist handelOpen={handelOpen}/>
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