import { request, gql, GraphQLClient } from 'graphql-request';

interface Post {
    title: string;
    description: string;
}

export async function getPosts(): Promise<Post[] | null> {
    const query = gql`
        {
            posts {
                data {
                    attributes {
                        title
                        description
                    }
                }
            }
        }
    `;

    try {
        const client = new GraphQLClient('http://localhost:1337/graphql');
        const data = (await client.request(query)) as {
            posts: { data: Post[] };
        };
        const posts: Post[] = data.posts.data;
        return posts;
    } catch (error) {
        console.error('Error retrieving posts:', error);
        return null;
    }
}
