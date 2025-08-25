import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-600">TravelX</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <Link to="/packages" className="hover:text-yellow-600">Packages</Link>
          <Link to="/about" className="hover:text-yellow-600">About</Link>
          <Link to="/contact" className="hover:text-yellow-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
