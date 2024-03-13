import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
import GoogleIcon from "../../Assets/Icons/GoogleIcon";
import { useNavigate } from "react-router-dom";
import Popup from "../../Components/Modals/Popup";
// import { createUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
import useForm from "../../features/Form/Form";
// import User from "../../User/User";

const SignUp = () => {
  const {formik} = useForm()
  // const {authenticated} = User()
  const [authenticated, setAuthenticated] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { dispatch, loading, type } = useSelectors();
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // setauthenticated(JSON.parse(localStorage.getItem("auth")))
    try {
      const jsonValue = localStorage.getItem("auth");
      const value = JSON.parse(jsonValue);
      // Use the value here
      setAuthenticated(value)
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    if (authenticated) {
      navigate("/")
    }
  })

  const onSubmit =async (e)  => {
    console.log(authenticated)
    e.preventDefault()
    await formik.handleSubmit()
    if (authenticated)
      navigate("/");
  }
  
  return (
    <Stack>
      <Stack
        direction="row"
        gap="130px"
        alignItems="center"
        pb="140px"
        pt="30px"
      >
        <OnboardingSideIcon />
        <form onSubmit={onSubmit}>
        <Stack maxWidth="381px">

          <Typography
            fontFamily="Inter"
            fontSize="36px"
            fontWeight={500}
            lineHeight="30px"
            letterSpacing="1.44px"
            mb="24px"
          >
            Create an account
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            mb="48px"
          >
            Enter your details below
          </Typography>
          <Stack gap="40px" mb="40px">
            
              <Stack>
                <TextField
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                  id="name"
                  onBlur={formik.handleBlur}
                  variant="standard"
                  placeholder="Name"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                />
                {(formik.errors.name && formik.touched.name) && <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  color='#f00'
                >{formik.errors.name}</Typography>}</Stack>
              <Stack>
                <TextField
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  variant="standard"
                  placeholder="Email"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                />
                {(formik.errors.email && formik.touched.email) && <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  color='#f00'
                >{formik.errors.email}</Typography>}</Stack>
              <Stack>
                <TextField
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  id="password"
                  onBlur={formik.handleBlur}
                  variant="standard"
                  placeholder="Password"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                />
                {(formik.errors.password && formik.touched.password) && <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  color='#f00'
                >{formik.errors.password}</Typography>}</Stack>
                
            
          </Stack>
          <Stack justifyContent="center" mb="32px" gap="16px">
              <Button
                disabled={loading === 'pending'}
              variant="contained"
              bgcolor="#DB4444"
              sx={{
                py: "16px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              type="submit"
            >
              Create Account
            </Button>
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              sx={{
                py: "16px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              onClick={handleOpen}
            >
              Sign up with Google
            </Button>
          </Stack>
          <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
          >
            Already have an account?{" "}
            <Typography
              fontWeight={600}
              sx={{ cursor: "pointer", display: "inline" }}
              onClick={() => navigate("/login")}
            >
              Log in
            </Typography>
          </Typography>
        </Stack>
        </form>
      </Stack>
      <Popup open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default SignUp;
