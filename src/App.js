import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import DashboardPage from "./pages/Dashboard-Page";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );
}

export default App;
