import Image from "next/image";

export default function HeroSection() {
  return (
    <main
      className="flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-8 md:py-20 bg-[#4280b3]"
      data-node-id="138:2"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[8vw] xl:gap-[147px] w-full mx-auto">
        {/* Nurse Illustration */}
        <div
          className="flex items-center justify-center shrink-0 w-full md:w-full md:max-w-full lg:w-[40vw] lg:max-w-[843px] lg:min-w-[400px] order-1"
          data-node-id="3:8"
        >
          <div className="relative w-full max-w-[600px] md:max-w-[700px] aspect-square h-auto">
            <Image
              src="/assets/heroImage.png"
              alt="Female nurse using laptop"
              width={843}
              height={843}
              className="object-contain w-full h-full -scale-x-100"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className="flex flex-col gap-4 sm:gap-5 md:gap-[22px] items-start w-[90%] md:w-[90%] md:max-w-full lg:w-[25vw] lg:max-w-[710px] lg:min-w-[300px] shrink-0 order-2"
          data-node-id="139:23"
        >
          {/* Heading */}
          <h1
            className="font-bold text-right text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(32px,3.5vw,43.6px)] leading-tight text-[#ffffff] w-full"
            data-node-id="3:5"
          >
            <span
              className="bg-[#13335E]"
              style={{
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              AI-Ready Nurses
            </span>
          </h1>

          {/* Description */}
          <p
            className="font-medium text-right text-base sm:text-lg md:text-xl lg:text-[clamp(18px,1.8vw,18px)] leading-relaxed text-[#ffffff] w-full"
            data-node-id="3:4"
          >
            A scalable solution combining nursing-centered AI infrastructure,
            stackable credentials, and hands-on AI learning to embed AI across
            the nursing lifecycle, supporting women in the workforce.
          </p>

          {/* CTA Section */}
          <div
            className="flex flex-col sm:flex-row items-end justify-end sm:items-center gap-4 sm:gap-[21px] h-auto sm:h-[85px] w-full"
            data-node-id="8:115"
          >
            {/* Primary Button → About section */}
            <a
              href="#about"
              className="bg-[#52718a] rounded-[57px] px-3 sm:px-[18px] py-3 sm:py-[16px] h-[30px] sm:h-[clamp(40px,5vw,50px)] flex items-center justify-center hover:bg-[#4a8bb8] transition-colors w-full sm:w-auto"
              data-node-id="3:20"
            >
              <span
                className="font-bold text-lg sm:text-[clamp(16px,1.8vw,16px)] text-center text-white"
                data-node-id="3:21"
              >
                Explore the Framework
              </span>
            </a>

            {/* Secondary Link → Challenge section */}
            <a
              href="#challenge"
              className="font-bold text-lg sm:text-[clamp(16px,1.8vw,16px)] text-[#ffffff] underline decoration-solid h-[30px] flex items-center justify-center sm:justify-start hover:text-[#4a8bb8] transition-colors w-full sm:w-auto"
              data-node-id="3:22"
            >
              Why Nursing-First AI?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
