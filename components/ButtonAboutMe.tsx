interface ButtonAboutMeProps {
  icon: React.ReactNode;
  url: string;
}

export default function ButtonAboutMe({ icon, url }: ButtonAboutMeProps) {
  return (
    <>
      <button
        className="z-50 px-4 py-4 rounded-md border-[#38393C] border-2 bg-[#111111] hover:border-[#13CD51] transition-colors"
        onClick={() => window.open(url)}
      >
        {icon}
      </button>
    </>
  );
}
