'use client'

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ALL_POSTS } from "../../../graghql/PostQueries";
import Link from "next/link";

type Post = {
    attributes: {
        title: string, description: string
    }
    id: number
};
export default function Blog() {
    const [postList, setPostList] = useState<Post[] | null>(null);

    useEffect(() => {
        const getData = async function () {
            const client = new ApolloClient(
                {
                    uri: 'http://localhost:1337/graphql',
                    cache: new InMemoryCache()
                }
            )

            const { data } = await client.query({
                query: GET_ALL_POSTS,
            })

            return data
        }

        const fetchData = async () => {
            try {
                const data = await getData();

                setPostList(data.posts.data)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData()
    }, [])


    return <div>
        <ul>
            {postList?.map((post, index) =>
                <li key={index}>
                    <Link href={`/blog/${post.id}`}><div>Post title: {post.attributes.title}</div>
                        <div>Post des:  {post.attributes.description}</div></Link>
                </li>
            )}
        </ul>
    </div>
}
