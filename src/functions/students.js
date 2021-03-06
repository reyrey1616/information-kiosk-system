import axios from "axios";

export const getStudents = async () => {
  try {
    const URL = `/students`;
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
