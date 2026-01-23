interface SolutionCardProps {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
    dataNodeId?: string;
}

export default function SolutionCard({ title, description, icon, iconAlt, dataNodeId }: SolutionCardProps) {
    return (
        <div className="bg-[#3863a3] flex flex-col gap-4 items-center justify-center px-4 sm:px-6 md:px-6 py-8 sm:py-10 md:py-10 rounded-[32px] flex-1" data-node-id={dataNodeId}>
            <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px] shrink-0">
                <div className="relative w-[80px] h-[80px]">
                    <img
                        src={icon}
                        alt={iconAlt}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <h4 className="font-bold text-[clamp(20px,2.5vw,22px)] text-[#ffa629] text-center w-full px-2">
                {title}
            </h4>
            <p className="font-medium text-[clamp(14px,1.5vw,16px)] text-white leading-relaxed text-center w-full px-4">
                {description}
            </p>
        </div>
    );
}

