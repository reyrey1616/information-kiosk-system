import { Button, Switch, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { addDocument } from "../../functions/documents";
const { TextArea } = Input;
const { Option } = Select;

const AddDocumentForm = ({ students }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const onFinish = async (values) => {
    console.log(values);
    values.file = file;
    const { success } = await addDocument(values);

    if (success) {
      alert("Document Added!");
    } else {
      alert("Error adding document, please try again later!");
    }
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
      initialValues={{ remember: true }}
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
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
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
        <Switch defaultCheck={false} defaultValue={false} />
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

export default AddDocumentForm;
