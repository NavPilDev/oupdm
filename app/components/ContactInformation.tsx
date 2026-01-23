interface ContactInfo {
    name: string;
    email: string;
    phone: string;
}

interface ContactInformationProps {
    index: number;
    name: string;
    email: string;
}

export default function ContactInformation({ index, name, email }: ContactInformationProps) {
    return (
        <div className="flex flex-col gap-2" data-node-id="14:50">
            <h4 className={`font-semibold text-[clamp(18px,1.8vw,18px)] text-[#3863a3] leading-tight `}>
                {name}
            </h4>
            <a href={`mailto:${email}`} className="font-medium text-[clamp(18px,1.8vw,18px)] underline text-black leading-normal">
                {email}
            </a>
            {/* <a href={`tel:${phone}`} className="font-medium text-[clamp(16px,1.5vw,20px)] underline text-black leading-normal">
                {phone}
            </a> */}
        </div>
    );
}

