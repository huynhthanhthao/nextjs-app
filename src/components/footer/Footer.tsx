import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-between items-end">
            <div>@by Thanh Thao Gss</div>
            <div className="flex">
                <Image className="mx-1" src="/1.png" alt="Icon facebook" width={20} height={20} />
                <Image className="mx-1" src="/2.png" alt="Icon facebook" width={20} height={20} />
                <Image className="mx-1" src="/3.png" alt="Icon facebook" width={20} height={20} />
                <Image className="mx-1" src="/4.png" alt="Icon facebook" width={20} height={20} />
            </div>
        </div>
    );
}
