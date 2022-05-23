import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatableSource";

export const Datatable = () => {
  const activeColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "200",
      renderCell: () => {
        return (
          <div className="cellWithAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
