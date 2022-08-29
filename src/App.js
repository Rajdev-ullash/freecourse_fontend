import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader";
import CreateCoursePage from "./pages/CreateCourse-Page";
import DashboardPage from "./pages/Dashboard-Page";
import HomePage from "./pages/Home-Page";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin/home" element={<DashboardPage />} />
          <Route exact path="/admin/Create" element={<CreateCoursePage />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );
}

export default App;
