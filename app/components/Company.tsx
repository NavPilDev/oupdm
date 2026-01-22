import Person from "./Person";

interface PersonData {
    name: string;
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
}

interface CompanyProps {
    name: string;
    description: string;
    people: PersonData[];
    order: number;
}

export default function Company({ name, description, people, order }: CompanyProps) {
    return (
        <div className={`flex flex-col gap-6 sm:gap-8 md:gap-10 w-full p-20 rounded-4xl ${order % 2 === 0 ? "bg-[#1B4161]" : ""}`}>
            <h3 className="font-bold text-[clamp(32px,3.5vw,48px)] text-[#ffa629] text-left leading-tight">
                {name}
            </h3>
            <p className="font-medium text-[clamp(18px,1.8vw,24px)] text-white leading-normal text-center md:text-left">
                {description}
            </p>
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 w-full">
                {people.map((person, index) => (
                    <Person
                        key={index}
                        name={person.name}
                        title={person.title}
                        description={person.description}
                        image={person.image}
                        imagePosition={person.imagePosition}
                    />
                ))}
            </div>
        </div>
    );
}

