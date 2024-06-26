
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

 const AddDeduction= ({open,handleClickOpen,handleClose})=> {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const employeeData = useSelector(state => state.socket.messages)
  const [data,setData]=React.useState([])
  const [selectedMonthYear,setSelectedMonthYear]=React.useState()
  const [selectedDeductionOption,setSelectedDeductionOption]=React.useState()

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
      const getStatutoryDeduction = async()=>{

        await axios.get(`${url}/api/employees/set-salary/get-statutory-deduction/`)
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
                deduction_option:selectedDeductionOption,
                employee:employeeData.uuid,
                ...formData
              }
              console.log('obj',obj)
              await axios.post(`${url}/api/employees/set-salary/create-statutory-deduction/`,obj)
              .then(response=>{
                console.log('Response',response)
                const newData = response.data.data;
      
                // Update local state with the new data
                setData((prevData) => [...prevData, newData]);
                reset()
                handleClose()
              }).catch(error=>console.log(error))
              await getStatutoryDeduction();
            } catch (error) {
              console.log(error)
              
            }
            
          }
      
      
      
          React.useEffect(() => {
            getStatutoryDeduction()
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
      
        <p className="whitboxtitle ml-4 my-4">Add Deduction</p>
     
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
              <InputLabel htmlFor="outlined-basic">Deduction Option *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedDeductionOption(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Deduction Option' required/>}
                    />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Diduction Title *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Diduction Title'
                type="text"
                variant="outlined"
                {...register('deduction_title')}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Diduction Amount *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Diduction Amount'
                type="number"
                variant="outlined"
                {...register('deduction_amount')}
              />
            </div>          
             
          </div>
       

          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' type='submit'
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Deduction</Button>
            </div>
        
          </div>
        </div>
        
        </form>
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddDeduction