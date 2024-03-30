import Infolist from '../General/Generallist'
import React, { Fragment, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


import CoreHrList from './CoreHrList';
import Award from '../../../../hr/tabSection/Award'
import Travel from '../../../../hr/tabSection/Travel'
import Transfer from '../../../../hr/tabSection/Transfer'
import Promotion from '../../../../hr/tabSection/Promotion'
import Complaints from '../../../../hr/tabSection/Complaints'
import Warning from '../../../../hr/tabSection/Warning'
import Training from '../../../../hr/tabSection/Training'
import Ticket from '../../../../hr/tabSection/Ticket'
const CoreHr = () => {
  const [openComponent, setOpenComponent] = useState('Award');

  const  handleOpen = (ComponentName)=>{
    setOpenComponent(ComponentName)
  }
    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'Award Name', headerName: 'Award Name', width: 150 },
        { field: 'Details', headerName: 'Details', width: 150 },
        { field: 'Gift', headerName: 'Gift', width: 150 },
        { field: 'Award Data', headerName: 'Award Data', width: 150 },
        // { field: 'Department', headerName: 'Department', width: 150 },

       
        //   {
        //     title: "Action",
        //     field: "Action",
        //     width: 180,
        //     renderCell: () => (
        //       <Fragment>
        //         {/* <Button color="error" onClick={() => setAlert(true)}> */}
        //         <Button color="primary">
        //           <InfoIcon />
        //         </Button>
        //         <Button color="success" >
        //           <EditIcon />
        //         </Button>
        //         <Button color="error" >
        //           <DeleteIcon />
                  
        //         </Button>
        //       </Fragment>
        //     ),
        //   },

    ];
    
      const rows = [

      ]
  return (
  
 <div className='row '>
        <div className="col-3">
            <CoreHrList handleOpen={handleOpen}/>
        </div>
        <div className="col-9 bg-white py-3">
       
        {openComponent === 'Award' && <Award />}
        {openComponent === 'Travel' && <Travel/>}
        {openComponent === 'Transfer' && <Transfer/>}
        {openComponent === 'Promotion' && <Promotion/>}
        {openComponent === 'Complaints' && <Complaints/>}
        {openComponent === 'Warning' && <Warning/>}
        {openComponent === 'Training' && <Training/>}
        {openComponent === 'Ticket' && <Ticket/>}
    </div>
        </div>


   
   
  )
}

export default CoreHr