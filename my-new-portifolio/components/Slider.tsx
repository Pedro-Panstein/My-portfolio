import Image, { StaticImageData } from "next/image";

interface SliderProps {
  tecnologies: {
    image: StaticImageData;
    name: string;
  }[];
}

export default function Slider({ tecnologies }: SliderProps) {
  const handleMouseEnter = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.closest(".marquee")?.classList.add("pause");
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLImageElement>) => {
    event.currentTarget.closest(".marquee")?.classList.remove("pause");
  };

  return (
    <div className="marquee select-none mt-16">
      <div className="marquee-content scroll reverse">
        {tecnologies.map((tech, index) => (
          <Image
            key={index}
            src={tech.image}
            width={200}
            height={100}
            className="drop-shadow-lg shadow-emerald-400 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            alt={tech.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="marquee-content scroll reverse">
        {tecnologies.map((tech, index) => (
          <Image
            key={index}
            src={tech.image}
            width={200}
            height={100}
            className="drop-shadow-2xl shadow-emerald-400 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            alt={tech.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}
