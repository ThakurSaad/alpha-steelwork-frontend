import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/users/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) {
          setAdmin(data.admin);
        } else {
          setAdmin(false);
        }
        setAdminLoading(false);
      });
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
