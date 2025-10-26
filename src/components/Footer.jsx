export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold">About</h3>
            <p className="mt-3 text-sm text-gray-600">
              VibeMart brings together the best in electronics, fashion and home living with fast delivery worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-3 text-sm text-gray-600">Get updates on new drops and special offers.</p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="rounded-r-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VibeMart. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
