import Link from "next/link";
export default function AuthButtons() {
  return (
    <div className="flex gap-4">
      <Link
        href="/app/login"
        className="flex-grow text-center font-medium flex items-center justify-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
      >
        Sign in
      </Link>
      <Link
        href="/app/signup"
        className="flex-grow text-center font-medium flex items-center justify-center px-4 py-2 rounded-md border bg-black text-white"
      >
        Start for free
      </Link>
    </div>
  );
}
