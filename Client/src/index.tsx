import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import theme from "../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
