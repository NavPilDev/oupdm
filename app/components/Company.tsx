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
  link: string;
  people: PersonData[];
  order: number;
}

export default function Company({
  name,
  description,
  link,
  people,
  order,
}: CompanyProps) {
  const hasMultiplePeople = people.length > 1;

  return (
    <div
      className={`flex flex-col gap-6 sm:gap-8 md:gap-10 w-full p-6 sm:p-8 md:p-12 lg:p-16 rounded-4xl ${
        order % 2 === 0 ? "bg-[#1B4161]" : ""
      }`}
    >
      <a
        className="font-bold text-[clamp(32px,3.5vw,32px)] text-[#ffa629] text-center leading-tight underline underline-offset-10 decoration-solid decoration-[#ffb703]"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <p className="font-medium text-[clamp(18px,1.8vw,18px)] text-white leading-normal text-center">
        {description}
      </p>
      <div
        className={
          hasMultiplePeople
            ? "flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 w-full"
            : "flex justify-center w-full"
        }
      >
        {people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            description={person.description}
            image={person.image}
            imagePosition={person.imagePosition}
            layout={hasMultiplePeople ? "vertical" : "horizontal"}
          />
        ))}
      </div>
    </div>
  );
}
