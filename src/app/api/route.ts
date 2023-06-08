import { getProducts } from '@/services/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const result = await getProducts();
    return NextResponse.json(result, { status: 200 });
}
