import React from "react";

interface YearExperienceProps {
  year: number;
}

export default function YearExperience({ year }: YearExperienceProps) {
  return (
    <svg
      width="220"
      height="300"
      viewBox="0 0 220 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="0" dy="4" />
          <feGaussianBlur stdDeviation="6" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood floodColor="#0e0f11" floodOpacity="1" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>

      <text
        x="50%"
        y="70%"
        textAnchor="middle"
        fontSize="220"
        fontWeight="800"
        fontFamily="'Segoe UI', sans-serif"
        fill="#13CD51"
        filter="url(#inner-shadow)"
        letterSpacing="-10"
      >
        {year}
      </text>
    </svg>
  );
}
