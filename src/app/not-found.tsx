import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col lg:items-start text-center md:text-left">
        <h1 className="text-6xl font-bold mb-10">404</h1>

        <Link href="/" className="underline underline-offset-3">
          Go back home
        </Link>
      </div>
    </div>
  );
}
