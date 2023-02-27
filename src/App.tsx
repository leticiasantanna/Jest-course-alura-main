import Sort from "./pages/Sort";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route element={Sort} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
