import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import logo from "../../assets/logo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const pages = ["MEN", "WOMEN", "NEW ARRIVALS"];
const additionals = ["SUSTAINABILITY", "STORES"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
      sx={{ background: "white", color: "#212A2F", minheight: "60px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "flex-start" }}>
          <Box
            sx={{
              flexWrap: "nowrap",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              mr: "10rem",
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

          <Paper sx={{ mx: "12rem", display: { xs: "none", md: "flex" } }}>
            <img src={logo} alt="Logo" />
          </Paper>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              mr: "5rem",
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
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          </Box>

          <Paper sx={{ mr: 2, display: { xs: "flex", md: "none" } }}>
            <img src={logo} alt="Logo" />
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
