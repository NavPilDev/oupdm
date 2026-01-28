import solutionCardsData from "../data/solutionCardsData.json";
import SolutionCard from "./SolutionCard";

export default function SolutionSection() {
  return (
    <section
      className="relative w-full bg-white from-[#345b7d] to-[#5b9acd] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20"
      data-node-id="8:28"
    >
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-[1920px] mx-auto relative z-20">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full text-center">
          <h2
            className="font-bold text-[clamp(24px,3vw,24px)] text-[#5e9bcf]"
            data-node-id="8:29"
          >
            Our Solution
          </h2>
          <h3
            className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffb703] leading-tight underline underline-offset-10 decoration-solid decoration-[#ffb703]"
            data-node-id="8:32"
          >
            Nursing-First AI Framework
          </h3>
          <p
            className="font-medium text-[clamp(18px,1.8vw,18px)] text-black leading-normal max-w-[1380px] px-4"
            data-node-id="8:30"
          >
            We are engineering a scalable solution that builds on the strong
            foundation of general-purpose Large Language Models (LLM&apos;s)
            while providing nursing-centered AI infrastructure, stackable
            credentials, and hands-on AI learning experiences. This largely
            female-dominated workforce has seen lower adoption of AI tools, and
            our mission is to embed AI across the nursing lifecycle and to
            understand what nurses genuinely want and need from AI toolchains to
            then provide it in ways that support the nursing workforce.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="w-full max-w-[800px] mx-auto my-8">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-[16px]"
              src="https://www.youtube.com/embed/OIG0piXRJMM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6 md:gap-6 lg:gap-4 w-full max-w-[1380px] mx-auto mt-8"
          data-node-id="8:113"
        >
          {solutionCardsData.cards.map((card) => (
            <SolutionCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              iconAlt={card.iconAlt}
              dataNodeId={card.dataNodeId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
