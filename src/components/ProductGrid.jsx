import { useMemo, useState } from "react";
import { Heart, Star } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1518449007433-7db00d19a4c0?q=80&w=1600&auto=format&fit=crop",
    tag: "Electronics",
  },
  {
    id: 2,
    name: "Minimal Leather Backpack",
    price: 129.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop",
    tag: "Fashion",
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    price: 89.0,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1600&auto=format&fit=crop",
    tag: "Home",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 259.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    tag: "Home",
  },
  {
    id: 5,
    name: "City Runner Sneakers",
    price: 99.0,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    tag: "Fashion",
  },
  {
    id: 6,
    name: "4K Ultra HD Monitor",
    price: 349.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    tag: "Electronics",
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 shadow">
          {product.tag}
        </span>
        <button
          className="absolute right-3 top-3 p-2 rounded-full bg-white/90 shadow hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => ["All", "Electronics", "Fashion", "Home"], []);

  const filtered = useMemo(() => {
    if (filter === "All") return sampleProducts;
    return sampleProducts.filter((p) => p.tag === filter);
  }, [filter]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Trending now</h2>
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                filter === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
