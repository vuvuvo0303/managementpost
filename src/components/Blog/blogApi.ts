import { Blog } from './Blog';

export const fetchBlogs = async (): Promise<Blog[]> => {
    try {
        const response = await fetch('https://664f16ddfafad45dfae24968.mockapi.io/api/v1/postManagement');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
