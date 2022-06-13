import React, { useEffect } from "react";
import EditActivityForm from "../../components/activities/edit-activity-form.component";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const EditActivityPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  useEffect(() => {
    if (state === null) {
      return navigate("/admin/activities");
    }
  }, [state]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-around">
        <NavLink to="/admin/activities">
          <button className="btn btn-secondary"> Back </button>
        </NavLink>
        <p className="fs-3"> Edit Activity</p>
        <div></div>
      </div>
      <div className="col-md-8 offset-md-1 col-xs-12">
        <EditActivityForm data={state && state} />
      </div>
    </div>
  );
};

export default EditActivityPage;
