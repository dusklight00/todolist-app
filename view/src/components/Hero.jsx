import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Greetings from "./Greetings";

function Hero() {
  const [username, setUsername] = React.useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    setUsername(username);
  }, []);

  return (
    <Typography variant="h3" className="py-16">
      <Greetings /> <strong>{username}</strong>!
    </Typography>
  );
}

export default Hero;
