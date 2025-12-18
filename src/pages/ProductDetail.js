import { useParams } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'faa_su_f',
    name: 'Faa_su_F',
    price: 2499,
    image: '/Faa_su_F.jpeg',
    description:
      'Faa_su_F is a modern reinterpretation of traditional Tai-Ahom attire, handcrafted with cultural knot detailing and heritage-inspired design.'
  },
  {
    id: 'faa_su_m',
    name: 'Faa_su_M',
    price: 2899,
    image: '/Faa_su_M.jpeg',
    description:
      'Faa_su_M blends Ahom royal aesthetics with contemporary tailoring, symbolising strength, identity, and tradition.'
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="rounded-lg" />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2 font-semibold">₹{product.price}</p>

          <div className="mt-4">
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6">
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', '2XL'].map(size => (
                <button key={size} className="px-4 py-2 border rounded">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 w-full bg-yellow-600 text-white py-3 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
