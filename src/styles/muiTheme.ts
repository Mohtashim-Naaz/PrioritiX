import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2F80ED" },
    secondary: { main: "#00E676" },
    background: { default: "#f9fafb" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Poppins", sans-serif',
  },
});

export default theme;
