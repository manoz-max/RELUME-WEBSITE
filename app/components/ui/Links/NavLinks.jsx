import Link from "next/link";
export default function NavLinks() {
  const links = [
    { source: "pricing", name: "Pricing" },
    { source: "resources", name: "Learn" },
    { source: "contact", name: "Contact Sales" },
  ];
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={`/${link.source}`}
          className="text-black font-medium hover:bg-gray-400 px-4 py-2 rounded-md block"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
