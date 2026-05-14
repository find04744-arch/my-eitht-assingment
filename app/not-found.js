import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-200">
      <h1 className="text-9xl font-black text-primary opacity-20">404</h1>
      <div className="absolute">
        <h2 className="text-4xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          The tile you are looking for doesn't exist or has been moved to another collection.
        </p>
        <Link href="/" className="btn btn-primary rounded-2xl px-10 shadow-lg border-none">
          Back to Home
        </Link>
      </div>
    </div>
  );
}