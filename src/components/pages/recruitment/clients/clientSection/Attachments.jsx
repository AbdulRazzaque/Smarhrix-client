import { Avatar, Button } from '@mui/material'
import React from 'react'
import { deepOrange, green } from '@mui/material/colors';
import DownloadIcon from '@mui/icons-material/Download';
const Attachments = () => {
  return (
    <div>
                  {/* <div className=' bg-white'>
           <p className='my-3 mx-3 py-2 boxtitle'>Attachment Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col-1">
                  <div className="col my-3">
                  <Avatar sx={{ bgcolor: 50 }} variant="square">
                         F
                        </Avatar>
                  </div>
                
                </div>
                <div className="col-2">
                  <div className="col mt-4">
                    <h4 className='documentHeading'>File 01</h4>
                    <p className='text-muted small mb-4 '>12-3-2025 . 12:15:32</p>
                  </div>
                
                </div>
              
             
               
            </div>

         
                <div className="text-right">
                  <div className="col mt-4">
                    <h4 className='documentHeading'>File 01</h4>
                    <p className='text-muted small mb-4 '>12-3-2025 . 12:15:32</p>
                  </div>
                
                </div>
    </div> */}
    <div className='bg-white py-3'>
    <p className='my-3 mx-3 py-2 boxtitle'>Attachment Information</p>
    <hr className='mx-3' />
    <div className="row my-2 align-items-center">
        {/* Left side content */}
        <div className="col-10">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                    <Avatar sx={{ bgcolor: 50 }} variant="square">
                        F
                    </Avatar>
                </div>
                <div className="col">
                    <h4 className='documentHeading'>File 01</h4>
                    <p className='text-muted small mb-0'>12-3-2025 . 12:15:32</p>
                </div>
            </div>
        </div>
        {/* Right side content */}
        <div className="col-2 text-end">
            <div className="row align-items-center">
                <div className="col">
                   <Button variant='contained' sx={{borderRadius:34, backgroundColor:'#2F69FF'}}><DownloadIcon className='mx-2'/> Download </Button>
             
                </div>
            </div>
        </div>
    </div>
    <div className="row my-2 align-items-center">
        {/* Left side content */}
        <div className="col-10">
            <div className="row align-items-center">
                <div className="col-auto ml-4">
                    <Avatar sx={{ bgcolor: 50 }} variant="square">
                        F
                    </Avatar>
                </div>
                <div className="col">
                    <h4 className='documentHeading'>File 02</h4>
                    <p className='text-muted small mb-0'>12-3-2025 . 12:15:32</p>
                </div>
            </div>
        </div>
        {/* Right side content */}
        <div className="col-2 text-end">
            <div className="row align-items-center">
                <div className="col">
                   <Button variant='contained' sx={{borderRadius:34, backgroundColor:'#2F69FF'}}><DownloadIcon className='mx-2'/> Download </Button>
             
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Attachments