

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Autocomplete, Divider, InputLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

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
 
 const AddLoan= ({open,handleClickOpen,handleClose})=> {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const employeeData = useSelector(state => state.socket.messages)
  const [data,setData]=React.useState([])
  const [selectedMonthYear,setSelectedMonthYear]=React.useState()
  const [slectedLoanOption,setSelectedLoanOption]=React.useState()

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
      // ==========================================GET API==============================================================================================================================
      const getLoan = async()=>{

        await axios.get(`${url}/api/employees/set-salary/get-loan/`)
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
                month_year:moment.parseZone(selectedMonthYear).format("YYYY-MM-DD"),
                loan_option:slectedLoanOption,
                employee:employeeData.uuid,
                ...formData
              }
              console.log('obj',obj)
              await axios.post(`${url}/api/employees/set-salary/create-loan/`,obj)
              .then(response=>{
                console.log('Response',response)
                const newData = response.data.data;
      
                // Update local state with the new data
                setData((prevData) => [...prevData, newData]);
                reset()
                handleClose()
              }).catch(error=>console.log(error))
              await getLoan();
            } catch (error) {
              console.log(error)
              
            }
            
          }
      
      
      
          React.useEffect(() => {
            getLoan()
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
      
        <p className="whitboxtitle ml-4 my-4">Add Loan</p>
     
        <Divider/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Month - Year *</InputLabel>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedMonthYear(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Loan Option *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedLoanOption(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Loan Option ' required/>}
                    />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Title *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
                placeholder='Title'
                type="text"
                variant="outlined"
                {...register('title')}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Amount *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Amount'
                type="number"
                variant="outlined"
                {...register('amount')}
              />
            </div>          
             
          </div>
          {/* ===================Third row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Number of Installment *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Enter Number of Installment'
                type="number"
                variant="outlined"
                {...register('number_of_installment')}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Reason *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Reason'
                type="text"
                variant="outlined"
                {...register('reason')}
              />
            </div>          
             
          </div>

          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' type='submit'
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Loan</Button>
            </div>
        
          </div>
        </div>
        </form>
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddLoan