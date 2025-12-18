import { useParams } from "react-router-dom";

export default function ProductDetail({ products, onAdd }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* IMAGE */}
        <img
          src={product.img}
          alt={product.title}
          className="w-full rounded-lg shadow"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-3 text-gray-600">{product.desc}</p>

          <div className="mt-4 text-2xl font-semibold">
            ₹{product.price}
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Taxes included. Shipping calculated at checkout.
          </p>

          {/* SIZE (LIKE CULTEES) */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "2XL"].map(size => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={() => onAdd(product)}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
