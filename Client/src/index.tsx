import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import theme from "../styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import MainPage from "./components/main";
import SignUpPage from "./components/signup";
import GardenOwnerPage from "./components/gardenOwner";
import GardenSharePage from "./components/shareGarden";
import WriteMessage from "./components/writeMessage";
import ChooseFlower from "./components/chooseFlower";

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
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/garden/:id/owner" element={<GardenOwnerPage />} />
              <Route path="/garden/:id" element={<GardenSharePage />} />
              <Route path="/garden/:id/write" element={<ChooseFlower />} />
              <Route
                path="/garden/:id/write/letter"
                element={<WriteMessage />}
              />
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
  position: relative;
  overflow: hidden;
`;

ReactDOM.render(<App />, document.getElementById("root"));
