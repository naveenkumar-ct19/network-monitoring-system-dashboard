export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Systems",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "ip",
    headerName: "IP Address",
    width: 230,
  },

  {
    field: "subnet",
    headerName: "Subnet",
    width: 150,
  },

  {
    field: "os",
    headerName: "Operating system",
    width: 150,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "ccl-1",
    status: "Online",
    ip: "192.168.56.1	",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 2,
    username: "ccl-2",
    ip: "192.168.56.15",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 3,
    username: "ccl-3",
    ip: "192.168.56.18",
    status: "Offline",
    subnet: "255.255.255.0",
    os: "Chrome",
  },
  {
    id: 4,
    username: "Kishore",
    ip: "192.168.56.21",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 5,
    username: "ccl-5",
    ip: "192.168.56.28",
    status: "Offline",
    subnet: "255.255.255.0",
    os: "Chrome",
  },
  {
    id: 6,
    username: "Naveen",
    ip: "192.168.56.33",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 7,
    username: "ccl-7",
    ip: "192.168.56.38",
    status: "Offline",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 8,
    username: "ccl-8",
    ip: "192.168.56.40",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 9,
    username: "ccl-9",
    ip: "192.168.56.46",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Chrome",
  },
  {
    id: 10,
    username: "Rameshraja",
    ip: "192.168.56.48",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 11,
    username: "ccl-11",
    ip: "192.168.56.50",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
];
