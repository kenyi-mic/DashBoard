import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatableSource";
import { Link } from "react-router-dom";

export const Datatable = () => {
  const actionColumns = [
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
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
