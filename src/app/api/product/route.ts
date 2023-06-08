import { CreateProductForm, createProductFormSchema } from '@/form/product';
import { validateInput } from '@/services';
import { createProduct, getProducts, updateProduct } from '@/services/product';
import { NextResponse } from 'next/server';

export async function GET() {
    const result = await getProducts();

    return NextResponse.json(result, { status: 200 });
}

export async function POST(request: Request) {
    try {
        const params = await validateInput<CreateProductForm>(
            createProductFormSchema,
            request
        );

        const result = await createProduct(params);

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.log('====================================');
        console.log('Validate Error');
        console.log('====================================');
        return NextResponse.json({ error }, { status: 400 });
    }
}

export async function PUT(request: Request) {
    try {
        const params = await request.json();

        const result = await updateProduct(params);

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }
}
