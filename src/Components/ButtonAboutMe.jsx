export default function ButtonAboutMe({ icon, url }) {
  return (
    <>
      <button
        className="z-50 px-4 py-4 rounded-md border-[#38393C] border-2 bg-[#111111] hover:border-[#13CD51] "
        onClick={() => window.open(url)}
      >
        {icon}
      </button>
    </>
  );
}
