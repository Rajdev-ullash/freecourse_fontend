import React, { Fragment, lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Navbar />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
