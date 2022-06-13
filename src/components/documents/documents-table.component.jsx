import React, { useEffect, useState } from "react";
import { getDocuments } from "../../functions/documents";
import { useNavigate } from "react-router-dom";
const DocumentsTable = () => {
  const [documents, setDocuments] = useState([]);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadDocuments = async () => {
      const { success, data } = await getDocuments();
      if (success === false) {
        alert("Error loading documents");
        setIsError(true);
      } else {
        setIsError(false);
        setDocuments(data);
      }
    };

    loadDocuments();
  }, []);
  return (
    <div>
      {isError ? (
        <p> Error loading documents</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student</th>
              <th scope="col">File</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Department</th>
              <th scope="col">Uploaded by</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((d, index) => {
                const fullName =
                  d.student.fname +
                  " " +
                  d.student.mname +
                  " " +
                  d.student.lname;
                return (
                  <tr key={index}>
                    <th>{fullName}</th>
                    <th>{d.fileName}</th>
                    <th>{d.title}</th>
                    <th>{d.description}</th>
                    <th>{d.department}</th>
                    <th>{d.createdBy}</th>
                    <th>
                      <button
                        className="btn btn-success ms-2"
                        onClick={() => {
                          navigate(`/admin/edit-document`, {
                            state: {
                              ...d,
                            },
                          });
                        }}
                      >
                        {" "}
                        Edit
                      </button>
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DocumentsTable;
