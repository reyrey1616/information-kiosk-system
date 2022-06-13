import React, { useEffect, useState } from "react";
import { getStudents } from "../../functions/students";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadStudents = async () => {
      const { success, data } = await getStudents();
      console.log(data);
      if (success === false) {
        alert("Error loading students");
        setIsError(true);
      } else {
        setIsError(false);
        setStudents(data);
      }
    };

    loadStudents();
  }, []);
  return (
    <div>
      {isError ? (
        <p> Error loading students</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Year level</th>
              <th scope="col">Gender</th>
              <th scope="col">Department</th>
              <th scope="col">Course</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((d, index) => {
                return (
                  <tr key={index}>
                    <th>{d.fname + " " + d.mname + " " + d.lname}</th>
                    <th>{d.yearLevel}</th>
                    <th>{d.gender}</th>
                    <th>{d.department}</th>
                    <th>{d.course}</th>
                    <th>{d.email}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsTable;
