'use client'
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from 'react';
import { GET_POST_BY_ID } from "../../../../graghql/PostQueries";
type Post = {
    title: string;
    description: string;
};
export default function Post({ params }: { params: { id: string } }) {
    const [post, setPost] = useState<Post | null>(null);


    useEffect(() => {
        const getData = async function () {
            const client = new ApolloClient({
                uri: 'http://localhost:1337/graphql',
                cache: new InMemoryCache(),
            });

            const { data } = await client.query({
                query: GET_POST_BY_ID,
                variables: { id: params.id }
            })

            return data
        }
        const fetchData = async () => {
            try {
                const data = await getData();

                setPost(data.post.data.attributes)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData()

    }, [])


    return <div>This is blog
        <div>Post title:{post?.title}</div>
        <div>Post description:{post?.description}</div>
    </div>;
}
