import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import PowerIcon from '@mui/icons-material/Power';


const Datatable = () => {
  const [data, setData] = useState(userRows);

  function confirmAction() {
    /*let confirmAction =*/ window.confirm("192.168.56.48 successfully shutdown");
    /*if (confirmAction) {
      alert("192.168.56.48 successfully shutdown");
    } else {
      alert("Action canceled");
    } */
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return  (
              < div className="cellAction">
                <form action="https://10.10.237.155:8112" target="_blank">
                       <input type="submit" className="viewButton" value="connect" />
    </form>     
    <form action="https://10.10.237.155:8111" target="_blank">
    
                       <button type="submit" className="btn btn-primary" value="c" >
                       <PowerIcon
                         className="icon"
                         style={{
                         backgroundColor: "rgba(218, 165, 32, 0.2)",
                         color: "goldenrod",
                         }}
                        />
                       </button>
    </form>     
             {/* <div className="viewButton"><a href="https://10.10.237.155:6909">Connect</a></div> */}
                <div
                  className="deleteButton"
                  onClick={() => confirmAction(handleDelete(params.id))}
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
        {<Link to="/users/" onClick={() => window.location.reload()} className="link">
          Scan
        </Link> }
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
};

export default Datatable;
