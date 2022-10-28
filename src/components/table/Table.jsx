import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      name : "ccl-1",
      ip : "192.168.56.1",
      subnet: "255.255.255.0",
      date: "12 Dec",
      lab: "Cloud Lab",
      status: "Online",
    },
    {
      id: 2235235,
      name : "ccl-2",
      ip : "192.168.56.23",
      subnet: "255.255.255.0",
      date: "1 March",
      lab: "Cloud Lab",
      status: "Offline",
    },
    {
      id: 2342353,
      name : "ccl-3",
      ip : "192.168.56.35",
      subnet: "255.255.255.0",
      date: "21 Aug",
      lab: "Cloud Lab",
      status: "Offline",
    },
    {
      id: 2357741,
      name : "ccl-4",
      ip : "192.168.56.40",
      subnet: "255.255.255.0",
      date: "1 June",
      lab: "Cloud Lab",
      status: "Online",
    },
    {
      id: 2342355,
      name : "ccl-5",
      ip : "192.168.56.46",
      subnet: "255.255.255.0",
      date: "5 March",
      lab: "Cloud Lab",
      status: "Offline",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Systems Name</TableCell>
            <TableCell className="tableCell">IP Address</TableCell>
            <TableCell className="tableCell">Subnet </TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Lab Name</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.ip}</TableCell>
              <TableCell className="tableCell">{row.subnet}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.lab}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
