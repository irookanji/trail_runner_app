import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Wool_Runner from "../../assets/Wool_Runner.png";
import Tree_Runner from "../../assets/Tree_Runner.png";
import Wool_Runner_Mizzle from "../../assets/Wool_Runner_Mizzle.png";
import Cloud from "../../assets/cloud.svg";
import Breezy from "../../assets/breezy.svg";
import Rainy from "../../assets/rainy.svg";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

const itemData = [
  {
    img: Wool_Runner,
    title: "Wool Runner",
    icon: Cloud,
    description: "Cozy Sneaker",
  },
  {
    img: Tree_Runner,
    title: "Tree Runner",
    icon: Breezy,
    description: "Light and Breezy Sneaker",
  },
  {
    img: Wool_Runner_Mizzle,
    title: "Wool Runner Mizzle",
    icon: Rainy,
    description: "Rain Ready Sneaker",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Favorites() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          mr: 2,
          display: "flex",
          fontSize: 34,
          mt: "3rem",
        }}
      >
        Our Favorites
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab key="EVERYDAY" sx={{ fontSize: 16, mr: 10 }} label="EVERYDAY" />
          <Tab key="RUNNING" sx={{ fontSize: 16, mr: 10 }} label="RUNNING" />
          <Tab key="TRAVEL" sx={{ fontSize: 16 }} label="TRAVEL" />
        </Tabs>
      </Box>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab key="EVERYDAY" sx={{ fontSize: 14, mr: 1 }} label="EVERYDAY" />
          <Tab key="RUNNING" sx={{ fontSize: 14, mr: 1 }} label="RUNNING" />
          <Tab key="TRAVEL" sx={{ fontSize: 14 }} label="TRAVEL" />
        </Tabs>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <TabPanel value={value} index={0}>
          <ImageList cols={3} rowHeight={400}>
            {itemData.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img} sx={{ width: 396, height: 396 }}>
                  <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "2rem",
                    position: "absolute",
                    top: "25%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP MEN
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      mt: "1rem",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP WOMEN
                  </Button>
                </Box>

                {/* Image text */}
                <Typography
                  key={item.title}
                  textAlign="center"
                  sx={{
                    m: "10px",
                    fontSize: 22,
                    borderBottom: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    key={item.icon}
                    sx={{ marginLeft: 3, display: "flex" }}
                    style={{ fontSize: 30 }}
                  >
                    <img
                      src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </Icon>

                  <Typography
                    key={item.description}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 14,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <TabPanel value={value} index={0}>
          <ImageList cols={1} rowHeight={400}>
            {itemData.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img} sx={{ width: 396, height: 396 }}>
                  <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "2rem",
                    position: "absolute",
                    top: "25%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      minWidth: "276px",
                      height: "48px",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP MEN
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      mt: "1rem",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP WOMEN
                  </Button>
                </Box>

                {/* Image text */}
                <Typography
                  key={item.title}
                  textAlign="center"
                  sx={{
                    m: "10px",
                    fontSize: 22,
                    borderBottom: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    key={item.icon}
                    sx={{ display: "flex" }}
                    style={{ fontSize: 30 }}
                  >
                    <img
                      src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </Icon>

                  <Typography
                    key={item.description}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 14,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>

      {/* Tab 2 */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <TabPanel value={value} index={1}>
          <ImageList cols={3} rowHeight={400}>
            {itemData
              .slice(0)
              .reverse()
              .map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "1rem",
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  {/* Images */}
                  <ImageListItem
                    key={item.img}
                    sx={{ width: 396, height: 396 }}
                  >
                    <img
                      src={`${item.img}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "2rem",
                      position: "absolute",
                      top: "25%",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "white",
                        borderRadius: "2px",
                        padding: "17px auto",
                        width: "276px",
                        height: "48px",
                        color: "#212A2F",
                        border: " 0",
                        outline: "none",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(219, 215, 215)",
                          color: "white",
                        },
                      }}
                    >
                      SHOP MEN
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background: "white",
                        borderRadius: "2px",
                        padding: "17px auto",
                        width: "276px",
                        height: "48px",
                        mt: "1rem",
                        color: "#212A2F",
                        border: " 0",
                        outline: "none",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(219, 215, 215)",
                          color: "white",
                        },
                      }}
                    >
                      SHOP WOMEN
                    </Button>
                  </Box>

                  {/* Image text */}
                  <Typography
                    key={item.title}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 22,
                      borderBottom: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      key={item.icon}
                      sx={{ marginLeft: 3, display: "flex" }}
                      style={{ fontSize: 30 }}
                    >
                      <img
                        src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                        srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                      />
                    </Icon>

                    <Typography
                      key={item.description}
                      textAlign="center"
                      sx={{
                        m: "10px",
                        fontSize: 14,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </ImageList>
        </TabPanel>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <TabPanel value={value} index={1}>
          <ImageList cols={1} rowHeight={400}>
            {itemData
              .slice(0)
              .reverse()
              .map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "1rem",
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  {/* Images */}
                  <ImageListItem
                    key={item.img}
                    sx={{ width: 396, height: 396 }}
                  >
                    <img
                      src={`${item.img}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "2rem",
                      position: "absolute",
                      top: "25%",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "white",
                        borderRadius: "2px",
                        padding: "17px auto",
                        width: "276px",
                        height: "48px",
                        color: "#212A2F",
                        border: " 0",
                        outline: "none",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(219, 215, 215)",
                          color: "white",
                        },
                      }}
                    >
                      SHOP MEN
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background: "white",
                        borderRadius: "2px",
                        padding: "17px auto",
                        width: "276px",
                        height: "48px",
                        mt: "1rem",
                        color: "#212A2F",
                        border: " 0",
                        outline: "none",
                        cursor: "pointer",
                        ":hover": {
                          background: "rgb(219, 215, 215)",
                          color: "white",
                        },
                      }}
                    >
                      SHOP WOMEN
                    </Button>
                  </Box>

                  {/* Image text */}
                  <Typography
                    key={item.title}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 22,
                      borderBottom: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      key={item.icon}
                      sx={{ display: "flex" }}
                      style={{ fontSize: 30 }}
                    >
                      <img
                        src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                        srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                      />
                    </Icon>

                    <Typography
                      key={item.description}
                      textAlign="center"
                      sx={{
                        m: "10px",
                        fontSize: 14,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </ImageList>
        </TabPanel>
      </Box>
      {/* Tab 3 */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <TabPanel value={value} index={2}>
          <ImageList cols={3} rowHeight={400}>
            {itemData.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img} sx={{ width: 396, height: 396 }}>
                  <img
                    src={`${item.img}?w=396&h=396&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "2rem",
                    position: "absolute",
                    top: "25%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP MEN
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      mt: "1rem",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP WOMEN
                  </Button>
                </Box>

                {/* Image text */}
                <Typography
                  key={item.title}
                  textAlign="center"
                  sx={{
                    m: "10px",
                    fontSize: 22,
                    borderBottom: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    key={item.icon}
                    sx={{ marginLeft: 3, display: "flex" }}
                    style={{ fontSize: 30 }}
                  >
                    <img
                      src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </Icon>

                  <Typography
                    key={item.description}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 14,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <TabPanel value={value} index={2}>
          <ImageList cols={1} rowHeight={400}>
            {itemData.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img} sx={{ width: 396, height: 396 }}>
                  <img
                    src={`${item.img}?w=396&h=396&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "2rem",
                    position: "absolute",
                    top: "25%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP MEN
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      padding: "17px auto",
                      width: "276px",
                      height: "48px",
                      mt: "1rem",
                      color: "#212A2F",
                      border: " 0",
                      outline: "none",
                      cursor: "pointer",
                      ":hover": {
                        background: "rgb(219, 215, 215)",
                        color: "white",
                      },
                    }}
                  >
                    SHOP WOMEN
                  </Button>
                </Box>

                {/* Image text */}
                <Typography
                  key={item.title}
                  textAlign="center"
                  sx={{
                    m: "10px",
                    fontSize: 22,
                    borderBottom: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    key={item.icon}
                    sx={{ display: "flex" }}
                    style={{ fontSize: 30 }}
                  >
                    <img
                      src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                      srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </Icon>

                  <Typography
                    key={item.description}
                    textAlign="center"
                    sx={{
                      m: "10px",
                      fontSize: 14,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>
    </Box>
  );
}
