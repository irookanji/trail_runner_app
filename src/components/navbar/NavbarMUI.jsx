import * as React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Paper,
} from '@mui/material';

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CustomDrawer from '../atoms/Drawer/CustomDrawer';

import logo from '../../assets/logo.svg';

const newArrivalsDrawerData = ['Rainy Days', 'Cold Weather', 'Warm Weather', 'Relaxing', 'Running'];

const pages = [
  {
    name: 'MEN',
    link: '/men',
  },
  {
    name: 'WOMEN',
    link: '/women',
  },
];
const additionals = ['SUSTAINABILITY', 'STORES'];

const iconText = [
  {
    name: 'ABOUT',
    link: '/about',
  },
  {
    name: 'MY CART',
    link: '/cart',
  },
  {
    name: 'SIGN IN',
    link: '/sign-in',
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [drawer, setDrawer] = React.useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setDrawer({ ...drawer, [anchor]: open });
  };

  const drawerPosition = 'top';

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'white',
        color: '#212A2F',
        minheight: '60px',
        width: '100%',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="100%" sx={{ mx: 'auto' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
          <Box
            sx={{
              flexWrap: 'nowrap',
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              pr: '7rem',
            }}
          >
            {pages.map(({ name, link }) => (
              <Link onClick={toggleDrawer(drawerPosition, false)} to={link} key={name}>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#212A2F', display: 'block' }}>
                  {name}
                </Button>
              </Link>
            ))}

            {/* Drawer for this elememt */}
            <CustomDrawer
              drawer={drawer}
              setDrawer={setDrawer}
              drawerPosition={drawerPosition}
              buttonContent="New Arrivals"
              drawerData={newArrivalsDrawerData}
            ></CustomDrawer>
          </Box>
          <Link to="/">
            <Paper
              sx={{
                display: { xs: 'none', md: 'flex' },
                boxShadow: 'none',
              }}
            >
              <img src={logo} alt="Logo" />
            </Paper>
          </Link>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              mr: '1rem',
              alignItems: 'center',
            }}
          >
            {additionals.map((additional) => (
              <Button
                href="#additionals"
                key={additional}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#212A2F', display: 'block' }}
              >
                {additional}
              </Button>
            ))}

            <Tooltip title="SIGN IN">
              <Link onClick={toggleDrawer(drawerPosition, false)} to="/sign-in">
                <PersonOutlineOutlinedIcon sx={{ marginLeft: 3, cursor: 'pointer' }} style={{ fontSize: 30 }} />
              </Link>
            </Tooltip>

            <Tooltip title="ABOUT">
              <Link onClick={toggleDrawer(drawerPosition, false)} to="/about">
                <HelpOutlineOutlinedIcon sx={{ marginLeft: 3, cursor: 'pointer' }} style={{ fontSize: 30 }} />
              </Link>
            </Tooltip>
            <Tooltip title="MY CART">
              <ShoppingCartOutlinedIcon sx={{ marginLeft: 3, cursor: 'pointer' }} style={{ fontSize: 30 }} />
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              width: '100%',
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography>{page.name}</Typography>
                </MenuItem>
              ))}

              {additionals.map((additional) => (
                <MenuItem key={additional} onClick={handleCloseNavMenu}>
                  <Typography>{additional}</Typography>
                </MenuItem>
              ))}

              {iconText.map(({ name, link }) => (
                <Link to={link} key={name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography>{name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <Link to="/">
              <Paper
                sx={{
                  ml: 2,
                  display: { xs: 'flex', md: 'none' },
                  boxShadow: 'none',
                }}
              >
                <img src={logo} alt="Logo" />
              </Paper>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
