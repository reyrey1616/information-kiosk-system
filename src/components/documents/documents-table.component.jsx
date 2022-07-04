import React, { useEffect, useState } from "react";
import { getDocuments } from "../../functions/documents";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { updatePermission } from "../../functions/documents";

const URL = `https://information-kiosk-api.uc.r.appspot.com/uploads/`;
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
              <th scope="col">Permission</th>
              <th scope="col">Student Request</th>
            </tr>
          </thead>
          <tbody>
            {documents &&
              documents.map((d, index) => {
                console.log(d.permission);
                const fullName =
                  d.student.fname +
                  " " +
                  d.student.mname +
                  " " +
                  d.student.lname;
                return (
                  <tr key={index}>
                    <th>{fullName}</th>
                    <th>
                      <a
                        // href={`${URL}${d.fileName}`}
                        href={`https://storage.cloud.google.com/kiosk-uploads/${d.fileName}`}
                        download="Download"
                        target="_blank"
                      >
                        <button className="btn btn-primary">Download</button>
                      </a>
                    </th>
                    <th>{d.title}</th>
                    <th>{d.description}</th>
                    <th>{d.department}</th>
                    <th>{d.createdBy}</th>
                    <th>
                      <Switch
                        defaultChecked={d.permission}
                        onChange={async (val) => {
                          const data = {
                            permission: val,
                            id: d._id,
                          };
                          const { success } = await updatePermission(data);

                          if (success) {
                            alert("Permission updated!");
                          } else {
                            alert(
                              "Error updating permission, please try again later!"
                            );
                          }
                        }}
                      />
                    </th>
                    <th>
                      {d.studentRequest === false
                        ? "None"
                        : "Student requesting for document access."}
                    </th>

                    {/* <th>
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
                    </th> */}
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
