import Image from "next/image";

export default function AboutTeamSection() {
    return (
        <section className="relative w-full bg-[#F59810] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20" data-node-id="8:170">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[8vw] xl:gap-[147px] w-full max-w-[1920px] mx-auto relative z-20">
                {/* Text Content - Mobile: appears second, Desktop: left side */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-[55vw] lg:max-w-[1105px] lg:min-w-[300px] order-2 lg:order-1" data-node-id="8:195">
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8" data-node-id="8:196">
                        <h2 className="font-bold text-[clamp(28px,3vw,32px)] text-[#5b9acd] bg-white px-2 py-1 inline-block w-fit" data-node-id="8:172">
                            Our Team
                        </h2>
                        <h3 className="font-bold text-[clamp(32px,3.5vw,48px)] text-[#F59810] underline decoration-solid leading-tight" data-node-id="8:174">
                            <span className="bg-[#ffffff] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                                About our Team
                            </span>
                        </h3>
                    </div>
                    <p className="font-bold text-[clamp(18px,1.8vw,24px)] text-black leading-normal" data-node-id="8:176">
                        <span className="bg-[#ffffff] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            The project operates using a hub‑and‑spoke collaboration model, led by the Oklahoma Center for Nursing (OCN) as the central coordinating hub. OCN provides project leadership, fiscal oversight, reporting, and statewide workforce alignment, ensuring activities reflect nursing needs across all regions of Oklahoma.
                        </span>
                    </p>
                </div>

                {/* Image - Mobile: appears first, Desktop: right side */}
                <div className="flex items-center justify-center w-full md:w-full md:max-w-full lg:w-[30vw] lg:max-w-[462px] lg:min-w-[300px] order-1 lg:order-2" data-node-id="8:185">
                    <div className="relative w-full max-w-[400px] md:max-w-[450px] lg:max-w-[512px] rounded-[88px] shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden bg-gray-200 p-6 sm:p-8 md:p-10" data-node-id="8:187">
                        <div className="relative w-full aspect-[512/491]">
                            <Image
                                src="/assets/aboutTeam.png"
                                alt="Our team"
                                width={512}
                                height={491}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

