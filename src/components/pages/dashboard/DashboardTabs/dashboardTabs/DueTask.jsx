import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const DueTask = () => {

    
    const columns = [
        { field: 'id', headerName: 'SL', width: 90 },
        { field: 'Title', headerName: 'Title', width: 150 },
        { field: 'OpeningStatus', headerName: 'Opening Status', width: 150 },
        { field: 'Clients', headerName: 'Clients', width: 150 },
        
          

    ];
    
      const rows = [
         { id: 1, Title: 'Icy', OpeningStatus: 'Laura@gmail.com', Clients: 1234567890,  },
        // { id: 2, Title: 'Icy', OpeningStatus: 'Laura@gmail.com', Clients: 1234567890,  },    
        // { id: 3, Title: 'Icy', OpeningStatus: 'Laura@gmail.com', Clients: 1234567890,  },
      
    
      ];
  return (
    <div>
        <div>
            <div className='border border-dark  rounded'>
                <div className='d-flex ' style={{ justifyContent: "space-between" }}>
                <h3 style={{color:'#2F69FF', margin:'10px'}}>Due Task</h3>
                <Link to='/'
              className=" rounded p-1  "
              style={{ background: "#2F69FF", color: "white", margin: "10px" }}
            >
              View All
            </Link>
                </div>
            
            <hr />
            <Box sx={{ height: 200, width: '100%', backgroundColor:'white',p:1 }} m-3>
      <DataGrid
        rows={rows}
        columns={columns }
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
            </div>
        </div>
    </div>
  )
}

export default DueTask