import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#ffffff] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20" data-node-id="7:17">
            {/* Content Container */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[1920px] mx-auto relative z-20">
                <h2 className="font-bold text-[clamp(24px,3vw,24px)] text-[#2b5374] text-center" data-node-id="7:18">
                    <span className="bg-[#ffffff] px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                        About
                    </span>
                </h2>
                <h3 className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffb703] underline decoration-solid leading-tight text-center" data-node-id="7:22">
                    Our Vision
                </h3>

                {/* Image - appears after Our Vision heading */}
                <div className="flex items-center justify-center w-full" data-node-id="8:38">
                    <div className="relative w-3/4 m-4 max-w-[600px] md:max-w-[700px] lg:max-w-[748px] rounded-[32px] shadow-[0px_4px_71.8px_11px_rgba(0,0,0,0.25)] overflow-hidden">
                        <Image
                            src="/assets/aboutImage.jpg"
                            alt="Students and healthcare professionals"
                            width={748}
                            height={345}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>

                <p className="font-medium text-[clamp(16px,1.8vw,16px)] text-black leading-normal text-center max-w-[735px] leading-relaxed" data-node-id="7:21">
                    <span className=" px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                        We believe that nursing education and clinical training should intentionally prepare nurses to use artificial intelligence safely, ethically, and effectively to enhance patient care. <span className="font-bold ">Pedagogy-Driven Middleware</span> is dedicated to bridging the gap between the power of generative AI and the rigorous safety and pedagogical requirements of nursing education and practice.
                    </span>
                </p>
            </div>


        </section>
    );
}

