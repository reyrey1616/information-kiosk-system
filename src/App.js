import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.component";

const ActivitiesPage = lazy(() => import("./pages/activities/activities.page"));
const AddActivityPage = lazy(() =>
  import("./pages/activities/add-activity.page")
);
const EditActivityPage = lazy(() =>
  import("./pages/activities/edit-activity.page")
);
const StudentsPage = lazy(() => import("./pages/students/students.page"));
const DocumentsPage = lazy(() => import("./pages/documents/documents.page"));
const AddDocumentPage = lazy(() =>
  import("./pages/documents/add-document.page")
);
const EditDocumentPage = lazy(() =>
  import("./pages/documents/edit-document.page")
);

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="m-0 p-0">
      <Suspense fallback={<div> Loading... </div>}>
        {location.pathname.toString().startsWith("/admin/") && <Navbar />}
        <Routes>
          <Route path="/admin/activities" element={<ActivitiesPage />} />
          <Route path="/admin/add-activity" element={<AddActivityPage />} />
          <Route path="/admin/edit-activity" element={<EditActivityPage />} />
          <Route path="/admin/students" element={<StudentsPage />} />
          <Route path="/admin/documents" element={<DocumentsPage />} />
          <Route path="/admin/add-document" element={<AddDocumentPage />} />
          <Route path="/admin/edit-document" element={<EditDocumentPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
