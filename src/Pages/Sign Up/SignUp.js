import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import OnboardingSideIcon from "../../Assets/Icons/OnboardingSideIcon";
import GoogleIcon from "../../Assets/Icons/GoogleIcon";
import { useNavigate } from "react-router-dom";
import Popup from "../../Components/Modals/Popup";
// import { createUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
import useForm from "../../features/Form/Form";
import gilroyMed from '../../Assets/Gilroy-Font/Gilroy-Medium.ttf'
import gilroySem from '../../Assets/Gilroy-Font/Gilroy-Bold.ttf'
import AppleIcon from "../../Assets/Icons/AppleIcon";
// import User from "../../User/User";

const SignUp = ({authenticated}) => {
  const {formik} = useForm()
  // const {authenticated} = User()
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

    if (authenticated) {
      navigate("/")
    }
  }, [authenticated, loading])

  const onSubmit =async (e)  => {
    console.log(authenticated)
    e.preventDefault()
    await formik.handleSubmit()
    if (authenticated)
      navigate("/");
  }
  
  return (authenticated ? <Navigate to="/" /> :
    <Stack px='16px' 
        pb="140px"
        pt="91px" bgcolor='#fff'>
      <Stack
        alignItems="center"
        justifyContent='center'
      >
        <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '460px'}}>
          <Typography
    
            fontSize="14px"
            color='#5C6F7F'
            mb="16px"
            textAlign='center'
            fontFamily={gilroyMed}
          >
            Sign up with:
          </Typography>
          <Box display='flex' gap='24px' alignItems='center' justifyContent='center' width='100%' mb="16px">
            <Button  onClick={handleOpen} variant='contained' startIcon={<GoogleIcon />} sx={{width: '109px', height: '40px', borderRadius: '3px', bgcolor: '#005AE2', fontSize: '16px', color: '#fff', textTransform: 'none',  fontFamily: gilroyMed}}>
               Google
            </Button>
            <Button  onClick={handleOpen} variant='contained' startIcon={<AppleIcon />} sx={{width: '109px', height: '40px', borderRadius: '3px', bgcolor: '#005AE2', fontSize: '16px', color: '#fff', textTransform: 'none', fontFamily: gilroyMed}}>
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
          <Stack gap="40px" mb="40px">
            
              <Stack>
                <TextField
                        name="name"
                  id="name"
                      sx={{ fontSize: "16px", color: "#A0B1C0", borderColor: '#005AE2', "& .MuiTextField-root":{
                         borderColor: '#005AE2', display: 'none'
                      } }}
                      type="text"
                     value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
                      label="Username"
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
                {(formik.errors.name && formik.touched.name) && <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  color='#f00'
                >{formik.errors.name}</Typography>}</Stack>
              <Stack>
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
                >{formik.errors.password}</Typography>}</Stack>
                
            
          </Stack>
          <Stack justifyContent="center" mb="32px" gap="16px">
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
                fontFamily: gilroySem
              }}
              type='submit'
            >
              Sign up with Email
            </Button>
          </Stack>
          <Typography
            fontSize="14px"
            fontWeight={400}
            lineHeight="24px"
            align="center"
            color='#5C6F7F'
          >
            Already have an account?{" "}
            <Typography
            fontSize="14px"
            color='#005AE2'
              sx={{ cursor: "pointer", display: "inline" }}
              onClick={() => navigate("/login")}
            >
              Log in
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
      <Popup open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default SignUp;
