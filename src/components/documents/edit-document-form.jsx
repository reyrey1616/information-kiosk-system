import { Button, Switch, Form, Input, Select } from "antd";
import React, { useState, useEffect } from "react";
import { addDocument } from "../../functions/documents";
const { TextArea } = Input;
const { Option } = Select;

export const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

const EditDocumentForm = ({ students, data }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedNewFile, setUploadedNewFile] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(() => {
    if (data && data) {
      let url = `${URL}${data.fileName}`;
      toDataURL(url).then((dataUrl) => {
        const fileData = dataURLtoFile(dataUrl, data.fileName);
        console.log(fileData);
        setCurrentFile(URL.createObjectURL(fileData));
      });
    }
  }, []);

  const onFinish = async (values) => {
    console.log(file);

    if (uploadedNewFile) {
      values.file = file;
    } else {
      values.fileName = data && data.fileName;
      values.file = currentFile;
    }
    // const { success } = await addDocument(values);

    // if (success) {
    //   alert("Document Added!");
    // } else {
    //   alert("Error adding document, please try again later!");
    // }
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={
        data && {
          department: data.department,
          title: data.title,
          description: data.description,
          permission: data.permission,
          file: file && file,
        }
      }
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Student"
        name="student"
        rules={[{ required: true, message: "Please select student!" }]}
      >
        <Select
          showSearch
          placeholder="Select a student"
          // optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          // filterOption={(input, option) =>
          //   option.children.toLowerCase().includes(input.toLowerCase())
          // }
        >
          {students &&
            students.map((item, idx) => (
              <Option
                key={idx}
                value={`${item.fname} ${item.mname} ${item.lname}-${item._id}`}
              >
                {`${item.fname} ${item.mname} ${item.lname}`}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="File"
        name="file"
        rules={[{ required: true, message: "Please input file!" }]}
      >
        {showUpload && (
          <>
            <input
              type="file"
              className="mb-1"
              onChange={(e) => {
                setUploadedNewFile(true);
                setFile(e.target.files[0]);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowUpload(false);
              }}
            >
              {" "}
              Cancel
            </button>
          </>
        )}
        {!showUpload && (
          <p>
            {" "}
            {data && data.fileName}{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowUpload(true);
              }}
            >
              {" "}
              Change file
            </button>
          </p>
        )}
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <TextArea rows={5} />
      </Form.Item>
      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please select department!" }]}
      >
        <Select>
          <Option value="CCS">CCS</Option>
          <Option value="CTE">CTE</Option>
          <Option value="COF">COF</Option>
          <Option value="CBM">CBM</Option>
          <Option value="General">General</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Permission" name="permission">
        <Switch
          defaultCheck={data && data.permission === true && true}
          defaultValue={data && data.permission === true && true}
          checked={data && data.permission === true && true}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <center>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </center>
      </Form.Item>
    </Form>
  );
};

export default EditDocumentForm;
