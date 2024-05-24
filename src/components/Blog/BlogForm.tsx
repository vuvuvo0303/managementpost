import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { Blog } from './Blog';
const { Option } = Select;

const BlogForm: React.FC<{ blog?: Blog, onFinish: (values: Blog) => void }> = ({ blog, onFinish }) => {
    return (
        <Form initialValues={blog} onFinish={onFinish} layout="vertical">
            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                <Select>
                    <Option value="draft">Draft</Option>
                    <Option value="published">Published</Option>
                </Select>
            </Form.Item>
            <Form.Item name="createDate" label="Create Date">
                <DatePicker showTime />
            </Form.Item>
            <Form.Item name="updateDate" label="Update Date">
                <DatePicker showTime />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
                <Input />
            </Form.Item>
            <Form.Item name="urlTag" label="URL Tag">
                <Input />
            </Form.Item>
            <Form.Item name="video" label="Video URL">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default BlogForm;
