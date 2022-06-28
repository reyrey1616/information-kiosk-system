import { Button, DatePicker, TimePicker, Form, Input, Select } from "antd";
import React from "react";
import moment from "moment-timezone";
import { updateActivity } from "../../functions/activities";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

const EditActivityForm = ({ data }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { success } = await updateActivity({
      ...values,
      id: data && data._id,
    });
    if (success) {
      navigate("/admin/activities");
      alert("Activity Updated!");
    } else {
      alert("Error updating activity, please try again later!");
    }
  };
  console.log(data);

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={
        data && {
          ...data,
          startDate: moment(
            moment(data.startDateTime).format("YYYY/MM/DD"),
            dateFormat
          ),
          startTime: moment(data.startDateTime).tz("Asia/Manila"),
          endDate: moment(
            moment(data.endDateTime).format("YYYY/MM/DD"),
            dateFormat
          ),
          endTime: moment(data.endDateTime).tz("Asia/Manila"),
        }
      }
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

      <Form.Item
        label="Start date"
        name="startDate"
        rules={[{ required: true, message: "Please input start date!" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Start time"
        name="startTime"
        rules={[{ required: true, message: "Please input start time!" }]}
      >
        <TimePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="End date"
        name="endDate"
        rules={[{ required: true, message: "Please input end date!" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="End time"
        name="endTime"
        rules={[{ required: true, message: "Please input end time!" }]}
      >
        <TimePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Department"
        name="department"
        defaultValue={data && data.department}
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

export default EditActivityForm;
