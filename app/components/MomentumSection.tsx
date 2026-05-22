import momentumData from "../data/momentumData.json";
import {
    Handshake,
    Award,
    Users,
    Utensils,
    Calendar,
    Trophy,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Handshake,
    Award,
    Users,
    Utensils,
    Calendar,
    Trophy,
};

export default function MomentumSection() {
    const { eyebrow, title, intro, items } = momentumData;

    return (
        <section
            className="relative w-full bg-white flex items-center justify-center px-4 sm:px-8 md:px-[110px] py-12 md:py-16 lg:py-20"
            data-node-id="momentum:1"
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

                {/* Timeline cards */}
                <div className="flex flex-col gap-6 w-full">
                    {items.map((item) => {
                        const Icon = iconMap[item.icon] ?? Calendar;
                        return (
                            <article
                                key={item.id}
                                className="bg-[#f8f6f1] rounded-2xl p-6 md:p-8 border-l-4 shadow-sm"
                                style={{ borderLeftColor: item.accentColor }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                                        style={{ backgroundColor: `${item.accentColor}20` }}
                                    >
                                        <Icon
                                            className="w-6 h-6"
                                            style={{ color: item.accentColor }}
                                            strokeWidth={1.75}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 flex-1">
                                        <span className="font-bold text-[clamp(11px,1.1vw,13px)] tracking-widest text-[#5b9acd] uppercase">
                                            {item.tag}
                                        </span>
                                        <h3 className="font-bold text-[clamp(20px,2.2vw,24px)] text-[#345b7d] leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="font-medium text-[clamp(16px,1.6vw,18px)] text-[#345b7d]/90 leading-relaxed">
                                            {item.body}
                                        </p>
                                        {"footnote" in item && item.footnote && (
                                            <p className="font-medium text-[clamp(14px,1.4vw,16px)] text-[#5b9acd] italic">
                                                {item.footnote}
                                            </p>
                                        )}
                                        {"extras" in item && item.extras && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.extras.map((chip) => (
                                                    <span
                                                        key={chip}
                                                        className="bg-white border border-[#5b9acd] rounded-full px-3 py-1 font-medium text-[clamp(13px,1.3vw,15px)] text-[#345b7d]"
                                                    >
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
