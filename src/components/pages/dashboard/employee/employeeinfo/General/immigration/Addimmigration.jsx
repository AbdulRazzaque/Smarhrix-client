

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import { Autocomplete, Divider, InputLabel, TextField } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import moment from 'moment';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import axios from 'axios';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
//   '& .MuiPaper-root': {
//     width: 1200, // Adjust the value to increase or decrease width
//   },
// }));

//  const Addimmigration= ({open,handleClickOpen,handleClose})=> {
//   const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
//   const employeeData = useSelector(state => state.socket.messages)
//   // console.log(employeeData,'employeeData')

//     // const [selectedDate,setSelectedDate]=React.useState()
//     const [selectedDocumentType,setSelectedDocumentType]=React.useState()
//     const [selectedIssueDate,setSelectedIssueDate]=React.useState()
//     const [selectedExpiryDate,setSelectedExpiryDate]=React.useState()
//     const [selectedEligibleDate,setSelectedEligibleDate]=React.useState()
//     const [selectedCountry,setSelectedCountry]=React.useState()
//     const [data,setData]= React.useState([])
//     const [refresh, setRefresh] = React.useState(false);

    
//     const department =[
//       {name:'GENETIC'},
//       {name:"MICROBIOLOGY"},
//       {name:"HEAMOTOLGY"},
//       {name:"BIOCHEMISTRY"},
//       {name:"HPLC"},
//       {name:"AAS"},
//       {name:"PARASITOLOGY"},
//       {name:"GENERAL"},
      
      
//     ]
//     const url=process.env.REACT_APP_DEVELOPMENT; 
// // ==========================================GET API==============================================================================================================================
// const getBanckAccount = async()=>{
      
//   await axios.get(`${url}/api/employees/general/get-bank-account/`)
//      .then(response => {
//        const arr = response.data.map((item, index) => ({
//          ...item,
//          id: index + 1
//        }));
//        setData(arr);
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
 
//      }); 
//  }
// // ==========================================POST API==============================================================================================================================
//     const onSubmit = async(formData)=>{
//       try {
//         var obj ={
//           document_type:moment.parseZone(selectedDocumentType).format("YYYY-MM-DD"),
//           issue_date:moment.parseZone(selectedIssueDate).format("YYYY-MM-DD") ,
//           expired_date:moment.parseZone(selectedExpiryDate).format("YYYY-MM-DD"),
//           eligible_review_date:moment.parseZone(selectedEligibleDate).format("YYYY-MM-DD"),
//           country:selectedCountry,
//           employee:employeeData.uuid,
//           ...formData
//         }
//         console.log('obj',obj)
//         await axios.post(`${url}/api/employees/general/create-immigration/`,obj)
//         .then(response=>{
//           console.log('Response',response)
//           const newData = response.data.data;

//           // Update local state with the new data
//           setData((prevData) => [...prevData, newData]);
//              // Trigger a refresh of the bank account data
//           setRefresh(prev => !prev);
          
//           reset()
//           handleClose()
//         }).catch(error=>console.log(error))
//         await getBanckAccount();
//       } catch (error) {
//         console.log(error)
        
//       }
      
//     }



//     React.useEffect(() => {
//       getBanckAccount(); // Fetch data on initial render
//     }, [refresh]); // Re-fetch data when 'data' state changes (after POST request)
    
//   return (
//     <React.Fragment>
 
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >

//         <IconButton 
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon  />
//         </IconButton >
    
// {/* ===================================================================================================================================================================== */}
      
//         <p className="whitboxtitle ml-4 my-4">Add Immigration</p>
     
//         <Divider/>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="container my-4">
//         <div className="d-flex align-items-center my-3">
            
//             <div className="col-6">
//             <InputLabel htmlFor="outlined-basic">Document Type *</InputLabel>

