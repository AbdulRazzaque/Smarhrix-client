import { Autocomplete, Button, TextField } from '@mui/material'
import React from 'react'

const SalaryPension = () => {
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
    <div>
        
    <div >

           <p className='my-3 mx-3 py-2 boxtitle'>Update Pension</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                
                  <div className="col-4 my-3 ml-3 boxtextheading">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Percentage" required/>}
                    />
                  </div>
                  <div className="col my-3 boxtextcontent" > <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Amount" required />}
                    />
                    </div>
          
               
              
               
            </div>
            <div className="mt-5 ml-3">
            <Button variant="outlined" style={{ fontSize: '13px',borderRadius: 50 , color:'white',backgroundColor:'#2F69FF',textTransform:"none"}}  >
        Update pension
        </Button>
            </div>
       
          
    </div>

    </div>
  )
}

export default SalaryPension



