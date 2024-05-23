import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import { formatISO } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

type PostData = {
    title: string;
    description: string;
    status: string;
    image: string;
    video?: string;
    urlTag: string;
    createdAt: string;
    updatedAt: string;
}

const AddPost: React.FC = () => {
    const [form] = Form.useForm();
    const [statusOptions] = useState(['Published', 'Draft']); // Giả sử các trạng thái có sẵn
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [urlTag, setUrlTag] = useState('');

    const onSubmit = async () => {
        try {
            await form.validateFields();
            const now = formatISO(new Date()); // Lấy thời gian hiện tại và định dạng thành ISO
            const postData: PostData = {
                title,
                description,
                status,
                image,
                video,
                urlTag,
                createdAt: now,
                updatedAt: now,
            }
            await axios.post('https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement', postData);
            toast.success('Add post successfully')
        } catch (errorInfo) {
            toast.error('Failed to add post.');
        }
    };

    return (
        <>
            <Form form={form} name="dynamic_rule" style={{ maxWidth: 600 }}>
                <Form.Item
                    {...formItemLayout}
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please input the title' }]}
                >
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Please input the title" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please input the description' }]}
                >
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Please input the description" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="status"
                    label="Status"
                    rules={[{ required: true, message: 'Please select the status' }]}
                >
                    <Select value={status} onChange={(value) => setStatus(value)} placeholder="Please select the status">
                        {statusOptions.map(status => (
                            <Select.Option key={status} value={status}>
                                {status}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="image"
                    label="Image"
                    rules={[{ required: true, message: 'Please input the image URL' }]}
                >
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Please input the image URL" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="video"
                    label="Video"
                >
                    <Input value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Please input the video URL (optional)" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="urlTag"
                    label="URL Tag"
                    rules={[{ required: true, message: 'Please input the URL tag' }]}
                >
                    <Input value={urlTag} onChange={(e) => setUrlTag(e.target.value)} placeholder="Please input the URL tag" />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <ToastContainer />
        </>
    );
};

export default AddPost;
