import React from "react";
import styled, { ThemeProvider as SCThemeProvider } from "styled-components";
import { useTheme, StylesProvider } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";

const AppBar = styled(MuiAppBar)`
  background-color: red;
  ${props => props.theme.breakpoints.up("sm")} {
    background-color: orange;
  }
  ${props => props.theme.breakpoints.up("md")} {
    background-color: yellow;
    color: black;
  }
  ${props => props.theme.breakpoints.up("lg")} {
    background-color: green;
    color: white;
  }
`;
export default function App() {
  const muiTheme = useTheme();
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={muiTheme}>
        <AppBar>Sample AppBar</AppBar>
      </SCThemeProvider>
    </StylesProvider>
  );
}