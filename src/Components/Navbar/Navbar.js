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
import HeartIcon from "../../Assets/Icons/HeartIcon";
import Logo from "../../Assets/SVGs/vector7.svg"
import expandMore from "../../Assets/SVGs/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
import menu from "../../Assets/SVGs/menu_FILL0_wght400_GRAD0_opsz48.svg"
import CartIcon from "../../Assets/Icons/CartIcon";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import Theme from "../../Theme/Theme";
import MenuIcon from "../../Assets/Icons/MenuIcon";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileIcon from "../../Assets/Icons/ProfileIcon";
import UserIcon from "../../Assets/Icons/UserIcon";
import OrderIcon from "../../Assets/Icons/OrderIcon";
import LogoutIcon from "../../Assets/Icons/LogoutIcon";
import useSelectors from "../../app/selectors";
import { logoutUser } from "../../features/users/userSlice";
// import User from "../../User/User";

const Navbar = ({authenticated}) => {
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
  return (
    <nav class="navbar" style={{padding: '12px 16px'}}>
        <div class="logo"> <img src={Logo} alt="logo" class="logo-image" />
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
        {authenticated ? <h3 style={{cursor: 'pointer', zIndex: 5}} onClick={() => dispatch(logoutUser())}>Logout</h3> :<div class="cta"> <button class="btn" onClick={() => navigate('/login')}>Log in</button> <button onClick={() => navigate('/sign-up')} class="btn">Try for free</button> </div>}
        {/* <div class="menu"> <img src={menu} alt="menu" /> </div> */}
      </nav>
  );
};
export default Navbar;
