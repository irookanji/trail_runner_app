import * as React from 'react';
import PropTypes from 'prop-types';
import { itemData } from './FavoritesTabsData';
import CustomButton from '../../atoms/Button/CustomButton';
import { Link } from 'react-router-dom';

import { Tabs, Tab, Typography, Box, ImageList, ImageListItem, Icon } from '@mui/material';

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
          <Typography component="div">{children}</Typography>
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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Title of the Tabs */}
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          mr: 2,
          display: 'flex',
          fontSize: 34,
          mt: '3rem',
        }}
      >
        Our Favorites
      </Typography>

      {/* Tabs */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab key="EVERYDAY" sx={{ fontSize: { xs: 14, md: 16 }, mr: { xs: 1, md: 10 } }} label="EVERYDAY" />
          <Tab key="RUNNING" sx={{ fontSize: { xs: 14, md: 16 }, mr: { xs: 1, md: 10 } }} label="RUNNING" />
          <Tab key="TRAVEL" sx={{ fontSize: { xs: 14, md: 16 } }} label="TRAVEL" />
        </Tabs>
      </Box>

      {/* Inside Tabs */}
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <TabPanel value={value} index={0}>
          <ImageList
            sx={{
              flexGrow: 1,
              gridTemplateColumns: {
                xs: '1fr !important',
                md: '1fr 1fr 1fr !important',
              },
            }}
            rowHeight={300}
          >
            {itemData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: { xs: '0.5rem', md: '1rem' },
                  position: 'relative',
                  alignItems: 'center',
                  boxShadow: 'rgb(211 212 213) 0px 6px 24px 0px',
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img}>
                  <img src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>

                {/* Buttons on Favorites Tabs */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '2rem',
                    position: 'absolute',
                    top: '25%',
                  }}
                >
                  <CustomButton link="/men" text="SHOP MEN" $customWidth="210px" />
                  <CustomButton $mTop="1rem" link="/women" text="SHOP WOMEN" $customWidth="210px" />
                </Box>

                {/* Image text */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ml: '2rem',
                    mt: { xs: '1rem', sm: '7rem', md: '3rem', lg: '6.5rem' },
                    width: '100%',
                  }}
                >
                  <Typography
                    key={item.title}
                    textAlign="left"
                    sx={{
                      mt: { xs: '1rem', sm: 'auto' },
                      fontSize: { xs: '14px', md: '22px' },
                      borderBottom: '2px solid lightgrey',
                      width: '85%',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Icon key={item.icon} sx={{ display: 'flex' }} style={{ fontSize: 30 }}>
                      <img src={`${item.icon}`} srcSet={`${item.icon}`} alt={item.title} />
                    </Icon>

                    <Typography
                      key={item.description}
                      textAlign="center"
                      sx={{
                        m: '10px',
                        fontSize: 14,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>

      {/* Tab 2 */}
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <TabPanel value={value} index={1}>
          <ImageList
            sx={{
              gridTemplateColumns: {
                xs: '1fr !important',
                md: '1fr 1fr 1fr !important',
              },
            }}
            rowHeight={300}
          >
            {itemData
              .slice(0)
              .reverse()
              .map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: { xs: '0.5rem', md: '1rem' },
                    position: 'relative',
                    alignItems: 'center',
                    boxShadow: 'rgb(211 212 213) 0px 6px 24px 0px',
                  }}
                >
                  {/* Images */}
                  <ImageListItem key={item.img}>
                    <img src={`${item.img}`} srcSet={`${item.img}`} alt={item.title} loading="lazy" />
                  </ImageListItem>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      mt: '2rem',
                      position: 'absolute',
                      top: '25%',
                    }}
                  >
                    <CustomButton link="/men" text="SHOP MEN" $customWidth="210px" />
                    <CustomButton $mTop="1rem" link="/women" text="SHOP WOMEN" $customWidth="210px" />
                  </Box>

                  {/* Image text */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      ml: '2rem',
                      mt: { xs: '1rem', sm: '7rem', md: '3rem', lg: '6.5rem' },
                      width: '100%',
                    }}
                  >
                    <Typography
                      key={item.title}
                      textAlign="left"
                      sx={{
                        mt: { xs: '1rem', sm: 'auto' },
                        fontSize: { xs: '14px', md: '22px' },
                        borderBottom: '2px solid lightgrey',
                        width: '85%',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Icon key={item.icon} sx={{ display: 'flex' }} style={{ fontSize: 30 }}>
                        <img src={`${item.icon}`} srcSet={`${item.icon}`} alt={item.title} />
                      </Icon>

                      <Typography
                        key={item.description}
                        textAlign="center"
                        sx={{
                          m: '10px',
                          fontSize: 14,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </ImageList>
        </TabPanel>
      </Box>

      {/* Tab 3 */}
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <TabPanel value={value} index={2}>
          <ImageList
            sx={{
              gridTemplateColumns: {
                xs: '1fr !important',
                md: '1fr 1fr 1fr !important',
              },
            }}
            rowHeight={300}
          >
            {itemData.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: { xs: '0.5rem', md: '1rem' },
                  position: 'relative',
                  alignItems: 'center',
                  boxShadow: 'rgb(211 212 213) 0px 6px 24px 0px',
                }}
              >
                {/* Images */}
                <ImageListItem key={item.img}>
                  <img src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>

                {/* Buttons on Favorites Tabs */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '2rem',
                    position: 'absolute',
                    top: '25%',
                  }}
                >
                  <CustomButton link="/men" text="SHOP MEN" $customWidth="210px" />
                  <CustomButton $mTop="1rem" link="/women" text="SHOP WOMEN" $customWidth="210px" />
                </Box>

                {/* Image text */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ml: '2rem',
                    mt: { xs: '1rem', sm: '7rem', md: '3rem', lg: '6.5rem' },
                    width: '100%',
                  }}
                >
                  <Typography
                    key={item.title}
                    textAlign="left"
                    sx={{
                      mt: { xs: '1rem', sm: 'auto' },
                      fontSize: { xs: '14px', md: '22px' },
                      borderBottom: '2px solid lightgrey',
                      width: '85%',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Icon key={item.icon} sx={{ display: 'flex' }} style={{ fontSize: 30 }}>
                      <img src={`${item.icon}`} srcSet={`${item.icon}`} alt={item.title} />
                    </Icon>

                    <Typography
                      key={item.description}
                      textAlign="center"
                      sx={{
                        m: '10px',
                        fontSize: 14,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </ImageList>
        </TabPanel>
      </Box>
    </Box>
  );
}
