import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router";
import Config from "./components/pages/Configs";
import Sorteio from "./components/pages/Sort";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Config />} />
            <Route path="/sorteio" element={<Sorteio />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
