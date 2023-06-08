'use client'
import Image from "next/image";
import Hero from "public/hero.png";


export default function Home() {
    const handleCallApi = async () => {
        const res = await fetch('/api/posts', {
            method: 'GET',
        })
        console.log(res);

    }
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-bold text-3xl">Better design for your digital products.</p>
                <p className="my-3">
                    Turning your idea into Reaity. We bring together the teams from global tech industry
                </p>
                <button onClick={handleCallApi} className="p-3 bg-green-500 text-white font-bold rounded-md">See Our Works</button>
            </div>
            <Image src={Hero} alt="Hero" width={500} height={500} />
        </div>
    );
}
