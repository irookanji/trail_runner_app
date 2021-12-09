import * as React from "react";

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem, Paper } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import logo from "../../assets/logo.svg";


const pages = ["MEN", "WOMEN", "NEW ARRIVALS"];
const additionals = ["SUSTAINABILITY", "STORES"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const iconText = ["ABOUT", "MY CART", "LOGIN"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "white",
        color: "#212A2F",
        minheight: "60px",
        width: "100%",
      }}
    >
      <Container maxWidth="100%" sx={{mx:"auto"}}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", width: "100%" }}
        >
          <Box
            sx={{
              flexWrap: "nowrap",
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              pr: "7rem",
            }}
          >
            {pages.map((page) => (
              <Button
                href="#pages"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#212A2F", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Paper
            sx={{
              display: { xs: "none", md: "flex" },
              boxShadow: "none",
            }}
          >
            <img src={logo} alt="Logo" />
          </Paper>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              mr: "1rem",
              alignItems: "center",
            }}
          >
            {additionals.map((additional) => (
              <Button
                href="#additionals"
                key={additional}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#212A2F", display: "block" }}
              >
                {additional}
              </Button>
            ))}

            <Tooltip title="LOGIN">
              <PersonOutlineOutlinedIcon
                sx={{ marginLeft: 3, cursor: "pointer" }}
                style={{ fontSize: 30 }}
              />
            </Tooltip>

            <Tooltip title="ABOUT">
              <HelpOutlineOutlinedIcon
                sx={{ marginLeft: 3, cursor: "pointer" }}
                style={{ fontSize: 30 }}
              />
            </Tooltip>

            <Tooltip title="MY CART">
              <ShoppingCartOutlinedIcon
                sx={{ marginLeft: 3, cursor: "pointer" }}
                style={{ fontSize: 30 }}
              />
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}

              {additionals.map((additional) => (
                <MenuItem key={additional} onClick={handleCloseNavMenu}>
                  <Typography>{additional}</Typography>
                </MenuItem>
              ))}

              {iconText.map((iText) => (
                <MenuItem key={iText} onClick={handleCloseNavMenu}>
                  <Typography>{iText}</Typography>
                </MenuItem>
              ))}

              {/* почему не работает?
              {pages.concat(additionals).map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
            <Paper sx={{ ml: 2, display: { xs: "flex", md: "none" } }}>
              <img src={logo} alt="Logo" />
            </Paper>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
