import { Button, DatePicker, TimePicker, Form, Input, Select } from "antd";
import React from "react";
import { addActivity } from "../../functions/activities";

const { TextArea } = Input;
const { Option } = Select;

const AddDocumentForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { success } = await addActivity(values);

    if (success) {
      form.resetFields();
      alert("Activity Added!");
    } else {
      alert("Error adding activity, please try again later!");
    }
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
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input description!" }]}
      >
        <TextArea rows={5} />
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
