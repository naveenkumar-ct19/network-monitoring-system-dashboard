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
    width: 150,
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
    ip: "10.10.237.151	",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 2,
    username: "ccl-2",
    ip: "10.10.237.152",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 3,
    username: "ccl-3",
    ip: "10.10.237.153",
    status: "Offline",
    subnet: "255.255.255.0",
    os: "windows",
  },
  {
    id: 4,
    username: "ccl-4",
    ip: "10.10.237.154",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 5,
    username: "ccl-5",
    ip: "10.10.237.155",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 6,
    username: "ccl-6",
    ip: "10.10.237.156",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 7,
    username: "ccl-7",
    ip: "10.10.237.1527",
    status: "Offline",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 8,
    username: "Naveen",
    ip: "192.168.43.96",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Windows",
  },
  {
    id: 9,
    username: "kishore",
    ip: "192.168.43.94",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Chrome",
  },
  {
    id: 10,
    username: "Rameshraja",
    ip: "192.168.40.92",
    status: "Online",
    subnet: "255.255.255.0",
    os: "Linux",
  },
  {
    id: 11,
    username: "ccl-11",
    ip: "10.10.237.161",
    status: "Online",
    subnet: "255.255.255.0",
    os: "windows",
  },
];
