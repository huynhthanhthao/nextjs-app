import { getPosts } from '@/services/post';

export async function GET(request: Request) {
    const data: any = getPosts();

    console.log(data);

    return new Response('GET OK');
}

export async function POST(request: Request) {
    return new Response('POST OK');
}

export async function PUT(request: Request) {
    return new Response('PUT OK');
}

export async function DELETE(request: Request) {
    return new Response('DELETE OK');
}