//             <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                     getOptionLabel={(department)=>department.name}
//                      options={department}
//                      onChange={(event,value)=>{
//                       setSelectedDocumentType(value.name)
//                      }}
//                      sx={{ 
//                         width:'100%',   maxWidth: '500Px' 
//                         }}
//                     renderInput={(params) => <TextField {...params} placeholder='Select Document Type' required/>}
//                     />
//             </div>          
//               <div className="col-6">
//               <InputLabel htmlFor="outlined-basic">Document Number *</InputLabel>
//               <TextField
//                 id="outlined-basic"
//                 sx={{ 
//                 width:'100%',   maxWidth: '500Px' 
//                   }}
//                 placeholder="Enter Document Number"
//                 required
//                 type="number"
//                 variant="outlined"
//                 {...register('document_number')}
//               />
         
//             </div>
//           </div>
//           {/* ===================Second row====================================================================================== */}
//         <div className="d-flex align-items-center my-3">
            
//             <div className="col-6">
//             <InputLabel htmlFor="outlined-basic">Issue Date *</InputLabel>

//            <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   // sx={{ width: 700 }}
            
//                   onChange={(newValue) => setSelectedIssueDate(newValue)}
//                   renderInput={(params) => (
//                     <TextField name="date" {...params}   sx={{ 
//                         width:'100%',   maxWidth: '500Px' 
//                           }} />
//                   )}
//                 />
//               </LocalizationProvider>
//             </div>          
//               <div className="col-6">
//               <InputLabel htmlFor="outlined-basic">Expired Date </InputLabel>
//              <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   // sx={{ width: 700 }}
            
//                   onChange={(newValue) => setSelectedExpiryDate(newValue)}
//                   renderInput={(params) => (
//                     <TextField name="date" {...params}   sx={{ 
//                         width:'100%',   maxWidth: '500Px' 
//                           }} />
//                   )}
//                 />
//               </LocalizationProvider>
         
//             </div>
//           </div>
//           {/* ===================Thired row====================================================================================== */}
//         <div className="d-flex align-items-center my-3">
            
//             <div className="col-6">
//             <InputLabel htmlFor="outlined-basic">Eligible Reviwe Date</InputLabel>

//            <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   // sx={{ width: 700 }}
            
//                   onChange={(newValue) => setSelectedEligibleDate(newValue)}
//                   renderInput={(params) => (
//                     <TextField name="date" {...params}   sx={{ 
//                         width:'100%',   maxWidth: '500Px' 
//                           }} />
//                   )}
//                 />
//               </LocalizationProvider>
//             </div>          
//               <div className="col-6">
//               <InputLabel htmlFor="outlined-basic">Document File *</InputLabel>
//               <TextField
//                 id="outlined-basic"
//                     sx={{ 
//                     width:'100%',   maxWidth: '500Px' 
//                       }}
//                 placeholder="Document File"
//                 // required
//                 type="file"
//                 variant="outlined"
//               />
         
//             </div>
//           </div>
//           {/* ===================Thired row====================================================================================== */}
//         <div className="d-flex align-items-center my-3">
            
//             <div className="col-6">
//             <InputLabel htmlFor="outlined-basic">Country</InputLabel>

//             <Autocomplete
//                     disablePortal
//                     id="combo-box-demo"
//                     getOptionLabel={(department)=>department.name}
//                      options={department}
//                      onChange={(event,value)=>{
//                       setSelectedCountry(value.name)
//                      }}
//                      sx={{ 
//                         width:'100%',   maxWidth: '500Px' 
//                         }}
//                     renderInput={(params) => <TextField {...params} placeholder='Select Country' required/>}
//                     />
//             </div>          
             
//           </div>
//           <div className="d-flex my-5">
//           <div className="mx-4">
//             <Button variant='contained' type='submit'
//             // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
//             sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
//             >Add Immigration</Button>
//             </div>
        
//           </div>
//         </div>
        
//         </form>
        
 
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }
// export default Addimmigration

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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: 1200,
  },
}));

