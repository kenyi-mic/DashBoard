import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatableSource";

export const Datatable = () => {
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
