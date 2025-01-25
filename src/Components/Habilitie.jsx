import React from "react";

export default function Habilitie({ icon, title, url, className }) {
  return (
    <button
      className="z-50 flex h-14 items-center border-transparent border-2 hover:border-[#13cd518a] gap-2 px-5 text-[16px] text-white rounded-full bg-habilitieBg font-maven-pro"
      onClick={() => window.open(url)}
    >
      {/* Verifica se icon é uma string (imagem) e renderiza uma <img /> */}
      {typeof icon === "string" ? (
        <img src={icon} alt={title} className={`w-8 h-8 ${className}`} />
      ) : (
        React.cloneElement(icon, {
          className: `${icon.props.className || ""} ${className}`,
        }) // Concatenando classNames
      )}
      {title}
    </button>
  );
}