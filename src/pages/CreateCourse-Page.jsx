import React, { lazy, Suspense } from "react";
import LazyLoader from "../components/masterLayout/LazyLoader";
import MasterLayout from "../components/masterLayout/Master-Layout";
const CreateCourse = lazy(() =>
  import("../components/CreateCourse/CreateCourse")
);
const CreateCoursePage = () => {
  return (
    <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
        <CreateCourse />
      </Suspense>
    </MasterLayout>
  );
};

export default CreateCoursePage;
