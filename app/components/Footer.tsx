import contactData from "../data/contactData.json";
import ContactInformation from "./ContactInformation";

export default function Footer() {
    return (
        <footer className="relative w-full bg-white flex items-center justify-center px-4 sm:px-8 md:px-[110px] pt-12 md:pt-16 lg:pt-20 pb-4" data-node-id="14:35">
            <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-[1920px] mx-auto">
                {/* Contact Us Heading */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="font-bold text-[clamp(24px,3.5vw,24px)] text-black leading-tight" data-node-id="14:36">
                        {contactData.title}
                    </h2>
                    {/* Underline Rectangle */}
                    <div className="w-[261px] h-[11px] bg-[#3863a3] mt-4" data-node-id="14:37"></div>
                </div>

                {/* Contact Information Grid */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12 w-full" data-node-id="14:48">
                    {contactData.contacts.map((contact, index) => (
                        <ContactInformation
                            key={index}
                            index={index}
                            name={contact.name}
                            email={contact.email}
                        />
                    ))}
                </div>

                {/* Copyright */}
                <p className="font-light text-[clamp(18px,1.8vw,18px)] text-[#969696] text-center mt-8" data-node-id="14:47">
                    {contactData.copyright}
                </p>
            </div>
        </footer>
    );
}

