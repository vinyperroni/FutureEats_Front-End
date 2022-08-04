import Router from "./routes/Router";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "@mui/system";
import muiTheme from "./theme/muiTheme";
import GlobalState from "./GlobalState/GlobalState";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
