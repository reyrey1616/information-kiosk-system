import axios from "axios";

const BASE_URL = "http://localhost:5000";
export const getDocuments = async () => {
  try {
    const URL = `/documents`;
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

export const addDocument = async (data) => {
  try {
    const URL = `/documents`;

    const request = await axios.post(URL, data);
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
