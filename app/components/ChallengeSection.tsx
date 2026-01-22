import Image from "next/image";

export default function ChallengeSection() {
    return (
        <section className="relative w-full bg-[#345b7d] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20 min-h-[836px]" data-node-id="8:27">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[8vw] xl:gap-[147px] w-full max-w-[1920px] mx-auto relative z-20">
                {/* Image - Mobile: appears first, Desktop: left side */}
                <div className="flex items-center justify-center w-full md:w-full md:max-w-full lg:w-[45vw] lg:max-w-[854px] lg:min-w-[300px] order-1 lg:order-1" data-node-id="8:41">
                    <div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[854px] aspect-[854/569] rounded-[52px] shadow-[0px_4px_41.6px_22px_rgba(0,0,0,0.25)] overflow-hidden">
                        <Image
                            src="/assets/challengeImage.jpg"
                            alt="Nursing challenge illustration"
                            width={854}
                            height={569}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>

                {/* Text Content - Mobile: appears second, Desktop: right side */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-[40vw] lg:max-w-[755px] lg:min-w-[300px] order-2 lg:order-2" data-node-id="7:25">
                    <h2 className="font-bold text-[clamp(32px,3.5vw,48px)] text-[#ffb703] underline decoration-solid leading-tight" data-node-id="7:24">
                        The Challenge
                    </h2>
                    <div className="font-medium text-[clamp(18px,1.8vw,24px)] text-white leading-normal">
                        <p className="mb-4">
                            Nursing is currently facing a dual crisis: a massive workforce shortage and a rapidly increasing complexity in clinical care. While generative AI offers a &quot;bold and scalable&quot; way to support this workforce, current unconstrained AI interfaces are often:
                        </p>
                        <ul className="flex flex-col gap-4 list-disc ms-6 sm:ms-8 md:ms-12 space-y-4">
                            <li>
                                <span className="bg-[#5086b6] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                                    <span className="underline decoration-solid">Poorly Aligned:</span>
                                    <span> Generic AI doesn&apos;t understand specific nursing workflows or pedagogical goals.</span>
                                </span>
                            </li>
                            <li>
                                <span className="bg-[#5086b6] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                                    <span className="underline decoration-solid">High Risk:</span>
                                    <span> Unchecked outputs can pose unacceptable risks in practice-adjacent contexts.</span>
                                </span>
                            </li>
                            <li>
                                <span className="bg-[#5086b6] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                                    <span className="underline decoration-solid">Overwhelming:</span>
                                    <span> Raw LLM interactions can increase cognitive load rather than reducing it.</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

