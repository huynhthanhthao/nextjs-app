import Image from "next/image";

const getPost = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, { cache: "no-store" });

    return res.json();
};

export default async function BlogPost({ params }: { params: { id: number; title: string; url: string } }) {
    const post = await getPost(params.id);

    return (
        <div className="flex justify-between">
            <div>
                <p>{post.title}</p>
            </div>
            <Image alt="post image" width={500} height={500} src={post.url} />
        </div>
    );
}
