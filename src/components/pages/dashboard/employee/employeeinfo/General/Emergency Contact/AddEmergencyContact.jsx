

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Autocomplete, Divider, InputLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: 1200, // Adjust the value to increase or decrease width
  },
}));

 const AddEmergencyContact= ({open,handleClickOpen,handleClose})=> {

  const { register, handleSubmit,control, reset, formState: { isSubmitting } } = useForm();
    const [selectedRelation,setSelectedRelation]=React.useState([])
    const [selectedCountry,setSelectedCountry]=React.useState([])
    const [data,setData]= React.useState([])
    const employeeData = useSelector(state => state.socket.messages)
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
    const url=process.env.REACT_APP_DEVELOPMENT;
// ============================================Get api====================================================================================================================
const getEmergencyContact =()=>{

  axios.get(`${url}/api/employees/general/get-contact/`)
    .then(response => {
      const arr = response.data.map((item, index) => ({
        ...item,
        id: index + 1
      }));
      setData(arr);
    })
    .catch(error => {
      console.error('Error fetching data:', error);

    }); 
}
  // ==========================================POST API==============================================================================================================================
      const onSubmit = async(formData)=>{
        try {
          var obj ={
            relation:selectedRelation,
            country:selectedCountry,
            employee:employeeData.uuid,
            ...formData
          }
          console.log('obj',obj)
          await axios.post(`${url}/api/employees/general/create-contact/`,obj)
          .then(response=>{
            console.log('Response',response)
            const newData = response.data.data;
  
            // Update local state with the new data
            setData((prevData) => [...prevData, newData]);
            reset()
            handleClose()
          }).catch(error=>console.log(error))
           getEmergencyContact();
        } catch (error) {
          console.log(error)
          
        }
        
      }
  
  
  
      React.useEffect(() => {
        getEmergencyContact(); // Fetch data on initial render
      }, []); // Re-fetch data when 'data' state changes (after POST request)
      
  return (
    <React.Fragment>
 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <IconButton 
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon  />
        </IconButton >
    
{/* ===================================================================================================================================================================== */}
      
        <p className="whitboxtitle ml-4 my-4">Add Contact</p>
     
        <Divider/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
        <div className="col-6">
                <InputLabel htmlFor="relation">Relation *</InputLabel>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedRelation(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Document Type' required/>}
                    />
              </div>       
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Email *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Email"
                required
                type="text"
                variant="outlined"
                {...register('email')}
              />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Name*</InputLabel>

            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Name"
                required
                type="text"
                variant="outlined"
                {...register('name')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Phone Number* </InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Phone Number"
                required
                type="number"
                variant="outlined"
                {...register('phone_number')}
              />
         
            </div>
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Address *</InputLabel>

            <TextField
                id="outlined-basic"
                fullWidth
                placeholder="Address"
                required
                type="text"
                variant="outlined"
                {...register('address')}
                
              />
            </div>          
             
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">City *</InputLabel>

            <TextField
                id="outlined-basic"
                
                placeholder="Enter City Name"
                required
                type="text"
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                    }}
                variant="outlined"
                {...register('city')}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">State *</InputLabel>

            <TextField
                id="outlined-basic"
                
                placeholder="Enter State Name"
                required
                type="text"
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                      }}
                variant="outlined"
                {...register('state')}

              />
            </div>          
             
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Zip Code *</InputLabel>

            <TextField
                id="outlined-basic"
               
                placeholder="Enter Zip Code "
                required
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                      }}
                type="text"
                variant="outlined"
                {...register('zip_code')}
              />
            </div>          
            <div className="col-6">
                <InputLabel htmlFor="country">Country *</InputLabel>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedCountry(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Document Type' required/>}
                    />
              </div>           
             
          </div>
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' type='submit'
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Contact</Button>
            </div>
        
          </div>
        </div>
        </form>
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddEmergencyContact