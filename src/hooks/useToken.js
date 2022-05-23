import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  
  const email = user?.user?.email;

  useEffect(() => {
    console.log("inside useToken", user, email);
  }, [user]);
  return [token];
};

export default useToken;
