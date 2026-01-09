import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white text-gray-800 p-8 gap-8">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-md mb-6 max-w-md">
          If you were attempting to visit a Blog article, they are now available
          on&nbsp;
          <a
            href="https://samueljforrest.substack.com"
            className="underline underline-offset-4 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>
        </p>
        <Link href="/" className="underline underline-offset-4">
          Go back home
        </Link>
      </div>
    </div>
  );
}
