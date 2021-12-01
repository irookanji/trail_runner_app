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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
          display: { xs: "none", md: "flex" },
          fontSize: 34,
          mt: "4rem",
        }}
      >
        Our Favorites
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ fontSize: 16, mr: 10 }}
            label="EVERYDAY"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: 16, mr: 10 }}
            label="RUNNING"
            {...a11yProps(1)}
          />
          <Tab sx={{ fontSize: 16 }} label="TRAVEL" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <ImageList cols={3} rowHeight={400}>
          {itemData.map((item) => (
            <Box sx={{ margin: "1rem" }}>
              {/* Images */}
              <ImageListItem key={item.img} sx={{ width: 396, height: 396 }}>
                <img
                  src={`${item.img}?w=396&h=396&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>

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

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Icon
                  key={item.icon}
                  sx={{ marginLeft: 3 }}
                  style={{ fontSize: 30 }}
                >
                  <img
                    src={`${item.icon}?w=396&h=396&fit=crop&auto=format`}
                    srcSet={`${item.icon}?w=396&h=396&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
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

      <TabPanel value={value} index={1}>
        RUNNING
      </TabPanel>
      <TabPanel value={value} index={2}>
        TRAVEL
      </TabPanel>
    </Box>
  );
}
