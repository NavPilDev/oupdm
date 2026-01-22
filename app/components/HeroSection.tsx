import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-8 md:py-0 min-h-0 overflow-auto" data-node-id="138:2">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[8vw] xl:gap-[147px] w-full mx-auto">
                {/* Nurse Illustration */}
                <div className="flex items-center justify-center shrink-0 w-full md:w-full md:max-w-full lg:w-[40vw] lg:max-w-[843px] lg:min-w-[400px] order-1" data-node-id="3:8">
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
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-[22px] items-start w-full md:w-full md:max-w-full lg:w-[35vw] lg:max-w-[710px] lg:min-w-[300px] shrink-0 order-2" data-node-id="139:23">
                    {/* Heading */}
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(32px,3.5vw,48px)] leading-tight text-black w-full" data-node-id="3:5">
                        Pedagogy-Driven Middleware
                    </h1>

                    {/* Description */}
                    <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[clamp(18px,1.8vw,24px)] leading-normal text-black w-full" data-node-id="3:4">
                        A nursing-first AI framework with stackable credentials, ethical training, and hands-on learning — built in partnership with OU Computer Science and OU Health & Sciences.
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[21px] h-auto sm:h-[85px] w-full" data-node-id="8:115">
                        {/* Primary Button */}
                        <button className="bg-[#5b9acd] rounded-[57px] px-6 sm:px-[21px] py-4 sm:py-[25px] h-[60px] sm:h-[clamp(70px,5vw,85px)] w-full sm:w-[clamp(280px,23vw,333.69px)] flex items-center justify-center hover:bg-[#4a8bb8] transition-colors" data-node-id="3:20">
                            <span className="font-bold text-lg sm:text-[clamp(18px,1.5vw,24px)] text-center text-white" data-node-id="3:21">
                                Explore the Framework
                            </span>
                        </button>

                        {/* Secondary Link */}
                        <a
                            href="#"
                            className="font-bold text-lg sm:text-[clamp(18px,1.5vw,24px)] text-[#5e9ccf] underline decoration-solid h-[30px] flex items-center justify-center sm:justify-start hover:text-[#4a8bb8] transition-colors w-full sm:w-auto"
                            data-node-id="3:22"
                        >
                            Why Nursing-First AI Matters
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

