import React from 'react'

import { DataGrid } from "@mui/x-data-grid";

export default function HistoryGrid({HistoryObj, isDarkTheme, studio}) {
  let columns;
   if(studio){
     columns = [
      {
        field: "id1",
        headerName: "No.",
        filterable: false,
        renderCell: (index) =>
          index.api.getRowIndexRelativeToVisibleRows(index.row.id) + 1,
      },
      { field: "program_name", headerName: "Program", width:150 },
      { field: "host_name",  headerName: "Host", width:150 },
      {
        field: "scheduled_date",
        headerName: "Scheduled Date",
        width : 150
        
      },
      { field: "scheduled_s_time", headerName: "S-time", width: 80 },
      { field: "scheduled_e_time", headerName: "E-time"},
      
      {
        field: "saved_date",
        headerName: "Saved Date",
        
      },
      
    ];
   }else{

    columns = [
      {
        field: "id1",
        headerName: "No.",
        filterable: false,
        renderCell: (index) =>
          index.api.getRowIndexRelativeToVisibleRows(index.row.id) + 1,
      },
      { field: "title", headerName: "Title", width:150 },
      { field: "body",  headerName: "Proposal", width:250 },
      {
        field: "saved_date",
        headerName: "Saved Date",
        
      },
      {
        field: "place",
        headerName: "Destination",
        width:150
      },
      { field: "days", headerName: "Days", width: 80 },
      { field: "from", headerName: "Departure Day"},
      
    ];

   }
   
  return (
    <div className=''>
      <DataGrid style={{backgroundColor: isDarkTheme?"white":"white", }}
        rows={HistoryObj} 
        columns={columns} 
       />
    </div>
  )
}
