import { fetcher } from '@/services';
import axios from 'axios';

export const getPosts = async () => {
    return await axios.get('http://localhost:1337/api/posts');
};
