import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#5b9acd] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20 min-h-[836px]" data-node-id="7:17">
            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[8vw] xl:gap-[147px] w-full max-w-[1920px] mx-auto relative z-20">
                {/* Text Content - Mobile: appears first, Desktop: left side */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-[40vw] lg:max-w-[735px] lg:min-w-[300px] order-2 lg:order-1" data-node-id="120:2">
                    <h2 className="font-bold text-[clamp(28px,3vw,40px)] text-[#2b5374]" data-node-id="7:18">
                        <span className="bg-[#ffffff] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            About
                        </span>
                    </h2>
                    <h3 className="font-bold text-[clamp(40px,5vw,64px)] text-[#ffb703] underline decoration-solid leading-tight" data-node-id="7:22">
                        <span className="bg-[#2b5374] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            Our Vision
                        </span>
                    </h3>
                    <p className="font-medium text-[clamp(18px,2.2vw,32px)] text-white leading-normal" data-node-id="7:21">
                        <span className=" px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            We believe that nursing education and clinical training should intentionally prepare nurses to use artificial intelligence safely, ethically, and effectively to enhance patient care. Pedagogy-Driven Middleware is dedicated to bridging the gap between the power of generative AI and the rigorous safety and pedagogical requirements of nursing education and practice.
                        </span>
                    </p>
                </div>

                {/* Image - Mobile: appears first, Desktop: right side */}
                <div className="flex items-center justify-center w-full md:w-full md:max-w-full lg:w-[45vw] lg:max-w-[848px] lg:min-w-[300px] order-1 lg:order-2" data-node-id="8:38">
                    <div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[848px] aspect-[848/445] rounded-[88px] shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden">
                        <Image
                            src="/assets/aboutImage.jpg"
                            alt="Students and healthcare professionals"
                            width={848}
                            height={445}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>


        </section>
    );
}

