import Link from "next/link";
export default function CommunityLinks() {
  const communityNames = [
    "Community Love",
    "Showcase",
    "Inspiration Feed",
    "Voting Board",
    "Slack",
    "Hire an Expert",
  ];
  return (
    <>
      {communityNames.map((community, index) => {
        return (
          <Link
            key={index}
            href="/"
            className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            {community}
          </Link>
        );
      })}
    </>
  );
}
