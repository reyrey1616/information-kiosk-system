import React, { useEffect, useState } from "react";
import { getActivities } from "../../functions/activities";
import { Modal, Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const ActivitiesTable = () => {
  const [activities, setActivities] = useState([]);
  const [isError, setIsError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const loadActivities = async () => {
      const { success, data } = await getActivities();
      if (success === false) {
        alert("Error loading activities");
        setIsError(true);
      } else {
        setIsError(false);
        setActivities(data);
      }
    };

    loadActivities();
  }, []);
  return (
    <div>
      {isError ? (
        <p> Error loading activities</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date & Time</th>
              <th scope="col">Department</th>
              <th scope="col"># of participants</th>
              <th scope="col"># of users joined</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities &&
              activities.map((d, index) => {
                return (
                  <tr key={index}>
                    <th>{d.title}</th>
                    <th>{d.description}</th>
                    <th>
                      {moment(d.startDateTime).format(
                        "MMM DD, YYYY HH:mm:ss A"
                      ) +
                        " - " +
                        moment(d.endDateTime).format("MMM DD, YYYY HH:mm:ss A")}
                    </th>
                    <th>{d.department}</th>
                    <th>{d.participants.length}</th>
                    <th>{d.registeredUsers.length}</th>
                    <th>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setModalVisible(true);
                          setSelectedActivity(d);
                        }}
                      >
                        {" "}
                        View
                      </button>
                      <button
                        className="btn btn-success ms-2"
                        onClick={() => {
                          navigate(`/admin/edit-activity`, {
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

      <Modal
        title={"Activity Details"}
        visible={modalVisible}
        width={700}
        onCancel={() => {
          setModalVisible(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Close
          </Button>,
        ]}
      >
        <p className="fs-4 mb-1">
          Title: {selectedActivity && selectedActivity.title}
        </p>
        <p className="fs-6 mb-1">
          Description: {selectedActivity && selectedActivity.description}
        </p>
        <p className="fs-6 mb-1">
          Date & Time:{" "}
          {selectedActivity &&
            moment(selectedActivity.startDateTime).format(
              "MMM DD, YYYY HH:mm:ss A"
            ) +
              " - " +
              moment(selectedActivity.endDateTime).format(
                "MMM DD, YYYY HH:mm:ss A"
              )}
        </p>

        <div className="mb-5 mt-4">
          <p className="fs-5"> Registered Users</p>
          <RegisteredUsersTable
            registeredUsers={
              selectedActivity && selectedActivity.registeredUsers
            }
          />
        </div>
        <div>
          <p className="fs-5"> Participants</p>
          <ParticipantsTable
            participants={selectedActivity && selectedActivity.participants}
          />
        </div>
      </Modal>
    </div>
  );
};

const ParticipantsTable = ({ participants }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Type</th>
          <th scope="col">Date Joined</th>
        </tr>
      </thead>
      <tbody>
        {participants &&
          participants.map((d, index) => {
            return (
              <tr key={index}>
                <th> {d.email} </th>
                <th>{d.fname + " " + d.mname + " " + d.lname}</th>
                <th> {d.department} </th>
                <th> {d.type} </th>
                <th> {d.createdAt} </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

const RegisteredUsersTable = ({ registeredUsers }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Type</th>
          <th scope="col">Date Registered</th>
        </tr>
      </thead>
      <tbody>
        {registeredUsers &&
          registeredUsers.map((d, index) => {
            return (
              <tr key={index}>
                <th> {d.email} </th>
                <th>{d.fname + " " + d.mname + " " + d.lname}</th>
                <th> {d.department} </th>
                <th> {d.type} </th>
                <th> {d.createdAt} </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ActivitiesTable;
