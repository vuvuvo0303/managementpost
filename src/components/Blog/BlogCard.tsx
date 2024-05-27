import React, { useState } from 'react';
import { Card, Row, Col, Input, Pagination } from 'antd';
import { Blog } from './Blog'; // Import the Blog interface
import { format } from 'date-fns'; // Import the format function from date-fns
import { Link } from 'react-router-dom';

const { Search } = Input;

interface Props {
    blogs: Blog[];
}

const BlogCard: React.FC<Props> = ({ blogs }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 6;

    // Filter blogs based on search term
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the blogs to be displayed on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + pageSize);

    console.log(currentBlogs); // Log filtered blogs to verify data

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginBottom: '10px' }}>
                <Search
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '200px', /* Adjust the width as needed */
                    }}
                    enterButton
                />
            </div>
            <Row gutter={[16, 16]}>
                {currentBlogs.map(blog => (
                    <Col key={blog.id} xs={24} sm={12} md={8} lg={8}>
                        <Card
                            title={blog.title}
                            extra={
                                <p style={{ color: blog.status.toLowerCase() === 'draft' ? 'red' : blog.status.toLowerCase() === 'published' ? 'green' : 'black' }}>
                                    {blog.status.toLowerCase() === 'draft' || blog.status.toLowerCase() === 'published' ? blog.status : ''}
                                </p>
                            }
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
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredBlogs.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ textAlign: 'center', marginTop: '20px' }}
            />
        </div>
    );
};

export default BlogCard;
