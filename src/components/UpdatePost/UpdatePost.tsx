import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import axios from "axios";

interface PostData {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  urlTag: string;
  status: string;
}

interface UpdatePostProps {
  postId: string;
}

const UpdatePost: React.FC<UpdatePostProps> = ({ postId }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement/${postId}`,
        values
      );
      message.success("Post updated successfully");
      console.log(response.data); // Updated post data from server
      setLoading(false);
    } catch (error) {
      message.error("Failed to update post");
      setLoading(false);
    }
  };

  return (
    <Form
      name="update_post_form"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{}} // Set initial values if needed
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter description" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="image"
        label="Image URL"
        rules={[{ required: true, message: "Please enter image URL" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="video"
        label="Video URL"
        rules={[{ required: true, message: "Please enter video URL" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="urlTag"
        label="URL Tag"
        rules={[{ required: true, message: "Please enter URL tag" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "Please select status" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdatePost;
