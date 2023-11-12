import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberRegex = /^[0-9]+$/;
const data = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ flexDirection: "row", gap: 2 }}>
        <TextField
          error={errors.firstName}
          helperText={errors.firstName ? "These filed requierd" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          id="filled-basic"
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          error={errors.lastName}
          helperText={errors.lastName ? "These filed requierd" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Stack>
      <TextField
        error={errors.email}
        helperText={errors.email ? "Enter valid emial" : null}
        {...register("email", { required: true, pattern: emailRegex })}
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <TextField
        error={errors.number}
        helperText={errors.number ? "Enter valid phone number" : null}
        {...register("number", { required: true, pattern: numberRegex })}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
      <TextField
        error={errors.Address1}
        helperText={errors.Address1 ? "These filed requierd" : null}
        {...register("Address1", { required: true, minLength: 3 })}
        id="filled-basic"
        label="Address 1"
        variant="filled"
      />
      <TextField id="filled-basic" label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" type="submit">
          Create new user
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Profile;
