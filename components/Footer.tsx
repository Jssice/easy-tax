import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} EasyTax. All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
