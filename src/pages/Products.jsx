import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch"; // ✅ import hook
import "../css/products.css";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  // URL params
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  // ✅ use custom hook
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://dummyjson.com/products");

  // Handlers
  const handleSearch = (e) => {
    setSearchParams({
      search: e.target.value,
      category: category,
    });
  };

  const handleCategory = (e) => {
    setSearchParams({
      search: search,
      category: e.target.value,
    });
  };

  // Filter
  const filteredProducts = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
    );
  });

  // Categories
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="container">
      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearch}
        />

        <select value={category} onChange={handleCategory}>
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* States */}
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {/* Products */}
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>₹{p.price}</p>

            {/* Add to Cart */}
            <button onClick={() => addToCart(p)}>
              Add to Cart 🛒
            </button>

            {/* Details */}
            <Link to={`/products/${p.id}`}>
              <button className="details-btn">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}