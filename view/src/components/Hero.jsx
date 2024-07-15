import React, { useEffect } from "react";
import { Typography } from "@mui/material";

function Hero() {
  const [username, setUsername] = React.useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    setUsername(username);
  }, []);

  return (
    <Typography variant="h3" className="py-16">
      Good Morning, <strong>{username}</strong>!
    </Typography>
  );
}

export default Hero;
