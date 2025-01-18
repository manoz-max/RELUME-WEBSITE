import Link from "next/link";
export default function AuthButtons() {
  return (
    <>
      <Link
        href="/app/login"
        className="font-medium text-black hover:bg-gray-200 px-4 py-2 rounded-md"
      >
        Log in
      </Link>
      <Link href="/app/signup">
        <button className="bg-black text-white px-4 py-2 rounded-md font-medium">
          Start for free
        </button>
      </Link>
    </>
  );
}