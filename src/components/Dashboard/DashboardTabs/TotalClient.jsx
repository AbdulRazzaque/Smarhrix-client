import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
const TotalClient = () => {
  return (
    <div className='m-2'>
  <div className=' row d-flex '>
      <div className=' col-xs-4 d-flex rounded border border-dark  m-2 mr-4' style={{width:'230px',  height:"100px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3  'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>TOTAL CLIENTS</h2>
          <hr className='bg-white' style={{width:'120px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white ml-5 ' style={{fontSize:'30px',marginTop:'-10px' }}>43</h1>
    
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>



      <div className=' col-xs-4 d-flex rounded border border-dark m-2  mr-5' style={{width:'230px' , height:"100px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3 text-start 'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>TOTAL JOBS</h2>
          <hr className='bg-white' style={{width:'100px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>26</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      <div className=' col-xs-4 d-flex rounded border border-dark m-2 mr-5 ' style={{width:'230px' , height:"100px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3  text-start' style={{fontSize:'15px', marginTop:"25px"}}>TOTAL CANDIDATE</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>200</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      <div className=' col-xs-4 d-flex rounded border border-dark m-2  mr-5' style={{width:'230px' , height:"100px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white ml-3 text-start 'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>TOTAL CONTACTS</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>16</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default TotalClient