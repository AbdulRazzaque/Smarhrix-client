import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
// import '../../style/common.css'
import '../../../style/common.css'
const DashbordTotalClient = () => {
  return (
    <div className='m-2'>
  <div className=' row d-flex totalclient   '>
      <div className='  col-xs-6 d-flex rounded border border-dark  m-2 mx-3' style={{width:'250px',  height:"110px"}} >
        <div  style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3  'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>TOTAL CLIENTS</h2>
          <hr className='bg-white' style={{width:'120px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white ml-5 ' style={{fontSize:'30px',marginTop:'-10px' }}>43</h1>
    
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>



      <div className=' totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3 text-start 'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>TOTAL JOBS</h2>
          <hr className='bg-white' style={{width:'100px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>26</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2 mx-3 ' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white  ml-3  text-start' style={{fontSize:'15px', marginTop:"25px"}}>TOTAL CANDIDATE</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>200</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      
    
  {/* ======================================second row========================================================================================================================= */}
  {/* <div className=' row d-flex totalclient   '> */}
      {/* <div className='col-xs-6 d-flex rounded border border-dark  m-2 mx-3' style={{width:'250px',  height:"110px"}} >
        <div  style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white text-uppercase  ml-1  'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>JOINED/OFFERED/SHORTLISTED</h2>
          <hr className='bg-white' style={{width:'120px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white ml-3 ' style={{fontSize:'30px',marginTop:'-10px' }}>10/80/100</h1>
    
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div> */}
   <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}}  >
          <h2 className='text-white ml-3 text-start text-uppercase'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>JOINED / OFFERED / SHORTLISTED </h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h2 className='text-white  ml-5' style={{fontSize:'25px',marginTop:'-10px'}}>16/2/4</h2>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>


  
  
      <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white ml-3 text-start text-uppercase'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}> Employees / present / Absent</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h2 className='text-white  ml-5' style={{fontSize:'25px',marginTop:'-10px'}}>16/34/3</h2>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>

  
      <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white ml-3 text-start text-uppercase'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>total business done</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>16</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white ml-3 text-start text-uppercase'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>total business pending</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>16</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
      <div className='totalclient col-xs-6 d-flex rounded border border-dark m-2  mx-3' style={{width:'250px' , height:"110px"}} >
        <div style={{background:'#011526',width:'180px'}} >
          <h2 className='text-white ml-3 text-start text-uppercase'style={{fontSize:'15px ',fontWeight:'1px', marginTop:"25px"}}>payment received/pending</h2>
          <hr className='bg-white' style={{width:'140px',marginTop:'-10px', marginLeft:"15px"}}/>
          <h1 className='text-white  ml-5' style={{fontSize:'30px',marginTop:'-10px'}}>16</h1>
        </div>
        <div className='m-2 text-center'>
           <PersonIcon style={{fontSize:'30px'}} className=' mt-5 m-2'/>
        </div>
      </div>
    {/* </div> */}
    </div>
    </div>
  
  )
}

export default DashbordTotalClient