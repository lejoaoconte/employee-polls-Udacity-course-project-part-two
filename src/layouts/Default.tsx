import { createContext, ReactNode, useState } from "react";

import styled, { ThemeProvider } from "styled-components";

import { darker, white } from "styles/theme";

export const Container = styled.div`
  width: calc(100% - 50px);
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
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
  const [theme, setTheme] = useState(true);

  return (
    <ContextDefaultTheme.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme ? darker : white}>
        <Container>{children}</Container>
      </ThemeProvider>
    </ContextDefaultTheme.Provider>
  );
}
