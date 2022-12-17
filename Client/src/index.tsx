import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import theme from "../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import MainPage from "./components/main";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Background>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Background>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const Background = styled.div`
  border: 1px solid black;
  width: 395px;
  height: 852px;
  background-color: #dfd3c3;
`;

ReactDOM.render(<App />, document.getElementById("root"));
