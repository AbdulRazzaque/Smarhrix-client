
import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Autocomplete, Button, TextField } from '@mui/material';
function Addcompany() {
    const [display,setDisplay]=React.useState(false)

    const department =[
      {name:'GENETIC'},
      {name:"MICROBIOLOGY"},
      {name:"HEAMOTOLGY"},
      {name:"BIOCHEMISTRY"},
      {name:"HPLC"},
      {name:"AAS"},
      {name:"PARASITOLOGY"},
      {name:"GENERAL"},
         
      
    ]

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={2} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / Company / <span>Add Company</span></p>
      <p className='sidTitle2'>ADD COMPNAY</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
        <div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Add New company</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row ">
            
            <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1  }}
                label="Company Name"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12 ">
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1 }}
                    renderInput={(params) => <TextField {...params} label="Select Company Type" />}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row  ">
            
            <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="Treading Name"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="Registration Number"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row">
            
            <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="Phone number"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="Email"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row">
            
            <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="website (optional)"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12">
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1 }}
                    renderInput={(params) => <TextField {...params} label="Select location" />}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row">
            
            <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                label="Tax Number"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1 }}
                // label="Tax Number"
                type="file"
                variant="outlined"
              />
            </div>
          </div>
          <div className="col-xl-4 mt-2 col-md-12 col-sm-12 my-5">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Company</Button>
            </div>
        </div>
    </div>
 


             </div>
    </div>
    )
}

export default Addcompany
