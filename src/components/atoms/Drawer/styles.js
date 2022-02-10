import styled from 'styled-components';
import { Drawer, List, Button, Box, Typography } from '@mui/material';

export const StyledNewArrivalsDrawer = styled(Drawer)`
  .MuiPaper-root {
    top: 64px;
    right: 15px;
    width: ${(props) => props.$drawerWidth || 'calc(100% - 15px)'};
  }
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  margin: 2 0;
  color: #212a2f;
`;

export const Container = styled(Box)`
  margin: 4rem auto;
`;

export const Title = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: inherit;
`;

export const SectionsContainer = styled(Box)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.5px;
`;

export const SectionLink = styled(Typography)`
  margin-bottom: 0.6rem;
  white-space: nowrap;
  cursor: pointer;
`;

export const FeaturedContainer = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 18rem;
  background-color: ${(props) => props.$featuredBg || '#5e4b6a'};
  color: white;
  margin-bottom: 1rem;
  border-radius: 4px;
  &:hover {
    box-shadow: ${(props) => props.$hoverBoxShadow || '0px -9px 32px -8px rgba(34, 60, 80, 0.2)'};
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const FeaturedSectionLink = styled(Typography)`
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
