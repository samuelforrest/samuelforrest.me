import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link href="/" className="underline text-blue-500">
          Go back home
      </Link>
      <br></br>
      <p className="text-sm mb-6">If you were attempting to visit a blog article, they are now available on&nbsp;
        <Link href="https://samueljforrest.substack.com" className="underline text-blue-500">
          Substack
        </Link>
      </p>
    </div>
  );
}