import teamData from "../data/teamData.json";
import Company from "./Company";

export default function TeamOrganizationSection() {
    return (
        <section className="relative w-full bg-[#3863A3] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20" data-node-id="8:206">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-[1380px] mx-auto relative z-20">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full text-center">
                    <h2 className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffa629] underline decoration-solid leading-tight" data-node-id="42:52">
                        <span className=" px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            {teamData.title}
                        </span>

                    </h2>
                    <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-white leading-normal max-w-[1380px] px-4" data-node-id="42:50">
                        <span className=" px-2 py-1" style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                            {teamData.description}
                        </span>
                    </p>
                </div>

                {/* YouTube Video Embed */}
                <div className="w-full max-w-[800px] mx-auto my-8">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[16px]"
                            src="https://www.youtube.com/embed/2m-zN-5yBKo"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Organizations */}
                <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 w-full" data-node-id="43:71">
                    {teamData.organizations.map((org, index) => (
                        <Company
                            key={index}
                            name={org.name}
                            description={org.description}
                            link={org.link}
                            people={org.people.map(person => ({
                                ...person,
                                imagePosition: person.imagePosition as "left" | "right"
                            }))}
                            order={index}
                        />
                    ))}
                </div>

                {/* Closing Statement */}
                <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-white leading-normal max-w-[1380px] px-4 text-center" data-node-id="43:64">
                    {teamData.closingStatement}
                </p>
            </div>
        </section>
    );
}

