import React, { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/reciepe`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  return [menu, loading];
};

export default UseMenu;
