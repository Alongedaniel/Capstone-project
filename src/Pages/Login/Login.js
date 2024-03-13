import {
  // Box,
  Button,
  // Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
// import { loginUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../features/Form/Form";

const Login = () => {
  const {formik } = useForm()
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch, loading } = useSelectors();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  console.log(loading)

  const [authenticated, setAuthenticated] = useState();
  console.log(authenticated)

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

  const onSubmit = (e) => {
    e.preventDefault()
    formik.handleSubmit()
    if (loading === 'succeeded') {
      if (location?.state?.prevPath)
        return navigate(location?.state?.prevPath, {replace: true})
      navigate('/')
    }
    console.log(location?.state?.prevPath)
  }
  
  return (
    <Stack direction="row" gap="130px" alignItems="center" pb="140px" pt="30px">
      <OnboardingSideIcon />
      <form onSubmit={onSubmit}>
        <Stack maxWidth="381px">
          {(formik.errors.name && formik.touched.name) && <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            color='#f00'
          >{formik.errors.name}</Typography>}
          <Typography
            fontFamily="Inter"
            fontSize="36px"
            fontWeight={500}
            lineHeight="30px"
            letterSpacing="1.44px"
            mb="24px"
          >
            Log in to uShopHere
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
              >{formik.errors.password}</Typography>}
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb="32px"
          >
            <Button
              disabled={loading === 'pending'}
              variant="contained"
              bgcolor="#DB4444"
              sx={{
                px: "48px",
                py: "16px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
              }}
              type='submit'
            >
              Log in
            </Button>
            <Typography
              sx={{ cursor: "pointer" }}
              fontSize="16px"
              fontWeight={400}
              lineHeight="24px"
              color="#DB4444"
            >
              Forget Password?
            </Typography>
          </Stack>
          <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
          >
            Don't have an account?{" "}
            <Typography
              fontWeight={600}
              sx={{ cursor: "pointer", display: "inline" }}
              onClick={() => navigate("/sign-up")}
            >
              Create account
            </Typography>
          </Typography>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
