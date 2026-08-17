import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams(); // ✅ get ID from URL

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();

        setProduct(data); // ✅ set product
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ✅ Loading state
  if (loading) return <h2>Loading...</h2>;

  // ✅ Safety check
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details">
      <h1>{product.title}</h1>

      <img src={product.thumbnail} alt={product.title} width="200" />

      <p>
        <strong>Brand:</strong> {product.brand}
      </p>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Description:</strong> {product.description}
      </p>

      <Link to="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}