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
import moment from 'moment'
import axios from 'axios';
import { useSelector } from 'react-redux';
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

 const AddQualification= ({open,handleClickOpen,handleClose})=> {

  const { register, handleSubmit,control, reset, formState: { isSubmitting } } = useForm();
    const [selectedEducationLevel,setSelectedEducationLevel]=React.useState([])
    const [selectedLanguage,setSelectedLanguage]=React.useState([])
    const [selectedProfessionalSkills,setSelectedProfessionalSkills]=React.useState([])
    const [selectedFromDate,setSelectedFromDate]=React.useState([])
    const [selectedToDate,setSelectedToDate]=React.useState([])
    const [data,setData]=React.useState([])
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
      
        axios.get(`${url}/api/employees/general/get-qualification/`)
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
                  from_date:moment.parseZone(selectedFromDate).format("YYYY-MM-DD"),
                  to_date:moment.parseZone(selectedToDate).format("YYYY-MM-DD"),
                  professional_skills:selectedProfessionalSkills,
                  language:selectedLanguage,
                  education_level:selectedEducationLevel,
                  employee:employeeData.uuid,
                  ...formData
                }
                console.log('obj',obj)
                await axios.post(`${url}/api/employees/general/create-qualification/`,obj)
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
      
        <p className="whitboxtitle ml-4 my-4">Add Qualification</p>
     
        <Divider/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">School/UniverSity *</InputLabel>

            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="School/UniverSity "
                required
                type="text"
                variant="outlined"
                {...register('university')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Education Level *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedEducationLevel(value.name)
 
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Education Level' required/>}
                    />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">From *</InputLabel>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedFromDate(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">To *</InputLabel>
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedToDate(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
         
            </div>
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Language</InputLabel>

            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedLanguage(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Language' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Profesional Skills</InputLabel>

<Autocomplete
        disablePortal
        id="combo-box-demo"
        getOptionLabel={(department)=>department.name}
         options={department}
         onChange={(event,value)=>{
          setSelectedProfessionalSkills(value.name)
         }}
         sx={{ 
            width:'100%',   maxWidth: '500Px' 
            }}
        renderInput={(params) => <TextField {...params} placeholder='Select Professional Skills' required/>}
        />
         
            </div>
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Description</InputLabel>
            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                {...register('description')}
                type="text"
                variant="outlined"
              />
            </div>          
             
          </div>
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained'  type='submit'
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Qualification</Button>
            </div>
        
          </div>
        </div>
        
        </form>
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddQualification