import Link from 'next/link';
import { useStore } from '../lib/store';
import { useState } from 'react';

export default function Header() {
  const cart = useStore((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="gradient-header sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-2xl font-bold">4️⃣5️⃣</div>
            <div>
              <h1 className="text-xl font-bold">4FIVE</h1>
              <p className="text-xs opacity-90">BARBERSHOP</p>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:opacity-80 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:opacity-80 transition">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition">
            Contact
          </Link>
          <Link href="/cart">
            <button className="flex items-center gap-2 bg-white text-luxury-blue px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90">
              🛒 Cart
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white text-luxury-black rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden z-40">
            <Link href="/">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">🛒 Cart ({cartCount})</Link>
          </div>
        )}
      </nav>
    </header>
  );
}