import React from "react";
import ActivitiesTable from "../../components/activities/activities-table.component";
import { NavLink } from "react-router-dom";
const ActivitiesPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <p className="fs-3"> Activities</p>
        <NavLink to="/admin/add-activity">
          <button className="btn btn-primary"> Add Activity </button>
        </NavLink>
      </div>
      <ActivitiesTable />
    </div>
  );
};

export default ActivitiesPage;
