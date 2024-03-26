import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const Profile = () => {
  return (
    <div className='bg-white'>
     <p className='my-3 mx-3 py-2 boxtitle' >Basic Information</p>
            <hr className='mx-3'/>
            <div className="row">
                <div className="col profileinput" >
                    <div className="col profileinput d-flex align-items-center justify-content-center">
                        
                    <div>

                    <CloudUploadIcon sx={{width:500,height:80}}/>
                       <p className='text-center inputtext'>Drag and drop a filel or upload</p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile