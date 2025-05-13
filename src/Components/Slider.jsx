export default function Slider({ tecnologies }) {
  return (
    <div className="marquee select-none mt-16">
      <div className="z-50 marquee-content scroll reverse">
        {tecnologies.map((tech, index) => (
          <img
            key={index}
            src={tech.image}
            width={200}
            height={100}
            alt={tech.name}
          />
        ))}
      </div>
      <div className="z-50 marquee-content scroll reverse">
        {tecnologies.map((tech, index) => (
          <img
            key={index}
            src={tech.image}
            width={200}
            height={100}
            alt={tech.name}
          />
        ))}
      </div>
    </div>
  );
}
