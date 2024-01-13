import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const ThemeProvider = (props: { children: React.ReactNode }) => (
  <MantineProvider defaultColorScheme="dark" theme={theme}>
    {props.children}
  </MantineProvider>
);
