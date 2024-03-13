import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setauthenticated] = useState(null);
  // const controller = new AbortController()
  useEffect(() => {
    const getAuth = localStorage.getItem("auth");
    const storedUser = localStorage.getItem("user");
    console.log(localStorage.getItem("auth"), storedUser, 'ran')
    if (storedUser !== undefined && getAuth !== undefined) {
      setUser(JSON.parse(storedUser));
      setauthenticated(JSON.parse(getAuth));
    }
    // return () => {
    //   controller.abort()
    // }
  }, []);
  return { user, authenticated };
};

export default User;
