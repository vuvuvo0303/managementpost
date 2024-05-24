import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { fetchBlogs } from './blogApi';
import { Blog } from './Blog';
import BlogCard from './BlogCard';

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetchBlogs()
            .then(data => setBlogs(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const loadMoreBlogs = () => {
        // Logic to load more blogs
    };

    return (
        <>
            <BlogCard blogs={blogs} />
            <div style={{ textAlign: 'center', marginTop: 16 }}>
                <Button type="primary" onClick={loadMoreBlogs}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default BlogList;
