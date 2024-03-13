import React, { useEffect, useState } from 'react'
import { Navigate} from 'react-router-dom';
// import User from '../../User/User';

const RequireAuth = ({ children }) => {
    // const { authenticated } = User()
    // const location = useLocation();
    // const navigate = useNavigate()
    const [authenticated, setauthenticated] = useState();
    useEffect(() => {
        setauthenticated(JSON.parse(localStorage.getItem("auth")))
    })
    console.log(authenticated)
    // useEffect(() => {
    //     if (!authenticated) {
    //         navigate('/login', {
    //             state: {
    //                 prevPath: location.pathname
    //             }
    //         });
    //     }
    //     // return <Typography>Not Auth</Typography>
    // })
    return authenticated ? children : <Navigate to="/login" />

};

export default RequireAuth
