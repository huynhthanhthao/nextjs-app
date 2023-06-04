import BasicCard from "@/components/card/Card";

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10", { cache: "no-store" });

    return res.json();
};
interface BlogType {
    title: string;
    body: string;
    id: number;
}
export default async function Blog() {
    const blogs = await getData();

    return (
        <ul className="grid grid-cols-3 gap-3">
            {blogs.map((item: BlogType) => (
                <li key={item.id}>
                    <BasicCard blog={item} />
                </li>
            ))}
        </ul>
    );
}
