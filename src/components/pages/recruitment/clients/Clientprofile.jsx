

import React from 'react'
// import profile from '../../../images/profile.png'
import profile from '../../../images/profile.jpg'
import BusinessIcon from '@mui/icons-material/Business';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const Clientprofile = () => {
  return (
    <div className=''>
           <div class="row bg-white mx-2">
      <div class="col-md-9 offset-md-1 "> 
        <div class="text-center profile">
        <img src= {profile} className='profileimage' alt=""  />
        <h1>Sharjeel Sahikh</h1>
            <h6 className='profilenumber'>+91 1234343566 <span className='ml-2 profileid'> Client ID:XX</span> </h6>  

        <div className="profilecategory">
                    <BusinessIcon className='icon'/>
                     <span> <span className='mx-1'>|</span>  Agriculture</span> 
                </div>
        </div>

      </div>
      <div class="col-md-2">
        <div class="text-end d-flex mt-3">
        <div className="p-2 profileheaderIcon  mx-3"><EditIcon className='profileicon'/></div>
        {/* <!-- Icon 2 --> */}
        <div className="p-2 profileheaderIcon "><ContentCopyIcon className='profileicon'/></div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Clientprofile