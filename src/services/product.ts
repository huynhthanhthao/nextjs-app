import { GraphQLClient, gql } from 'graphql-request';

export async function getProducts() {
    const endpoint = 'http://127.0.0.1:1337/graphql';
    const client = new GraphQLClient(endpoint);
    const query = gql`
        query {
            products {
                data {
                    id
                    attributes {
                        name
                        description
                    }
                }
            }
        }
    `;
    try {
        console.log(client);

        const data = await client.request(query);
        console.log(data); // Xử lý dữ liệu nhận được
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getProduct(params: { id: number }) {
    const endpoint = 'http://127.0.0.1:1337/graphql';
    const client = new GraphQLClient(endpoint);

    const query = gql`
        query ($id: ID!) {
            product(id: $id) {
                data {
                    id
                    attributes {
                        name
                        description
                        detail {
                            data {
                                attributes {
                                    trademark
                                    status
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    try {
        const data = await client.request(query, params);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function createProduct(params: any) {
    const endpoint = 'http://127.0.0.1:1337/graphql';
    const client = new GraphQLClient(endpoint);

    const query = gql`
        mutation (
            $name: String
            $price: Float
            $description: String
            $detail: ID!
        ) {
            createProduct(
                data: {
                    name: $name
                    price: $price
                    description: $description
                    detail: $detail
                }
            ) {
                data {
                    id
                    attributes {
                        name
                        price
                        description
                    }
                }
            }
        }
    `;
    try {
        const detail: any = await createDetailProduct(params);
        const idDetail = detail.createDetailproduct.data.id;
        const product: any = await client.request(query, {
            detail: idDetail,
            ...params,
        });

        return { ...product, ...detail };
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function createDetailProduct(params: { id: any }) {
    const endpoint = 'http://127.0.0.1:1337/graphql';
    const client = new GraphQLClient(endpoint);

    const query = gql`
        mutation ($status: Boolean, $trademark: String) {
            createDetailproduct(
                data: { status: $status, trademark: $trademark }
            ) {
                data {
                    id
                    attributes {
                        trademark
                        status
                    }
                }
            }
        }
    `;
    try {
        const data = await client.request(query, params);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updateProduct(params: { id: any }) {
    try {
        const endpoint = 'http://127.0.0.1:1337/graphql';
        const client = new GraphQLClient(endpoint);
        const query = gql`
            mutation (
                $id: ID!
                $name: String
                $description: String
                $price: Float
            ) {
                updateProduct(
                    id: $id
                    data: {
                        name: $name
                        description: $description
                        price: $price
                    }
                ) {
                    data {
                        id
                    }
                }
            }
        `;
        try {
            const data = await client.request(query, params);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
