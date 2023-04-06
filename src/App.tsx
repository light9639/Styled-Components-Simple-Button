import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Button from "./components/Button";
import { StyledRoundButton } from "./components/StyledButton";

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => setTheme(theme.value === 'light' ? darkTheme : lightTheme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Button variant="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <Button variant="primary">Click Me!</Button>
          <StyledRoundButton variant="secondary">Click Me!</StyledRoundButton>
          <h1>Hello!</h1>
        </StyledLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}

const lightTheme = {
  value: 'light',
  style: {
      backgroundColor: '#ffffff',
      color: '#343a40',
  },
};

const darkTheme = {
  value: 'dark',
  style: {
      backgroundColor: '#343a40',
      color: '#ffffff',
  },
};

const StyledLayout = styled.div`
    height: 100vh;
    padding: 12px;
    background-color: ${({ theme }) => theme.style.backgroundColor};
    color: ${({ theme }) => theme.style.color};
`;