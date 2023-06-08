import { getProduct } from '@/services/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: any }) {
    const result = await getProduct(params);
    return NextResponse.json({ result }, { status: 200 });
}

export async function POST(request: Request, { params }: { params: any }) {
    // console.log(123);

    // const result = await createProduct(params);

    return NextResponse.json({ status: 200 });
}

export async function DELETE() {
    return NextResponse.json({ status: 200 });
}

export async function PUT() {
    return NextResponse.json({ status: 2 });
}
