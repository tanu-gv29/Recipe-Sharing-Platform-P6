// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>🍽️ Recipe Hub</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/recipes">Recipes</Link></li>
//         <li><Link to="/add-recipe">Add Recipe</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Sign Up</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0, 0, 0, 0.8)", // Transparent Dark Background
        backdropFilter: "blur(10px)", // Frosted Glass Effect
        padding: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffcc00", // Gold color for elegance
            textShadow: "1px 1px 3px rgba(255,204,0,0.8)"
          }}
        >
          GourmetGraph
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button component={Link} to="/" sx={{ color: "#ffffff", mx: 2 }}>
            Home
          </Button>
          <Button component={Link} to="/recipes" sx={{ color: "#ffffff", mx: 2 }}>
            Recipes
          </Button>
          <Button component={Link} to="/add-recipe" sx={{ color: "#ffffff", mx: 2 }}>
            Create Recipe
          </Button>
          <Button component={Link} to="/profile" sx={{ color: "#ffffff", mx: 2 }}>
            Profile
          </Button>
        </Box>

        {/* Login & Signup */}
        <Box>
          <Button component={Link} to="/login" sx={{ color: "#ff9800", mx: 1, fontWeight: "bold" }}>
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            sx={{
              background: "#ff9800",
              color: "#ffffff",
              mx: 1,
              fontWeight: "bold",
              "&:hover": { background: "#e68900" }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
