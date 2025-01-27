export default function Card({ image, title, description, url }) {
  return (
    <div
      className={`p-4 bg-[#292C34] rounded-lg w-[350px] h-[300px] border-transparent border-2 ${
        url
          ? "hover:border-[#13cd51] transition-colors cursor-pointer"
          : "opacity-50"
      }`}
      onClick={url ? () => window.open(url) : undefined}
    >
      <img
        src={image}
        className="w-full rounded-md select-none"
        draggable="false"
        alt={title}
      />
      <h3 className="text-[#E2E4E9] mt-2 text-lg font-asap">{title}</h3>
      <p className="text-[#C0C4CE] text-sm mt-2 font-maven-pro">
        {description}
      </p>
    </div>
  );
}
