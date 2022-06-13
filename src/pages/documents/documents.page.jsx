import React from "react";
import DocumentsTable from "../../components/documents/documents-table.component";
import { NavLink } from "react-router-dom";
const DocumentsPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <p className="fs-3"> Documents</p>
        <NavLink to="/admin/add-document">
          <button className="btn btn-primary"> Add Document </button>
        </NavLink>
      </div>
      <DocumentsTable />
    </div>
  );
};

export default DocumentsPage;
