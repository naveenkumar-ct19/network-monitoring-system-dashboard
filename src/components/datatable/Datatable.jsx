import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <form action="https://10.10.237.155:6909">
                   <input type="submit" target="blank" className="viewButton" value="connect" />
</form>              {/* <div className="viewButton"><a href="https://10.10.237.155:6909">Connect</a></div> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              shutdown
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        System Logs
        {<Link to="/users/new" className="link">
          Scan
        </Link> }
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
