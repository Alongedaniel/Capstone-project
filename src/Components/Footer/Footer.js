import React from "react";
// import {
//   Stack,
//   Typography,
//   Box,
//   InputAdornment,
//   TextField,
// } from "@mui/material";
// import SendIcon from "../../Assets/Icons/SendIcon";
import chain from "../../Assets/SVGs/chain.svg"
import line from "../../Assets/SVGs/line.svg"
import twitter from "../../Assets/SVGs/i-fi-social-twitter.svg"
import feather from "../../Assets/SVGs/svg-feather.svg"
import linkedin from "../../Assets/SVGs/i-fi-social-linkedin.svg"
import facebook from "../../Assets/SVGs/i-fi-social-facebook.svg"
import svg13 from "../../Assets/SVGs/13.svg"
import svg14 from "../../Assets/SVGs/14.svg"
import svg16 from "../../Assets/SVGs/16.svg"
import svg17 from "../../Assets/SVGs/17.svg"
import svg18 from "../../Assets/SVGs/18.svg"
import svg19 from "../../Assets/SVGs/19.svg"
import { logoutUser } from "../../features/users/userSlice";
import useSelectors from "../../app/selectors";
// import lo

const Footer = () => {
    const {dispatch} = useSelectors()
  return (
    <footer class="footer-container">
      <div class="content">
        <div class="footer-left">
          <div class="footer-left-top"> <img src={chain} alt="" /> <img
            src={line} alt="" />
            <h1 class="footer-header">SCISSOR</h1>
          </div>
          <div class="footer-left-bottom"> <img src={twitter} alt="" /><img
            src={feather} alt="" /><img src={linkedin}
              alt="" /><img src={facebook} alt="" /> </div>
          <h3 style={{cursor: 'pointer', zIndex: 5}} onClick={() => dispatch(logoutUser())}>Logout</h3>
        </div>
        <div class="footer-right">
          <div class="footer-right-items">
            <div class="footer-right-content">
              <h3 class="footer-subheader">Why Scissor?</h3>
              <p class="footer-options">Scissor 101 </p>
              <p class="footer-options">Integrations & API</p>
              <p class="footer-options">Pricing</p>
            </div>
            <div class="footer-right-content">
              <h3 class="footer-subheader">Solutions</h3>
              <p class="footer-options">Social Media </p>
              <p class="footer-options"> Digital Marketing</p>
              <p class="footer-options">Customer Service</p>
              <p class="footer-options">For Developers</p>
            </div>
            <div class="footer-right-content">
              <h3 class="footer-subheader">Products</h3>
              <p class="footer-options">Link Management </p>
              <p class="footer-options">QR Codes</p>
              <p class="footer-options">Link-in-bio</p>
            </div>
            <div class="footer-right-content">
              <h3 class="footer-subheader">Company</h3>
              <p class="footer-options">About Scissor </p>
              <p class="footer-options">Careers</p>
              <p class="footer-options">Partners</p>
              <p class="footer-options">Press</p>
              <p class="footer-options">Contact</p>
              <p class="footer-options">Reviews</p>
            </div>
          </div>
          <div class="footer-right-items">
            <div class="footer-right-content">
              <h3 class="footer-subheader">Resources </h3>
              <p class="footer-options">Blog</p>
              <p class="footer-options">Resource Library</p>
              <p class="footer-options">Developers</p>
              <p class="footer-options">App Connectors</p>
              <p class="footer-options">Support</p>
              <p class="footer-options">Trust Center</p>
              <p class="footer-options">Browser Extension</p>
              <p class="footer-options">Mobile App</p>
            </div>
            <div class="footer-right-content">
              <h3 class="footer-subheader">Features</h3>
              <p class="footer-options">Branded Links </p>
              <p class="footer-options">Mobile Links</p>
              <p class="footer-options">Campaign</p>
              <p class="footer-options">Management & Analytics</p>
              <p class="footer-options">QR Code generation</p>
            </div>
            <div class="footer-right-content">
              <h3 class="footer-subheader">Legal</h3>
              <p class="footer-options">Privacy Policy </p>
              <p class="footer-options">Cookie Policy</p>
              <p class="footer-options">Terms of Service</p>
              <p class="footer-options">Acceptable Use Policy</p>
              <p class="footer-options">Code of Conduct</p>
            </div>
          </div>
        </div>
      </div> <img src={svg13} alt="" class="img footer-img-left" /> <img src={svg14}
        alt="" class="img footer-img-left" /> <img src={svg19} alt="" class="img footer-img-left" />
      <img src={svg16} alt="" class="img img-right" /> <img src={svg17} alt=""
        class="img img-right" /> <img src={svg18} alt="" class="img img-right" />
      <div class="last">
        <p class="text">Terms of Services</p>
        <div class="line"></div>
        <p class="text">Security</p>
        <div class="line"></div>
        <p class="text">Scissor 2023</p>
      </div>
    </footer>
    // <Stack bgcolor="#000" pt="80px" pb="24px">
    //   <Box
    //     display="flex"
    //     px={{ lg: "60px", xs: "16px" }}
    //     mb="60px"
    //     justifyContent="space-between"
    //   >
    //     <Box float="left">
    //       <Typography
    //         fontFamily="Inter"
    //         fontSize="24px"
    //         mb="24px"
    //         fontWeight={700}
    //         lineHeight="24px"
    //         letterSpacing="0.72px"
    //         color="#fafafa"
    //       >
    //         uShopHere
    //       </Typography>
    //       <Typography
    //         fontSize="20px"
    //         fontWeight={500}
    //         mb="24px"
    //         lineHeight="28px"
    //         color="#fafafa"
    //       >
    //         Subcribe
    //       </Typography>
    //       <Typography
    //         fontSize="16px"
    //         mb="16px"
    //         fontWeight={500}
    //         lineHeight="24px"
    //         color="#fafafa"
    //       >
    //         Get 10% off your first order
    //       </Typography>
    //       {/* <TextField sx={{
    //         borderColor: '#f5f5f5', bgcolor: 'red', color: 'blue', fontSize: '212px', '& .MuiTextField-outlined': {
    //           borderColor: '#fff'
    //         }
    //       }} id="email" InputProps={{
    //         endAdornment: (
    //           <InputAdornment position="end">
    //             <SendIcon />
    //           </InputAdornment>
    //         ),
    //         }} name='email' placeholder='Enter your email' margin='none' size='small' /> */}
    //       <TextField
    //         id="email"
    //         name="email"
    //         placeholder="Enter your email"
    //         type="email"
    //         size="small"
    //         margin="none"
    //         variant="standard"
    //         sx={{
    //           fontSize: "12px",
    //           px: "16px",
    //           py: "12px",
    //           borderRadius: "4px",
    //           border: "1px solid #fafafa",
    //           "& input": {
    //             color: "#fafafa",
    //             padding: "0px",
    //           },
    //           zIndex: 1,
    //         }}
    //         InputProps={{
    //           endAdornment: (
    //             <InputAdornment sx={{ cursor: "pointer" }} position="end">
    //               <SendIcon />
    //             </InputAdornment>
    //           ),
    //           disableUnderline: true,
    //         }}
    //       />
    //     </Box>
    //     <Box display="flex" gap="87px">
    //       <Box>
    //         <Typography
    //           fontSize="20px"
    //           fontWeight={500}
    //           mb="24px"
    //           lineHeight="28px"
    //           color="#fafafa"
    //         >
    //           Support
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //         >
    //           No.5 Close E, Ikeja, Lagos
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //         >
    //           alongedaniel41@gmail.com
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //         >
    //           0916000000
    //         </Typography>
    //       </Box>
    //       <Box>
    //         <Typography
    //           fontSize="20px"
    //           fontWeight={500}
    //           mb="24px"
    //           lineHeight="28px"
    //           color="#fafafa"
    //         >
    //           Account
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           My Account
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Login/Register
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Cart
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Wishlist
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Shop
    //         </Typography>
    //       </Box>
    //       <Box>
    //         <Typography
    //           fontSize="20px"
    //           fontWeight={500}
    //           mb="24px"
    //           lineHeight="28px"
    //           color="#fafafa"
    //         >
    //           Quick Link
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Privacy Policy
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Term Of Use
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           mb="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           FAQ
    //         </Typography>
    //         <Typography
    //           fontSize="16px"
    //           fontWeight={500}
    //           lineHeight="24px"
    //           color="#fafafa"
    //           sx={{ cursor: "pointer" }}
    //         >
    //           Contact
    //         </Typography>
    //       </Box>
    //     </Box>
    //   </Box>
    //   <Box height="1px" bgcolor="#fff" sx={{ opacity: 0.5 }}></Box>
    //   <Box
    //     pt="16px"
    //     px={{ lg: "60px", xs: "16px" }}
    //     display="flex"
    //     justifyContent="center"
    //   >
    //     <Typography
    //       fontSize="16px"
    //       fontWeight={400}
    //       lineHeight="24px"
    //       color="#555"
    //     >
    //       &copy; Copyright 2023. All rights reserved
    //     </Typography>
    //   </Box>
    // </Stack>
  );
};

export default Footer;
