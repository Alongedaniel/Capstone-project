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
import React, { useEffect, useState } from "react";
import "@fontsource/inter";
import HeartIcon from "../../Assets/Icons/HeartIcon";
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

const Navbar = () => {
  const { dispatch } = useSelectors();
  // const { authenticated } = User();
  const [authenticated, setauthenticated] = useState();
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
  useEffect(() => {
    setauthenticated(JSON.parse(localStorage.getItem("auth")) ?? null)
  })
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
    <Container sx={{ position: "fixed" }} maxWidth="xl" disableGutters>
      <Stack
        bgcolor="#f9f9f9"
        zIndex={999}
        py="16px"
        px={{ lg: "60px", xs: "16px" }}
        direction="row"
        justifyContent={mobile ? "space-between" : undefined}
        alignItems="center"
      >
        <Box sx={{ cursor: "pointer" }}>
          <Typography
            fontFamily="Inter"
            fontSize="24px"
            fontStyle="normal"
            fontWeight={700}
            lineHeight="24px"
            letterSpacing="0.72px"
          >
            uShopHere
          </Typography>
        </Box>
        {mobile ? (
          <Box>
            <MenuIcon />
          </Box>
        ) : (
          <>
            <Box
              flex={1}
              gap="48px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  py="3px"
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="24px"
                  sx={{
                    borderBottom: "1px solid transparent",
                    borderBottomColor:
                      location.pathname === item.path ? "#000" : "transparent",
                    cursor: "pointer",
                    "&:hover": {
                      borderBottomColor: "#000",
                    },
                  }}
                  key={item.name}
                  onClick={() => navigate(item.path)}
                >
                  {item.name === 'Sign up' && authenticated ? null : item.name}
                </Typography>
              ))}
            </Box>
            <Box display="flex" gap="24px" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                px="12px"
                // gap="16px"
                py="7px"
                bgcolor="#f5f5f5"
              >
                {/* <TextField sx={{
            borderColor: '#f5f5f5', fontSize: '12px', '& .MuiTextField-root': {
            borderColor: 'transparent'
            }
          }} id="search" name='search' placeholder='What are you looking for?' margin='none' size='small' inputProps={{
            endIcon: <SendIcon />
          }} /> */}
                <TextField
                  size="small"
                  id="search"
                  name="search"
                  type="search"
                  placeholder="What are you looking for?"
                  margin="none"
                  variant="standard"
                  fullWidth
                  sx={{ fontSize: "12px", width: "220px" }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <SearchIcon />
              </Box>
              {!showIcons && (
                <Box display="flex" gap="16px">
                  <Box
                    onClick={() => navigate("/wishlist")}
                    sx={{ cursor: "pointer" }}
                  >
                    <HeartIcon />
                  </Box>
                  <Box
                    onClick={() => navigate("/cart")}
                    sx={{ cursor: "pointer" }}
                  >
                    <CartIcon />
                  </Box>
                </Box>
              )}
              <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
                <ProfileIcon />
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <UserIcon />
                  Manage My Account
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <OrderIcon />
                  My Order
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <HeartIcon />
                  My Wishlist
                </MenuItem>
                {authenticated && <MenuItem
                  onClick={() => {
                    handleLogout();
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <LogoutIcon />
                  Logout
                </MenuItem>}
              </Menu>
            </Box>
          </>
        )}
      </Stack>
    </Container>
  );
};
export default Navbar;
