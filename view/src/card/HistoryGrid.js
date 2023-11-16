import React from 'react'

import { DataGrid } from "@mui/x-data-grid";

export default function HistoryGrid({HistoryObj, isDarkTheme}) {
    
   
    const columns = [
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
  return (
    <div className=''>
      <DataGrid style={{backgroundColor: isDarkTheme?"white":"white", }}
        rows={HistoryObj} 
        columns={columns} 
       />
    </div>
  )
}
