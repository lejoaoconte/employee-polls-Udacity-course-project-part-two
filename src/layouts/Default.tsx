import { createContext, ReactNode, useState } from "react";

import styled, { ThemeProvider } from "styled-components";

import { darker, white as whitetheme } from "styles/theme";

export const Container = styled.div`
  width: calc(100% - 50px);
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 0;
`;

interface DefaultLayoutProps {
  children: ReactNode;
}

interface ContextDefaultThemeProps {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

export const ContextDefaultTheme = createContext(
  {} as ContextDefaultThemeProps
);

export function Default({ children }: DefaultLayoutProps) {
  const [theme, setTheme] = useState(false);

  return (
    <ContextDefaultTheme.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme ? darker : whitetheme}>
        <Container>{children}</Container>
      </ThemeProvider>
    </ContextDefaultTheme.Provider>
  );
}
