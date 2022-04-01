import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

export const StyledButton = styled(Button)<{ white?: boolean | string; $customWidth?: string; $mTop?: string; $xsCustomWidth?: string; $mBottom?: string; }>`
  background: ${(props) => (props.white ? '#fff' : '#212a2f')};
  border-radius: 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: ${(props) => props.$customWidth || '180px'};
  height: 48px;
  color: ${(props) => (props.white ? '#212a2f' : '#fff')};
  border: ${(props) => (props.white ? '#fff 2px solid' : '2px solid #212a2f')};
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.white ? '#212a2f' : '#fff')};
    color: ${(props) => (props.white ? '#fff' : '#212a2f')};
    border: ${(props) => (props.white ? '#212a2f 2px solid' : '2px solid #212a2f')};
  }
  ${theme.breakpoints.up('xs')} {
    width: ${(props) => props.$xsCustomWidth || '111px'};
    margin-top: ${(props) => props.$mTop || 0};
    margin-bottom: ${(props) => props.$mBottom || 0};
  }
  ${theme.breakpoints.up('sm')} {
    width: ${(props) => props.$customWidth || '210px'};
  }
  ${theme.breakpoints.up('md')} {
    width: ${(props) => props.$customWidth || '180px'};
  }
`;

export const StyledLink = styled(Link)`
  margin: 12px;
`;
