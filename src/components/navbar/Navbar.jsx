import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  Container,
} from "@mui/material";
import logo from "../../assets/logo.svg";

const pages = ["MEN", "WOMEN", "NEW ARRIVALS"];
const additionals = ["SUSTAINABILITY", "STORES"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ background: "white", color: "#212A2F", minheight: "60px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          {pages.map((page) => (
            <Typography
              noWrap
              key={page}
              textAlign="center"
              sx={{
                mr: "10px",
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
            >
              {page}
            </Typography>
          ))}
        </Container>

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "2rem",
            marginRight: 10,
            justifyContent: "flex-end",
          }}
        >
          <img src={logo} height={38} alt="logo" />
        </Container>

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: { xs: "none", md: "flex" },
          }}
        >
          {additionals.map((add) => (
            <Typography
              key={add}
              textAlign="center"
              sx={{
                marginLeft: 10,
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              {add}
            </Typography>
          ))}
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <PersonOutlineOutlinedIcon
            sx={{ marginLeft: 3, cursor: "pointer" }}
            style={{ fontSize: 30 }}
          />
          <HelpOutlineOutlinedIcon
            sx={{ marginLeft: 3, cursor: "pointer" }}
            style={{ fontSize: 30 }}
          />
          <ShoppingCartOutlinedIcon
            sx={{ marginLeft: 3, cursor: "pointer" }}
            style={{ fontSize: 30 }}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
