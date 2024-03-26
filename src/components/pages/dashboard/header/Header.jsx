import React from 'react'
import './headers.scss'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const Header = () => {
  const history= useHistory()
  return (
    <div>
        <div className="container">
            {/* <div className="row">
                <div className="col-auto headerIcon my-5">

                    <KeyboardDoubleArrowLeftIcon className='icon'/>
                     </div>
                <div className="col-9 text-right">
                <div className="col-1 headerIcon my-5">

<KeyboardDoubleArrowLeftIcon className='icon'/>
 </div>
                </div>
            </div> */}
            <div className="container">
  <div className="row mt-5">
    <div className="col-md-9">
         {/* <!-- Column for left side icons --> */}
      {/* <!-- Your left side icons here --> */}
      <div className="d-flex justify-content-start">
        {/* <!-- Icon 1 --> */}
        <div className="p-2 headerIcon "><KeyboardDoubleArrowLeftIcon className='icon' onClick={()=>{history.goBack()}}/></div>
      
      </div>
    </div>
    <div className="col-md-3">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
        {/* <!-- Icon 4 --> */}
        <div className="p-2 headerIcon mx-2"><QuestionMarkIcon className='icon'/></div>
        {/* <!-- Icon 2 --> */}
        <div className="p-2 headerIcon mx-2"><NotificationsActiveIcon className='icon'/></div>
        {/* <!-- Icon 3 --> */}
        <div className="p-2 headerIcon"><PersonIcon className='icon'/></div>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default Header
