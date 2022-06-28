import axios from "axios";

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
    if (!data.permission) {
      data.permission = false;
    }

    const formData = new FormData();
    formData.append("student", data.student.split("-")[1]);
    formData.append("title", data.title);
    formData.append("uploadedFile", data.file);
    formData.append("description", data.description);
    formData.append("department", data.department);
    formData.append("permission", data.permission);
    formData.append("createdBy", "informationkiosk.admin@gmail.com");

    for (const value of formData.values()) {
      console.log(value);
    }

    const request = await axios.post(URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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

export const updatePermission = async (data) => {
  try {
    const URL = `/documents/${data?.id}`;
    const permission = data?.permission;

    const request = await axios.put(URL, {
      permission,
    });
    const response = await request.data;

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
