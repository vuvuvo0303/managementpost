// src/components/UpdatePostPage/UpdatePost.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

interface DataType {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  createDate: string;
  updateDate: string;
  url_tag: string;
  status: string;
}

const { Option } = Select;

const UpdatePost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<DataType | null>(null);
  const [imageFileList, setImageFileList] = useState<UploadFile[]>([]);
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement/${id}`
        );
        const data = response.data;
        setPost(data);
        setImageFileList(
          data.image
            ? [
                {
                  uid: "-1",
                  name: "image.png",
                  status: "done",
                  url: data.image,
                },
              ]
            : []
        );
        setVideoFileList(
          data.video
            ? [
                {
                  uid: "-2",
                  name: "video.mp4",
                  status: "done",
                  url: data.video,
                },
              ]
            : []
        );
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (values: any) => {
    try {
      const updatedPost = {
        ...values,
        image: imageFileList[0]?.url || post?.image,
        video: videoFileList[0]?.url || post?.video,
        updateDate: new Date().toISOString(),
      };
      await axios.put(
        `https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement/${id}`,
        updatedPost
      );
      message.success("Post updated successfully");
      navigate("/dashboard/management-posts");
    } catch (error) {
      message.error("Failed to update post");
      console.error("Failed to update post:", error);
    }
  };

  const handleImageChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setImageFileList(fileList);
  };

  const handleVideoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setVideoFileList(fileList);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      initialValues={post}
      onFinish={handleUpdate}
      layout="vertical"
      style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "Please select the status!" }]}
      >
        <Select>
          <Option value="Published">Published</Option>
          <Option value="Draft">Draft</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="url_tag"
        label="URL Tag"
        rules={[{ required: true, message: "Please input the URL tag!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Image">
        <Upload
          listType="picture"
          fileList={imageFileList}
          onChange={handleImageChange}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="video" label="Video">
        <Upload
          fileList={videoFileList}
          onChange={handleVideoChange}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdatePost;
