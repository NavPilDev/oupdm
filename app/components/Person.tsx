import Image from "next/image";

interface PersonProps {
  name: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  layout?: "horizontal" | "vertical";
}

export default function Person({
  name,
  title,
  description,
  image,
  imagePosition,
  layout = "horizontal",
}: PersonProps) {
  const isImageLeft = imagePosition === "left";

  // Vertical card layout (for multi-person organizations / grid)
  if (layout === "vertical") {
    return (
      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-full sm:max-w-[340px] bg-white p-6 sm:p-8 md:p-10 rounded-4xl text-center">
        {/* Image */}
        <div className="flex items-center justify-center w-full">
          <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden bg-gray-200">
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 sm:gap-3 w-full">
          <h4 className="font-semibold text-[clamp(20px,2.4vw,24px)] text-black leading-tight">
            {name}
          </h4>
          <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-black leading-normal">
            {title}
          </p>
          <p className="font-medium text-[clamp(14px,1.4vw,16px)] text-black leading-normal">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Horizontal card layout (default / single-person organization)
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12 w-full bg-white p-6 sm:p-8 md:p-12 lg:p-20 rounded-4xl">
      {/* Image - Mobile: appears first, Desktop: position based on imagePosition */}
      <div
        className={`flex items-center lg:items-stretch justify-center w-full lg:w-auto shrink-0 order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden bg-gray-200">
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
      <div
        className={`flex flex-col gap-4 sm:gap-6 w-full lg:flex-1 order-2 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        <h4 className="font-semibold text-[clamp(32px,3.5vw,32px)] text-black leading-tight">
          {name}
        </h4>
        <p className="font-medium text-[clamp(24px,3vw,24px)] text-black leading-normal">
          {title}
        </p>
        <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-black leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
