import React from "react";
import StudentsTable from "../../components/students/students-table.component";
const StudentsPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-start">
        <p className="fs-3"> Students</p>
      </div>
      <StudentsTable />
    </div>
  );
};

export default StudentsPage;
