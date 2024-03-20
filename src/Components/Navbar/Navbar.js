import {
  Box,
  Container,
  // Input,
  Stack,
  TextField,
  Typography,
  Menu,
  MenuItem,
  // Divider,
} from "@mui/material";
import '../../App.css'
import React, { useEffect, useState } from "react";
import "@fontsource/inter";
import Logo from "../../Assets/SVGs/vector7.svg"
import expandMore from "../../Assets/SVGs/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
import Theme from "../../Theme/Theme";
import { useNavigate, useLocation } from "react-router-dom";

import useSelectors from "../../app/selectors";
import { logoutUser } from "../../features/users/userSlice";
// import User from "../../User/User";

const Navbar = ({authenticated, user}) => {
  const { dispatch } = useSelectors();
  // const { authenticated } = User();
  // const [authenticated, setauthenticated] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { mobile } = Theme();
  const showIcons =
    location.pathname === "/login" || location.pathname === "/sign-up";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // useEffect(() => {
  //   setauthenticated(JSON.parse(localStorage.getItem("auth")) ?? null)
  // })
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Sign up",
      path: "/sign-up",
    },
  ];
  const handleLogout = async () => {
    try {
      // Dispatch the createUserAsync action to create a user
      await dispatch(logoutUser());
      console.log("logout");
      // The above dispatch will automatically handle loading, success, and error states.
      // You can handle any further actions or UI updates as needed.

      // If the user creation was successful, navigate to the desired route
      // navigate("/login");
    } catch (error) {
      // Handle any errors, if necessary
    }
  };
  function getInitials(fullName) {
    const words = fullName.split(' ');
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    return initials;
  }
  return (
    <nav class="navbar" style={{padding: '12px 16px'}}>
        <div class="logo">( <img src={Logo} alt="logo" class="logo-image" />
          <div class="stroke"></div>
          <h2 class="logo-title">SCISSOR</h2>
        </div>
        <ul class="nav-items">
          <li><a class="nav-item" href="#">My URLs</a></li>
          <li><a class="nav-item" href="#section3">Features<img
            src={expandMore} alt="expand" /></a></li>
          <li><a class="nav-item" href="#section4">Pricing</a></li>
          <li><a class="nav-item" href="#">Analytics</a></li>
          <li><a class="nav-item" href="#faq-section">FAQs`</a></li>
        </ul>
      {authenticated ? <Box onClick={(e) => handleClick(e)} width='50px' height='50px' borderRadius='100%' bgcolor='#0065FE' display='flex' alignItems={'center'} justifyContent={'center'}>
        <Typography textTransform='uppercase' fontSize={'24px'}>{getInitials(user?.displayName ?? user?.email)}</Typography>
      </Box>
        : <div class="cta"> <button class="btn" onClick={() => navigate('/login')}>Log in</button> <button onClick={() => navigate('/sign-up')} class="btn">Try for free</button> </div>}
      
      {/* <div class="menu"> <img src={menu} alt="menu" /> </div> */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            p: 0,
            width: '300px',
            top: '50px !important'
          }
        }}
      >
        
        {user?.displayName  && <MenuItem
          sx={{
            fontFamily: 'Open Sans',
            letterSpacing: '0.0015em',
            m: 0,
            mt: '4px'
          }}
        >
          Logged in as {user?.displayName}
        </MenuItem>}
        <MenuItem
          sx={{
            fontFamily: 'Open Sans',
            letterSpacing: '0.0015em',
            m: 0,
            mt: '4px'
          }}
        >
          {user?.email}
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: 'Open Sans',
            letterSpacing: '0.0015em',
            color: '#E75541',
            m: 0,
            mt: '4px'
          }}
          onClick={() => {
            dispatch(logoutUser())
            handleClose()
          }}
        >
          Sign out
        </MenuItem>
      </Menu>
      </nav>
  );
};
export default Navbar;