const Addimmigration = ({ open, handleClose, refreshData }) => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const employeeData = useSelector(state => state.socket.messages);
  
  const [selectedDocumentType, setSelectedDocumentType] = React.useState();
  const [selectedIssueDate, setSelectedIssueDate] = React.useState();
  const [selectedExpiryDate, setSelectedExpiryDate] = React.useState();
  const [selectedEligibleDate, setSelectedEligibleDate] = React.useState();
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [data, setData] = React.useState([]);
  
  const department = [
    { name: 'GENETIC' },
    { name: "MICROBIOLOGY" },
    { name: "HEAMOTOLGY" },
    { name: "BIOCHEMISTRY" },
    { name: "HPLC" },
    { name: "AAS" },
    { name: "PARASITOLOGY" },
    { name: "GENERAL" },
  ];
  
  const url = process.env.REACT_APP_DEVELOPMENT;
  
  // Get data
  const getBanckAccount = async () => {
    await axios.get(`${url}/api/employees/general/get-bank-account/`)
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
  
  // Post data
  const onSubmit = async (formData) => {
    try {
      var obj = {
        document_type: moment.parseZone(selectedDocumentType).format("YYYY-MM-DD"),
        issue_date: moment.parseZone(selectedIssueDate).format("YYYY-MM-DD"),
        expired_date: moment.parseZone(selectedExpiryDate).format("YYYY-MM-DD"),
        eligible_review_date: moment.parseZone(selectedEligibleDate).format("YYYY-MM-DD"),
        country: selectedCountry,
        employee: employeeData.uuid,
        ...formData
      };
      await axios.post(`${url}/api/employees/general/create-immigration/`, obj)
        .then(response => {
          const newData = response.data.data;
          setData((prevData) => [...prevData, newData]);
          refreshData(); // Call the refresh function
          reset();
          handleClose();
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getBanckAccount(); // Fetch data on initial render
  }, []);
  
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
          <CloseIcon />
        </IconButton>
        <p className="whitboxtitle ml-4 my-4">Add Immigration</p>
        <Divider/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container my-4">
            <div className="d-flex align-items-center my-3">
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Document Type *</InputLabel>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  getOptionLabel={(department) => department.name}
                  options={department}
                  onChange={(event, value) => {
                    setSelectedDocumentType(value.name);
                  }}
                  sx={{ width: '100%', maxWidth: '500px' }}
                  renderInput={(params) => <TextField {...params} placeholder='Select Document Type' required />}
                />
              </div>
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Document Number *</InputLabel>
                <TextField
                  id="outlined-basic"
                  sx={{ width: '100%', maxWidth: '500px' }}
                  placeholder="Enter Document Number"
                  required
                  type="number"
                  variant="outlined"
                  {...register('document_number')}
                />
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Issue Date *</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    onChange={(newValue) => setSelectedIssueDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: '100%', maxWidth: '500px' }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Expired Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    onChange={(newValue) => setSelectedExpiryDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: '100%', maxWidth: '500px' }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Eligible Review Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    onChange={(newValue) => setSelectedEligibleDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: '100%', maxWidth: '500px' }} />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Document File *</InputLabel>
                <TextField
                  id="outlined-basic"
                  sx={{ width: '100%', maxWidth: '500px' }}
                  placeholder="Document File"
                  type="file"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="d-flex align-items-center my-3">
              <div className="col-6">
                <InputLabel htmlFor="outlined-basic">Country</InputLabel>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  getOptionLabel={(department) => department.name}
                  options={department}
                  onChange={(event, value) => {
                    setSelectedCountry(value.name);
                  }}
                  sx={{ width: '100%', maxWidth: '500px' }}
                  renderInput={(params) => <TextField {...params} placeholder='Select Country' required />}
                />
              </div>
            </div>
            <div className="d-flex my-5">
              <div className="mx-4">
                <Button variant='contained' type='submit' sx={{ borderRadius: 34, backgroundColor: '#2F69FF' }}>
                  Add Immigration
                </Button>
              </div>
            </div>
          </div>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default Addimmigration;
