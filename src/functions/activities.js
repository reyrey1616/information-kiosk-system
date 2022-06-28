import axios from "axios";
import moment from "moment";
export const getActivities = async () => {
  try {
    const URL = `/activities`;
    const request = await axios.get(URL);
    const response = await request.data;
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      success: false,
    };
  }
};

export const addActivity = async (data) => {
  try {
    const URL = `/activities`;
    const {
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime,
      department,
    } = data;

    const startDateTime =
      moment(startDate).format("YYYY-MM-DD") +
      "T" +
      moment(startTime).format("hh:mm:ss");

    const endDateTime =
      moment(endDate).format("YYYY-MM-DD") +
      "T" +
      moment(endTime).format("hh:mm:ss");

    const request = await axios.post(URL, {
      title,
      description,
      startDateTime,
      endDateTime,
      department,
      participants: [],
      registeredUsers: [],
    });
    const response = await request.data;

    console.log(response);
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};

export const updateActivity = async (data) => {
  try {
    const URL = `/activities/${data?.id}`;
    const {
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime,
      department,
    } = data;

    const startDateTime =
      moment(startDate).format("YYYY-MM-DD") +
      "T" +
      moment(startTime).format("hh:mm:ss");

    const endDateTime =
      moment(endDate).format("YYYY-MM-DD") +
      "T" +
      moment(endTime).format("hh:mm:ss");

    const request = await axios.put(URL, {
      title,
      description,
      startDateTime,
      endDateTime,
      department,
    });
    const response = await request.data;

    console.log(response);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};
