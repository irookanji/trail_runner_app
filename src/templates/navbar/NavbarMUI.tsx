import * as React from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Menu,
  Badge,
  Container,
  Tooltip,
  MenuItem,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LoginIcon from '@mui/icons-material/Login';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import NewArrivalsDrawer from '../../components/NewArrivalsDrawer/NewArrivalsDrawer';
import CartDrawer from './CartDrawer';
import logo from '../../assets/logo.svg';
import { Navigation, LinksWrapper, NavigationItem } from './cartDrawerStyles';

function Navbar() {
  const cartItems = useSelector((state: any) => state.cartState.cart.items);
  const user = useSelector((state: any) => state.userState.user);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [, setTopDrawer] = useState(false);
  const [rightDrawer, setRightDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Navigation position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', width: '100%' }}>
          {!isMobile ? (
            <>
              <LinksWrapper>
                <Link onClick={() => setTopDrawer(false)} to="/men">
                  <NavigationItem onClick={handleCloseNavMenu}>men</NavigationItem>
                </Link>
                <Link onClick={() => setTopDrawer(false)} to="/women">
                  <NavigationItem onClick={handleCloseNavMenu}>women</NavigationItem>
                </Link>

                <NewArrivalsDrawer>New Arrivals</NewArrivalsDrawer>
              </LinksWrapper>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>

              <LinksWrapper>
                <NavigationItem target="_blank" rel="noreferrer" href="https://www.allbirds.eu/pages/how-we-operate">
                  SUSTAINABILITY
                </NavigationItem>
                <NavigationItem target="_blank" rel="noreferrer" href="https://www.allbirds.eu/pages/stores">
                  STORE
                </NavigationItem>
                <Tooltip title={user.isLoggedIn ? 'PROFILE' : 'SIGN IN'}>
                  <Link onClick={() => setTopDrawer(false)} to={user.isLoggedIn ? '/profile' : 'sign-in'}>
                    {user.isLoggedIn ? (
                      <PersonOutlineOutlinedIcon sx={{ marginLeft: 3, cursor: 'pointer', fontSize: 30 }} />
                    ) : (
                      <LoginIcon sx={{ marginLeft: 3, cursor: 'pointer', fontSize: 30 }} />
                    )}
                  </Link>
                </Tooltip>
                <Tooltip title="ABOUT">
                  <Link onClick={() => setTopDrawer(false)} to="/about">
                    <HelpOutlineOutlinedIcon sx={{ marginLeft: 3, cursor: 'pointer', fontSize: 30 }} />
                  </Link>
                </Tooltip>
                <Tooltip title="MY CART">
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartOutlinedIcon
                      sx={{ marginLeft: 3, cursor: 'pointer', fontSize: 30 }}
                      onClick={() => setRightDrawer(true)}
                    />
                  </Badge>
                </Tooltip>
              </LinksWrapper>
            </>
          ) : (
            <>
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
              >
                <Link to="/men">
                  <MenuItem onClick={handleCloseNavMenu}>MEN</MenuItem>
                </Link>
                <Link to="/women">
                  <MenuItem onClick={handleCloseNavMenu}>WOMEN</MenuItem>
                </Link>

                <MuiLink
                  sx={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener"
                  href="https://www.allbirds.eu/pages/stores"
                >
                  <MenuItem onClick={handleCloseNavMenu}>STORE</MenuItem>
                </MuiLink>
                <MuiLink
                  sx={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener"
                  href="https://www.allbirds.eu/pages/how-we-operate"
                >
                  <MenuItem onClick={handleCloseNavMenu}>SUSTAINABILITY</MenuItem>
                </MuiLink>

                <Link to="/about">
                  <MenuItem onClick={handleCloseNavMenu}>ABOUT</MenuItem>
                </Link>

                <Link to="/sign-in">
                  <MenuItem onClick={handleCloseNavMenu}>SIGN-IN</MenuItem>
                </Link>
              </Menu>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
              <Box onClick={() => setRightDrawer(true)}>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Box>
            </>
          )}
          <CartDrawer
            open={rightDrawer}
            setOpen={setRightDrawer}
          />
        </Toolbar>
      </Container>
    </Navigation>
  );
}

export default Navbar;
