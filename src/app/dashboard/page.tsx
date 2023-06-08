"use client"

import RecipeReviewCard from "@/components/RecipeReviewCard/RecipeReviewCard";
import { useEffect, useState } from "react";

interface Item {
    id: number;
    title: string,
    thumbnailUrl: string
}

export default function Dashboard() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)

            const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10", { cache: "no-store" })

            if (!res.ok)
                setError(true)

            const data = await res.json()

            setData(data)
            setIsLoading(false)
        }

        getData()
    }, [])

    return <>
        <div>
            <ul className="grid grid-cols-4 gap-3 mt-10">
                {data.map((item: Item) =>
                    <li key={item.id}><RecipeReviewCard item={item} /></li>
                )}
            </ul>
        </div >
    </>;
}
