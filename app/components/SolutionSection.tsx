export default function SolutionSection() {
    return (
        <section className="relative w-full bg-white from-[#345b7d] to-[#5b9acd] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20" data-node-id="8:28">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-[1920px] mx-auto relative z-20">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full text-center">
                    <h2 className="font-bold text-[clamp(28px,3vw,32px)] text-[#5e9bcf]" data-node-id="8:29">
                        Our Solution
                    </h2>
                    <h3 className="font-bold text-[clamp(32px,3.5vw,48px)] text-[#ffb703] underline decoration-solid leading-tight" data-node-id="8:32">
                        Pedagogy-Driven Middleware
                    </h3>
                    <p className="font-medium text-[clamp(18px,1.8vw,24px)] text-black leading-normal max-w-[1380px] px-4" data-node-id="8:30">
                        We are engineering a framework that exists upon the strong foundation of general-purpose Large Language Models (LLM&apos;s), while providing a tailored, safe, nurse-oriented tool to help the nursing community. This largely female-dominated workforce has seen lower adoption of AI tools and our mission is to understand what nurses genuinely want and need from AI toolchains to then provide it.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full mt-8" data-node-id="8:113">
                    {/* Card 1: Nursing-Lead Development */}
                    <div className="bg-[#3863a3] flex flex-col gap-6 sm:gap-7 items-center justify-center px-6 sm:px-8 md:px-[34px] py-12 sm:py-14 md:py-[71px] rounded-[59px] flex-1 min-h-[763px]" data-node-id="8:56">
                        <div className="bg-white flex items-center justify-center px-[14px] py-[11px] rounded-[86.5px] w-[173px] h-[173px] shrink-0" data-node-id="44:82">
                            <div className="relative w-[144px] h-[144px]" data-node-id="8:61">
                                <img
                                    src="http://localhost:3845/assets/0782dd678f942184485848a2cbf422ee4fc300ef.svg"
                                    alt="Nurse icon"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <h4 className="font-bold text-[clamp(28px,3vw,32px)] text-[#ffa629] text-center w-full" data-node-id="8:59">
                            Nursing-Lead Development
                        </h4>
                        <p className="font-medium text-[clamp(18px,1.8vw,24px)] text-white leading-normal text-center w-full" data-node-id="8:58">
                            Our computer science partners will work directly with women in the nursing community to understand the resources they need to be successful, leading to a tool that will actually deliver on its promises.
                        </p>
                    </div>

                    {/* Card 2: Safe AI Tools */}
                    <div className="bg-[#3863a3] flex flex-col gap-6 sm:gap-7 items-center justify-center px-6 sm:px-8 md:px-[40px] py-12 sm:py-14 md:py-[54px] rounded-[59px] flex-1 min-h-[763px]" data-node-id="8:86">
                        <div className="bg-white flex items-center justify-center p-[26px] rounded-[86.5px] w-[173px] h-[173px] shrink-0" data-node-id="8:90">
                            <div className="relative w-[122px] h-[122px]" data-node-id="8:92">
                                <img
                                    src="http://localhost:3845/assets/c13e81401cb80fec82e63f5c8620779b91bc852a.svg"
                                    alt="Safety icon"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <h4 className="font-bold text-[clamp(28px,3vw,32px)] text-[#ffa629] text-center w-full" data-node-id="8:89">
                            Safe AI Tools
                        </h4>
                        <p className="font-medium text-[clamp(18px,1.8vw,24px)] text-white leading-normal text-center w-full" data-node-id="8:88">
                            We enforce explicit safety boundaries, ensuring that no data ever leaves our tool and the local devices it is used on. We work strictly with local institutional policies and course guidelines to ensure our platform is safe for both nurses and their patients.
                        </p>
                    </div>

                    {/* Card 3: Education-First Platform */}
                    <div className="bg-[#3863a3] flex flex-col gap-6 sm:gap-7 items-center justify-center px-6 sm:px-8 md:px-[26px] py-12 sm:py-14 md:py-[54px] rounded-[59px] flex-1 min-h-[763px]" data-node-id="8:77">
                        <div className="bg-white flex items-center justify-center px-[23px] py-[21px] rounded-[86.5px] w-[173px] h-[173px] shrink-0" data-node-id="8:81">
                            <div className="relative w-[127px] h-[127px]" data-node-id="8:83">
                                <img
                                    src="http://localhost:3845/assets/3cea72e4dc470882eb68a022046e93f517058a42.svg"
                                    alt="Education icon"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <h4 className="font-bold text-[clamp(28px,3vw,32px)] text-[#ffa629] text-center w-full" data-node-id="8:80">
                            Education-First Platform
                        </h4>
                        <p className="font-medium text-[clamp(18px,1.8vw,24px)] text-white leading-normal text-center w-full" data-node-id="8:79">
                            Our initial rollout aims to directly support nursing students during their education. Our computer science partners and OUHSC to ensure that our tool aligns with existing course objectives and learning goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

