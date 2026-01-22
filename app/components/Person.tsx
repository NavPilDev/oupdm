import Image from "next/image";

interface PersonProps {
    name: string;
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
}

export default function Person({ name, title, description, image, imagePosition }: PersonProps) {
    const isImageLeft = imagePosition === "left";

    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 w-full bg-white p-20 rounded-4xl">
            {/* Image - Mobile: appears first, Desktop: position based on imagePosition */}
            <div className={`flex items-center justify-center w-full lg:w-auto shrink-0 order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative w-[300px] h-[300px] rounded-full shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden bg-gray-200">
                    <Image
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Content - Mobile: appears second, Desktop: position based on imagePosition */}
            <div className={`flex flex-col gap-4 sm:gap-6 w-full lg:flex-1 order-2 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                <h4 className="font-semibold text-[clamp(32px,3vw,48px)] text-black leading-tight">
                    {name}
                </h4>
                <p className="font-medium text-[clamp(16px,1.5vw,20px)] text-black leading-normal">
                    {title}
                </p>
                <p className="font-medium text-[clamp(16px,1.5vw,20px)] text-black leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
}

