import { ApiError } from 'next/dist/server/api-utils';

export type YupObjectSchema<T> = { [P in keyof T]?: T[P] | any };

export class ApiException extends Error {
    public status: number;

    public constructor(status: number) {
        super();
        this.status = status;
    }
}
