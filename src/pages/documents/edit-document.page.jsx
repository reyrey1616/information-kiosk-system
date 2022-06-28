import React, { useEffect, useState } from "react";
import EditDocumentForm from "../../components/documents/edit-document-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { getStudents } from "../../functions/students";
const AddDocumentPage = () => {
  const [students, setStudents] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      return navigate("/admin/documents");
    }
  }, [state]);

  useEffect(() => {
    const loadStudents = async () => {
      const { success, data } = await getStudents();
      if (success === false) {
        alert("Error loading students");
      } else {
        setStudents(data);
      }
    };

    loadStudents();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-around">
        <NavLink to="/admin/documents">
          <button className="btn btn-secondary"> Back </button>
        </NavLink>
        <p className="fs-3"> Edit Document</p>
        <div></div>
      </div>
      <div className="col-md-8 offset-md-1 col-xs-12">
        <EditDocumentForm
          students={students && students}
          data={state && state}
        />
      </div>
    </div>
  );
};

export default AddDocumentPage;
