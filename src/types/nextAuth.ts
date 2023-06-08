import { JWT } from 'next-auth/jwt';

export type Token = JWT & {
    id: number;
    jwt: string;
    exp: number;
    jti: string;
};
