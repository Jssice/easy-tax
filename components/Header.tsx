import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Easy Tax</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/calculator" className="text-white hover:text-gray-300">
            Tax Calculator
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
