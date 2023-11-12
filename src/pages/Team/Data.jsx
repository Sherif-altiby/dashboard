

export const rows = [
  {
    id: 1,
    name: "Sherif",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Admin",
  },

  {
    id: 2,
    name: "Sherif",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Admin",
  },

  {
    id: 3,
    name: "Sherif",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Admin",
  },

  {
    id: 4,
    name: "ebrahim",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Manager",
  },

  {
    id: 5,
    name: "ziad",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Manager",
  },

  {
    id: 6,
    name: "mahmoud",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Manager",
  },

  {
    id: 7,
    name: "omar",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "User",
  },

  {
    id: 8,
    name: "mohaned",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "User",
  },

  {
    id: 9,
    name: "Sherif",
    email: "sherifahmed852002@gmail.com",
    age: 21,
    phone: "(+20)1017143343",
    access: "Manager",
  },
];



const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "access",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          sx={{
            padding: "10px",
            width: "100px",
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "User"
                ? theme.palette.secondary.dark
                : "#1d415e",
          }}
        >
          {access === "Admin" ? (
            <AdminPanelSettingsOutlined  sx={{color:"#fff", fontSize :"20px"}}/>
          ) :   access === "User" ? (
            <LockOpenOutlined  sx={{color:"#fff", fontSize :"20px"}} />
          ) : (
            <SecurityOutlined   sx={{color:"#fff", fontSize :"20px"}} />
          )}

          <Typography sx={{ fontSize: "13px" , color:"#fff"}}> {access} </Typography>
        </Box>
      );
    },
  },
];