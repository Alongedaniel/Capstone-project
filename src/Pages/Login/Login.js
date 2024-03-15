import {
  Box,
  Button,
  // Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
import GoogleIcon from "../../Assets/Icons/GoogleIcon";
import AppleIcon from "../../Assets/Icons/AppleIcon";
// import { loginUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import useForm from "../../features/Form/Form";
import gilroyMed from '../../Assets/Gilroy-Font/Gilroy-Medium.ttf'

const Login = ({authenticated}) => {
  const {formik } = useForm()
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch, loading } = useSelectors();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  console.log(loading)
   console.log(authenticated)

  useEffect(() => {
    if (authenticated) {
      navigate("/")
    }
  }, [])

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
    <Stack justifyContent='center' alignItems="center" px='16px' 
        pb="140px"
        pt="91px" bgcolor='#fff'>
      <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '460px'}}>
        <Typography
    
            fontSize="14px"
            color='#5C6F7F'
            mb="16px"
            textAlign='center'
            fontFamily={gilroyMed}
          >
            Log in with:
          </Typography>
          <Box display='flex' gap='24px' alignItems='center' justifyContent='center' width='100%' mb="16px">
            <Button variant='contained' startIcon={<GoogleIcon />} sx={{width: '109px', height: '40px', borderRadius: '3px', bgcolor: '#005AE2', fontSize: '16px', color: '#fff', textTransform: 'none',  fontFamily: gilroyMed}}>
               Google
            </Button>
            <Button variant='contained' startIcon={<AppleIcon />} sx={{width: '109px', height: '40px', borderRadius: '3px', bgcolor: '#005AE2', fontSize: '16px', color: '#fff', textTransform: 'none', fontFamily: gilroyMed}}>
               Apple
            </Button>
          </Box>
          <Box width='100%' display='flex' alignItems='center' gap='20px' mb='45px'>
            <Box width='100%' height='1px' bgcolor='#A0B1C0'></Box>
            <Typography
    
            fontSize="14px"
            color='#5C6F7F'
            textAlign='center'
            fontFamily={gilroyMed}
          >
            Or
          </Typography>
            <Box width='100%' height='1px' bgcolor='#A0B1C0'></Box>
          </Box>
        <Stack>
          {(formik.errors.name && formik.touched.name) && <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            color='#f00'
          >{formik.errors.name}</Typography>}
          <Stack mb="16px">
            <Stack gap="40px">
              <Stack>
            {/* <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              placeholder="Email"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            /> */}
            <TextField
                      required
                       name="email"
              id="email"
                      sx={{ fontSize: "16px", color: "#A0B1C0", borderColor: '#005AE2', "& .MuiTextField-root":{
                         borderColor: '#005AE2', display: 'none'
                      } }}
                      type="email"
                     value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                      label="Email address"
                      fullWidth
                      // placeholder="Select origin"
                      InputProps={{
                        sx: {
                          // maxWidth: "540px",
                          borderRadius: "8px", // Apply border radius to the input element
                          height: "56px",
                          borderColor: "#005AE2",
                          fontSize: "16px",
                          color: "#A0B1C0",
                          fontFamily: gilroyMed
                        },
                      }}
                    />
            {(formik.errors.email && formik.touched.email) && <Typography
              fontSize="16px"
              fontWeight={400}
              lineHeight="24px"
              color='#f00'
            >{formik.errors.email}</Typography>}</Stack>
            <Stack>
              {/* <TextField
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
              /> */}
              <TextField
                      required
                       name="password"
                id="password"
                      sx={{ fontSize: "16px", color: "#A0B1C0", borderColor: '#005AE2', "& .MuiTextField-root":{
                         borderColor: '#005AE2', display: 'none'
                      } }}
                      type="password"
                     value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                      label="Password"
                      fullWidth
                      // placeholder="Select origin"
                      InputProps={{
                        sx: {
                          // maxWidth: "540px",
                          borderRadius: "8px", // Apply border radius to the input element
                          height: "56px",
                          borderColor: "#005AE2",
                          fontSize: "16px",
                          color: "#A0B1C0",
                          fontFamily: gilroyMed
                        },
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
          <Typography
    
            fontSize="14px"
            color='#4991FF'
            // mb="14px"
            textAlign='end'
            fontFamily={gilroyMed}
          >
            Forgot your password?
          </Typography>
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
              bgcolor="#005AE2"
              sx={{
                // px: "48px",
                width: '100%',
                py: "18px",
                borderRadius: '100px',
                textTransform: "none",
                fontSize: "14px",
                lineHeight: "24px",
                fontFamily: gilroyMed
              }}
              type='submit'
            >
              Log in
            </Button>
          </Stack>
          <Typography
            fontSize="14px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
            color='#6C6D71'
          >
            Don't have an account?{" "}
            <Typography
              // fontWeight={600}
              sx={{ cursor: "pointer", display: "inline", color: '#005AE2' }}
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </Typography>
          </Typography>
        </Stack>
        <Typography
            fontSize="12px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
            color='#A0B1C0'
            mt='16px'
            // width='400px'
          >
            By signing in with an account, you agree to <br/> Sciccor's{' '} 
            <Typography fontSize="12px"
              // fontWeight={600}
              sx={{ display: "inline", color: '#5C6F7F' }}
            >
              Terms of Service, Privacy Policy
            </Typography>
            and{' '}<Typography fontSize="12px"
              // fontWeight={600}
              sx={{ display: "inline", color: '#5C6F7F' }}
            >
              Acceptable Use Policy.
            </Typography>
          </Typography>
      </form>
      
    </Stack>
  );
};

export default Login;
