import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              New season drop
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Discover products you’ll love
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Shop curated collections across tech, fashion and home. Free returns, fast delivery and 24/7 support.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
              >
                Shop now
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
              >
                Browse categories
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518112166137-85f9979a43a3?q=80&w=1600&auto=format&fit=crop"
                alt="Lifestyle banner"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop"
                alt="Sneaker"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold">Top pick this week</p>
                <p className="text-sm text-gray-500">Over 1,200 bought</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
