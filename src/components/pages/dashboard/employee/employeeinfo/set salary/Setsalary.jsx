import Infolist from '../General/Generallist'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Salarylist from './Salarylist';
import BasicSalary from './BasicSalary';
import Allowances from './Allowances';
import Commissions from './Commissions';
import Loan from './Loan';
import StatutoryDeductions from './StatutoryDeductions';
import OtherPayments from './OtherPayments';
import Overtime from './Overtime';
import SalaryPension from './SalaryPension';

const Setsalary = () => {
  const [openComponent, setOpenComponent] = useState('BasicSalary');

  const  handleOpen = (ComponentName)=>{
    setOpenComponent(ComponentName)
  }


  return (
        <div className="row">
            <div className="col-3">
                <Salarylist handleOpen={handleOpen}/>
            </div>
            <div className="col-9 bg-white py-5">
            {openComponent === 'BasicSalary' && <BasicSalary />}
            {openComponent === 'Allowances' && <Allowances />}
            {openComponent === 'Commissions' && <Commissions />}
            {openComponent === 'Loan' && <Loan />}
            {openComponent === 'StatutoryDeductions' && <StatutoryDeductions />}
            {openComponent === 'OtherPayments' && <OtherPayments />}
            {openComponent === 'Overtime' && <Overtime />}
            {openComponent === 'SalaryPension' && <SalaryPension />}
        </div>
        </div>
  )
}

export default Setsalary



