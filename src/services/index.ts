import axios from 'axios';

import { ApiException } from '@/types';
import { RequestDocument, Variables, GraphQLClient } from 'graphql-request';
import { AnyObject, AnySchema } from 'yup';
import { NextApiRequest } from 'next';

export const creator = async (url: string, params: AnyObject) => {
    const { data } = await axios.post(url, params);
    return data;
};

const getGraphQLClient = () => {
    const client = new GraphQLClient('http://localhost:1337/graphql');

    return client;
};

export const fetcher = async (url: string) => {
    // if (params && Object.keys(params).length) {
    //     const searchParams = new URLSearchParams();
    //     Object.keys(params).forEach((key) => {
    //         if (params[key] !== undefined && params[key] !== null) {
    //             searchParams.append(key, ensureString(params[key]));
    //         }
    //     });
    //     url += `${url.includes('?') ? '&' : '?'}${searchParams.toString()}`;
    // }
    const { data } = await axios.get(url);

    return data;
};

export const validateInput = async <T = any>(
    schema: AnySchema,
    req: any,
    data?: AnyObject
) => {
    try {
        req = await req.json();
        data = { ...req };
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        await schema.validate(data);
        return data as T;
    } catch (err) {
        throw new ApiException(400);
    }
};
