import * as yup from 'yup';

import { YupObjectSchema } from '@/types';

export type CreateProductForm = {
    name: string | null;
    price: Number | string;
    description: Boolean | null;
};

export const createProductFormSchema = yup.object<
    YupObjectSchema<CreateProductForm>
>({
    name: yup.string().nullable().required('Please inter id.'),
    price: yup.number().nullable().required('Please inter price.'),
    description: yup.string(),
});
