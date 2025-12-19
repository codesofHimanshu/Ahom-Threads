import { useParams } from "react-router-dom";
console.log(
  "Razorpay ENV KEY 👉",
  process.env.REACT_APP_RAZORPAY_KEY_ID
);
function handleBuyNow(product) {
  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // 👈 your Razorpay Key ID
    amount: product.price * 100, // Razorpay uses paise
    currency: "INR",
    name: "Ahom Threads",
    description: product.title,
    image: "/ahom-threads-logo.png",
    handler: function (response) {
      alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    theme: {
      color: "#111827",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}

function handleCOD(product) {
  const confirmOrder = window.confirm(
    `Confirm COD Order?\n\nProduct: ${product.title}\nPrice: ₹${product.price}`
  );

  if (confirmOrder) {
    alert(
      "✅ Order placed successfully!\n\nPayment Mode: Cash on Delivery\nOur team will contact you soon."
    );

    // 👉 Later you can:
    // - Save order to backend
    // - Send WhatsApp message
    // - Send email
  }
}



export default function ProductDetail({ products, onAdd }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: IMAGE */}
        <div>
          <img
            src={product.img}
            alt={product.title}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
            ● In stock
          </div>

          <div className="mt-4 text-2xl font-semibold">
            ₹{product.price}
          </div>

          <p className="text-sm text-gray-500">
            Taxes included. Shipping calculated at checkout.
          </p>

          {/* SIZE */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL", "2XL"].map(size => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded-md hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => onAdd(product)}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>

            <div className="flex gap-4 mt-6">
            {/* ONLINE PAYMENT */}
          <button
            onClick={() => handleBuyNow(product)}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
          Pay Online
          </button>

            {/* COD */}
          <button
            onClick={() => handleCOD(product)}
            className="border border-black px-6 py-3 rounded hover:bg-gray-100"
          >
          Cash on Delivery
          </button>
          </div>


          </div>

          {/* ICON FEATURES */}
          <div className="mt-8 grid grid-cols-3 text-center gap-4 text-sm">
            <div>
              <div className="font-semibold">100% Cotton</div>
            </div>
            <div>
              <div className="font-semibold">COD Available</div>
            </div>
            <div>
              <div className="font-semibold">Fast Delivery</div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

