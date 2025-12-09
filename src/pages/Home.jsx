import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";

function Home() {
  const { searchTerm } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Welcome to Mini Bazar 🛒
        </h1>
        <p className="text-sm text-gray-600">
          Search products in real-time using the top search bar.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          {searchTerm ? "Search Results" : "Featured Products"}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-red-500 text-lg font-semibold mt-10">
            ❌ Product not available in the store
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
