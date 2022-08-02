import Router from "./routes/Router";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "@mui/system";
import muiTheme from "./theme/muiTheme";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
