import Link from "next/link";
export default function News() {
  return (
    <div className="w-full md:w-1/2 bg-gray-200 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-black">What's New</span>
        <Link href="/whats-new">
          <span className="text-sm text-gray-500 hover:text-black">
            View All
          </span>
        </Link>
      </div>
      <div className="flex flex-col mb-6">
        <img
          src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
          alt="News Item 1"
          className="rounded-md mb-2"
        />
        <p className="text-xs text-gray-500 mb-1">December 2, 2024</p>
        <p className="text-sm font-medium text-black line-clamp-2">
          Relume React Library Leaves Beta—Unlock Full Power with v1.0.0
        </p>
      </div>
      <div className="flex flex-col">
        <img
          src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
          alt="News Item 2"
          className="rounded-md mb-2"
        />
        <p className="text-xs text-gray-500 mb-1">November 5, 2024</p>
        <p className="text-sm font-medium text-black line-clamp-2">
          Style Guide Builder Beta, Portfolio Sections, GPT Prompt Builder &
          More
        </p>
      </div>
    </div>
  );
}
