import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Blog } from './Blog'; // Import the Blog interface

interface Props {
    blogs: Blog[];
}

const BlogCard: React.FC<Props> = ({ blogs }) => {
    return (
        <Row gutter={[16, 16]}>
            {blogs.map(blog => (
                <Col key={blog.id} xs={24} sm={12} md={8} lg={6}> {/* Each card takes 6 columns on lg screens, 8 columns on md screens, 12 columns on sm screens, and 24 columns on xs screens */}
                    <Card
                        title={blog.title}
                        extra={<Link to={`/blogs/${blog.id}`}>More</Link>}
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img src={blog.image} alt={blog.title} style={{ width: '100%' }} />}
                    >
                        <p>{blog.description}</p>
                        <p>Status: {blog.status}</p>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default BlogCard;