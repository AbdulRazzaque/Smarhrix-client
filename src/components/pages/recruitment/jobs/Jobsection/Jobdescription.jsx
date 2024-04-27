

import { Avatar, Button } from '@mui/material'
import React from 'react'
import { deepOrange, green } from '@mui/material/colors';
import DownloadIcon from '@mui/icons-material/Download';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const Jobdescription = () => {

  return (
    <div>
         
    <div className='bg-white py-3'>
    <p className='my-3 mx-3 py-2 boxtitle'>Attachment Information</p>
    <hr className='mx-3' />
    <div className="row my-2 align-items-center">
        {/* Left side content */}
        <div className="col-10 my-3">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                <CheckBoxOutlineBlankIcon className='Job_description_icon'/>
                </div>
                <div className="col">
                    <h4 className=''>Roles & Responsibility</h4>
                    
                </div>
            </div>
        </div>
        <div className="col-10 my-3">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                <CheckBoxOutlineBlankIcon className='Job_description_icon'/>
                </div>
                <div className="col">
                    <h4 className=''>Job Requirements</h4>
                    
                </div>
            </div>
        </div>
        <div className="col-10 my-3">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                <CheckBoxOutlineBlankIcon className='Job_description_icon'/>
                </div>
                <div className="col">
                    <h4 className=''>Additional Requirments</h4>
                    
                </div>
            </div>
        </div>
        <div className="col-10 my-3">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                <CheckBoxOutlineBlankIcon className='Job_description_icon'/>
                </div>
                <div className="col">
                    <h4 className=''>Benefit</h4>
                    
                </div>
            </div>
        </div>
        <div className="col-10 my-3">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                <CheckBoxOutlineBlankIcon className='Job_description_icon'/>
                </div>
                <div className="col">
                    <h4 className=''>Apply instruction</h4>
                    
                </div>
            </div>
        </div>
      
    </div>
   
</div>

    </div>
  )
}

export default Jobdescription