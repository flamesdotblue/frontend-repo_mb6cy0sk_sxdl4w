import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="font-bold text-xl tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Vibe</span>
              Mart
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands and more"
                className="w-full rounded-full border border-gray-200 pl-12 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 min-w-[1.25rem] px-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium">2</span>
            </button>
          </div>
        </div>

        {/* Mobile search and menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-full rounded-lg border border-gray-200 pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <nav className="grid grid-cols-2 gap-2">
              {[
                "New Arrivals",
                "Best Sellers",
                "Electronics",
                "Fashion",
                "Home & Living",
                "Beauty",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
