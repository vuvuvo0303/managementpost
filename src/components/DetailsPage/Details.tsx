import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns'; // Import the format function from date-fns
import { Blog } from '../Blog/Blog';

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get<Blog>(`https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Failed to fetch blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    const formattedDateTime = format(new Date(blog.createdAt), 'dd/MM/yyyy HH:mm:ss');

    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{formattedDateTime}</p>
            <img src={blog.image} alt={blog.title} style={{ maxWidth: '100%', maxHeight: '600px', width: '1000px', objectFit: 'cover' }} />
            <p>{blog.description}</p>
        </div>
    );
};

export default Details;
