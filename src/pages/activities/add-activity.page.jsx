import React from "react";
import AddActivityForm from "../../components/activities/add-activity-form.component";
import { NavLink } from "react-router-dom";
const AddActivityPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-around">
        <NavLink to="/admin/activities">
          <button className="btn btn-secondary"> Back </button>
        </NavLink>
        <p className="fs-3"> Add Activity</p>
        <div></div>
      </div>
      <div className="col-md-8 offset-md-1 col-xs-12">
        <AddActivityForm />
      </div>
    </div>
  );
};

export default AddActivityPage;
