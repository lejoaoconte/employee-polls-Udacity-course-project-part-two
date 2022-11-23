import { createContext, useState } from "react";

import styled, { ThemeProvider } from "styled-components";

import { darker, white } from "styles/theme";

export const Container = styled.div`
  width: calc(100% - 50px);
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
`;

export const ContextDefaultTheme = createContext({});

export function Default({ children }) {
  const [theme, setTheme] = useState(true);

  return (
    <ContextDefaultTheme.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme ? darker : white}>
        <Container>{children}</Container>
      </ThemeProvider>
    </ContextDefaultTheme.Provider>
  );
}
