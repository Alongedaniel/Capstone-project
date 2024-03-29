import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
// import Wishlist from "../Pages/Wishlist/Wishlist";
// import Cart from "../Pages/Cart/Cart";
import { Box, Typography } from "@mui/material";
import useSelectors from "../app/selectors";
import useForm from "../features/Form/Form";
import Footer from "../Components/Footer/Footer";
// import User from "../User/User";
// import RequireAuth from "../Components/RequireAuth/RequireAuth";

const OnSuccess = () => {
  const { loading, error, type } = useSelectors()
  const { showSuccess, setShowSuccess } = useForm()
  
  useEffect(() => {
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  })
  return (
    <>
      {showSuccess && <Box zIndex={6} position='fixed' top='100px' right='100px' p='5px' bgcolor={loading === 'succeeded' ? 'success.light' : 'error.main'}>
        {error ? <Typography
          fontSize="16px"
          fontWeight={400}
          lineHeight="24px"
        >{error + '!'}</Typography> : type.includes('login') ? <Typography
          fontSize="16px"
          fontWeight={400}
          lineHeight="24px"
          >Logged in successfully!</Typography> : type.includes('create') ? <Typography
            fontSize="16px"
            fontWeight={400}
            lineHeight="24px"
            >Account created successfully!</Typography> : <Typography
              fontSize="16px"
              fontWeight={400}
              lineHeight="24px"
            >Logged out successfully!</Typography>}
      </Box>}</>
  )
}

const PrivateRoutes = () => {
  const { dispatch, loading, type } = useSelectors();
     const [authenticated, setAuthenticated] = useState(false);
     const [user, setUser] = useState({});
  console.log(authenticated)

  useEffect(() => {
    // setauthenticated(JSON.parse(localStorage.getItem("auth")))
    try {
      const jsonValue = localStorage.getItem("auth");
      const userValue = localStorage.getItem("user");
      const value = JSON.parse(jsonValue);
      const users = JSON.parse(userValue);
      // Use the value here
      setAuthenticated(value)
      setUser(users)
      console.log('running')
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    // if (authenticated) {
    //   navigate("/")
    // }
  }, [authenticated, loading])
  
  return (
    <Router>
      <OnSuccess />
      <Routes>
        <Route path="/*">
          <Route
            path="login"
            element={
              <>
                <Login authenticated={authenticated} />
                <Footer />
              </>
            }
          />
          <Route
            path="sign-up"
            element={
              <>
                <SignUp authenticated={authenticated} />
                <Footer />
              </>
            }
          />
          <Route
            path=""
            element={<MainLayout authenticated={authenticated} user={user}>
                <Home />
              </MainLayout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
