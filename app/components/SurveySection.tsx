import surveyData from "../data/surveyData.json";
import {
    Stethoscope,
    GraduationCap,
    BookOpen,
    AlertTriangle,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Stethoscope,
    GraduationCap,
    BookOpen,
    AlertTriangle,
};

type BarItem = { label: string; percent: number };

function ProgressBars({
    title,
    subtitle,
    items,
    barColor,
}: {
    title: string;
    subtitle: string;
    items: BarItem[];
    barColor: string;
}) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h3 className="font-bold text-[clamp(20px,2.2vw,22px)] text-[#345b7d]">
                {title}
            </h3>
            <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-[#345b7d]/80">
                {subtitle}
            </p>
            <div className="flex flex-col gap-4 mt-2">
                {items.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline gap-4">
                            <span className="font-medium text-[clamp(15px,1.5vw,17px)] text-[#345b7d]">
                                {item.label}
                            </span>
                            <span className="font-bold text-[clamp(16px,1.6vw,18px)] text-[#5b9acd] shrink-0">
                                {item.percent}%
                            </span>
                        </div>
                        <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${item.percent}%`,
                                    backgroundColor: barColor,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SurveySection() {
    const {
        eyebrow,
        title,
        intro,
        headlineStats,
        usageSection,
        sentimentSection,
        concernsSection,
        callout,
    } = surveyData;

    return (
        <section
            className="relative w-full bg-[#f8f6f1] flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20"
            data-node-id="survey:1"
        >
            <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-[1380px] mx-auto relative z-20">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 sm:gap-6 w-full text-center">
                    <p className="font-bold text-[clamp(12px,1.2vw,14px)] tracking-widest text-[#5b9acd] uppercase">
                        {eyebrow}
                    </p>
                    <h2 className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffb703] leading-tight underline underline-offset-10 decoration-solid decoration-[#ffb703]">
                        {title}
                    </h2>
                    <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-[#345b7d] leading-relaxed max-w-[1000px]">
                        {intro}
                    </p>
                </div>

                {/* Headline stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {headlineStats.map((stat) => {
                        const Icon = iconMap[stat.icon] ?? Stethoscope;
                        return (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center gap-4 bg-white rounded-2xl p-6 shadow-sm text-center"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5b9acd]/10">
                                    <Icon className="w-6 h-6 text-[#5b9acd]" strokeWidth={1.75} />
                                </div>
                                <span className="font-bold text-[clamp(40px,4vw,56px)] text-[#5b9acd] leading-none">
                                    {stat.value}
                                </span>
                                <p className="font-medium text-[clamp(14px,1.4vw,16px)] text-[#345b7d] leading-snug">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bar chart subsections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
                    <ProgressBars
                        title={usageSection.title}
                        subtitle={usageSection.subtitle}
                        items={usageSection.items}
                        barColor={usageSection.barColor}
                    />
                    <ProgressBars
                        title={sentimentSection.title}
                        subtitle={sentimentSection.subtitle}
                        items={sentimentSection.items}
                        barColor={sentimentSection.barColor}
                    />
                    <ProgressBars
                        title={concernsSection.title}
                        subtitle={concernsSection.subtitle}
                        items={concernsSection.items}
                        barColor={concernsSection.barColor}
                    />
                </div>

                {/* Callout */}
                <div className="w-full bg-white rounded-2xl p-6 md:p-8 border-l-4 border-[#ffb703] shadow-sm">
                    <h3 className="font-bold text-[clamp(14px,1.4vw,16px)] tracking-widest text-[#5b9acd] uppercase mb-4">
                        {callout.title}
                    </h3>
                    <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-[#345b7d] leading-relaxed">
                        {callout.body}
                    </p>
                </div>
            </div>
        </section>
    );
}
