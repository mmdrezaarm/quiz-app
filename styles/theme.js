import { createTheme, ThemeProvider } from "@mui/material";

export const theme = createTheme({
  palette : {
    primary:{
      light: "#b537f2",
      main: "#8a2be2",
      dark: "#321a47",
      contrastText: '#666'
    },
    secondary: {
      main: '#e5e5e5',
      dark: '#666',
      contrastText: '#fff'
    }
  },
  typography:{
    fontFamily: 'VarelaRound'
  }
})
export default function ThemeCM({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
