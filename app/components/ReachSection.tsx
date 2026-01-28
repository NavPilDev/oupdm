import Image from "next/image";

export default function ReachSection() {
    return (
        <section className="relative w-full bg-[#1a1a1a] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20" data-node-id="reach:1">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-[1920px] mx-auto relative z-20">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full text-center">
                    <h2 className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffb703] leading-tight underline underline-offset-10 decoration-solid decoration-[#ffb703]" data-node-id="reach:2">
                        Reach Across the Nursing Career Lifecycle
                    </h2>
                </div>

                {/* Project Overview */}
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[1200px] mx-auto">
                    <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-[#ffffff] leading-relaxed max-w-[1000px] px-4 text-center" data-node-id="reach:4">
                        The AI-Ready Nurses (AIRN) project leverages an evidence-based co-design process to bridge the gap between AI development and clinical nursing practice. By integrating feedback from students, educators, and practitioners into its &quot;Nursing-Aware&quot; infrastructure, AIRN ensures that AI tools support rather than override professional judgment.
                    </p>

                    <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-[#ffffff] leading-relaxed max-w-[1000px] px-4 text-center" data-node-id="reach:5">
                        The project is designed for systemic, career-long impact through:
                    </p>

                    {/* Impact Points */}
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[1000px] px-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-[clamp(20px,2.2vw,22px)] text-[#5b9acd] text-left" data-node-id="reach:6">
                                Statewide Transformation
                            </h3>
                            <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-[#ffffff] leading-relaxed text-left" data-node-id="reach:7">
                                Targeting 7,700+ practicing nurses across 59 rural Oklahoma counties to improve healthcare outcomes in a state currently ranked 45th in the U.S.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-[clamp(20px,2.2vw,22px)] text-[#5b9acd] text-left" data-node-id="reach:8">
                                Educational Innovation
                            </h3>
                            <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-[#ffffff] leading-relaxed text-left" data-node-id="reach:9">
                                Enrolling 1,200+ students and 400+ educators in a curriculum featuring stackable AI credentials and risk-free simulation scenarios.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-[clamp(20px,2.2vw,22px)] text-[#5b9acd] text-left" data-node-id="reach:10">
                                National Scalability
                            </h3>
                            <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-[#ffffff] leading-relaxed text-left" data-node-id="reach:11">
                                Establishing a &quot;National Blueprint&quot; for nursing-first AI adoption, creating a replicable model for the 5 million nurses nationwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lifecycle Chart Image */}
                <div className="w-full max-w-[1200px] mx-auto mt-4">
                    <div className="relative w-full rounded-xl shadow-2xl overflow-hidden">
                        <Image
                            src="/assets/lifecycle-chart.png"
                            alt="Lifecycle chart showing the reach of the Nursing‑Aware AI Engine across educators, students, and practitioners"
                            width={1200}
                            height={800}
                            className="object-contain w-full h-auto"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

