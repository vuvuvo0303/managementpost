import React, { useState } from 'react';
import { Card, Row, Col, Input } from 'antd';
import { Blog } from './Blog'; // Import the Blog interface
import { format } from 'date-fns'; // Import the format function from date-fns
import { Link } from 'react-router-dom';

interface Props {
    blogs: Blog[];
}

const BlogCard: React.FC<Props> = ({ blogs }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter blogs based on search term
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredBlogs); // Log filtered blogs to verify data

    return (
        <div>
            <Input
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
            <Row gutter={[16, 16]}>
                {filteredBlogs.map(blog => (
                    <Col key={blog.id} xs={24} sm={12} md={8} lg={8}>
                        <Card
                            title={blog.title}
                            extra={<button style={{ color: blog.status.toLowerCase() === 'draft' ? 'red' : 'green' }}>{blog.status}</button>}
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img src={blog.image} alt={blog.title} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />}
                        >
                            <p>{format(new Date(blog.createdAt), 'dd/MM/yyyy HH:mm:ss')}</p>
                            <p>{blog.description}</p>
                            <Link to={`/blogs/${blog.id}`}>Details</Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogCard;
