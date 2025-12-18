import React, { useState } from 'react';

// Single-file React + Tailwind component
// Default export is the App component. Drop into a Create React App or Vite project
// Tailwind must be configured in your project for styling to work.

const PRODUCTS = [
  {
    id: 1,
    title: 'Faa_su_F',
    price: 2499,
    img: '/Faa_su_F.jpeg',
    desc: 'Short-sleeve Tai-Ahom inspired top with traditional knot-button design, handcrafted details, and comfortable fit.'
  },
  {
    id: 2,
    title: 'Faa_su_M',
    price: 2499,
    img: '/Faa_su_M.jpeg',
    desc: 'Classic Tai-Ahom inspired shirt featuring full-length knot buttons, clean lines, and cultural detailing.'
  },
  {
    id: 3,
    title: 'Thong',
    price: 500,
    img: '/Thong.jpeg',
    desc: 'The Tai Thong is a traditional handwoven bag symbolizing Tai-Ahom identity and craftsmanship.'
  },
  {
    id: 4,
    title: 'Tribal Japi Hat (Accessory)',
    price: 499,
    img: 'https://images.unsplash.com/photo-1533105073767-8f6b0e5d4c48?auto=format&fit=crop&w=1200&q=60',
    desc: 'Decorative Japi-inspired headpiece. Great for photoshoots and festivals.'
  }
];


function Header({ onOpenCart, cartCount }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-semibold text-white">AH</div>
          <div>
            <h1 className="text-lg font-bold tracking-wide">AHOM THREADS</h1>
            <p className="text-xs text-gray-500">Weaving Tai-Ahom Heritage</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-yellow-600">Home</a>
          <a href="#shop" className="hover:text-yellow-600">Shop</a>
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#initiatives" className="hover:text-yellow-600">Initiatives</a>
          <a href="#stories" className="hover:text-yellow-600">Stories</a>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onOpenCart} className="relative inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="text-xs">Cart</span>
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[10px] px-1">{cartCount}</span>}
          </button>

          <a href="#contact" className="text-sm px-3 py-2 border rounded-md hover:bg-yellow-50">Contact</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-[url('https://images.unsplash.com/photo-1520975916650-1c3d3a9c57e4?auto=format&fit=crop&w=1800&q=60')] bg-cover bg-center">
      <div className="backdrop-brightness-75">
        <div className="max-w-6xl mx-auto px-6 py-28 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">AHOM THREADS — Tai-Ahom Inspired Clothing</h2>
            <p className="mt-4 text-lg text-yellow-100">A cultural fashion house reviving Tai-Ahom heritage through traditional wear, modern clothing, and handcrafted accessories.</p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="px-5 py-3 bg-yellow-500 rounded-md font-semibold shadow hover:brightness-95">Shop the Collection</a>
              <a href="#about" className="px-5 py-3 border rounded-md">Our Story</a>
            </div>
          </div>

          <div className="md:w-1/2 bg-white/60 p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-3">
              <img src="/Faa_su_F.jpeg" alt="product" className="w-full h-40 object-cover rounded" />
              <img src="/Faa_su_M.jpeg" alt="product" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1520975923399-5f95b7f7f9b9?auto=format&fit=crop&w=800&q=60" alt="product" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1533105073767-8f6b0e5d4c48?auto=format&fit=crop&w=800&q=60" alt="product" className="w-full h-40 object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">₹{product.price}</div>
            <div className="text-xs text-gray-400">Inclusive of taxes</div>
          </div>
          <button onClick={() => onAdd(product)} className="px-3 py-2 bg-yellow-500 rounded-md text-white font-medium">Add</button>
        </div>
      </div>
    </div>
  );
}

function Shop({ onAdd }) {
  return (
    <section id="shop" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Shop the Collection</h2>
        <p className="text-sm text-gray-500">Limited edition drops — crafted with care</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

function About({ onOpenModal }) {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Our Story & Mission</h3>
            <p className="mt-4 text-gray-700"><strong>Ahom Threads</strong> is a cultural fashion brand dedicated to the revivaland promotion of Tai-Ahom heritage through clothing and handcrafted accessories.Our aim is to bring traditional identity into everyday wear without losing its soul.</p>

            <h4 className="mt-6 text-lg font-semibold">Our Mission</h4>
            <p className="text-gray-700 mt-2">Our mission is to <strong>preserve, promote, and modernize Tai-Ahom culture</strong> by blending traditional craftsmanship with contemporary design.We work closely with local artisans, encourage sustainable practices,and create garments that carry stories across generations.</p>
            <h4 className="mt-6 text-lg font-semibold">Modern Approach to Cultural Revival</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li><strong>Design Collaboration:</strong> Partnering with young designers to reinterpret Ahom motifs in contemporary clothing and accessories.</li>
              <li><strong>Skill Development:</strong> Workshops and apprenticeships for local weavers and craftsmen to modernize production while preserving traditional techniques.</li>
              <li><strong>Digital Preservation:</strong> Creating a digital archive of motifs, oral histories, and textile patterns accessible through our blog and community pages.</li>
              <li><strong>Community Events:</strong> Organising cultural events, pop-ups, and exhibitions to showcase living traditions and encourage public participation.</li>
              <li><strong>Education & Outreach:</strong> Short courses and talks about the history, language elements, and symbolism behind Tai-Ahom clothing.</li>
              <li><strong>Sustainable Sourcing:</strong> Using locally sourced fibres (like Muga and Pat) and fair-trade practices to support the region's economy.</li>
            </ul>

            <div className="mt-6">
              <a href="#initiatives" className="px-4 py-2 bg-yellow-600 text-white rounded">Learn about our initiatives</a>
              <button onClick={onOpenModal} className="ml-3 px-4 py-2 border rounded">Get involved</button>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1520975916650-1c3d3a9c57e4?auto=format&fit=crop&w=1000&q=60" alt="about" className="rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Initiatives() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: no backend — just simulate a successful signup
    if (!name || !email) {
      setStatus({ ok: false, text: 'Please enter name and email.' });
      return;
    }
    setStatus({ ok: true, text: 'Thanks! You are signed up for updates.' });
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="initiatives" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Initiatives & Programs</h3>
        <p className="mt-2 text-gray-600">Our active projects aimed at cultural revival and community engagement.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Artisan Workshops</h4>
            <p className="text-sm text-gray-600 mt-2">Hands-on workshops teaching traditional weaving and modern design techniques.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Digital Archive</h4>
            <p className="text-sm text-gray-600 mt-2">A growing online collection of motifs, stories, and recorded interviews with elders.</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">Community Events</h4>
            <p className="text-sm text-gray-600 mt-2">Pop-ups, exhibitions, and cultural showcases across Assam.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold">Volunteer / Partner</h4>
            <p className="text-sm text-gray-600 mt-2">Join as a volunteer or partner to help run events and workshops.</p>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
              <li>Event coordination</li>
              <li>Workshop facilitation</li>
              <li>Research & documentation</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold">Sign up for updates</h4>
            <form className="mt-3" onSubmit={handleSubmit}>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="p-3 border rounded w-full mb-2" />
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="p-3 border rounded w-full mb-2" />
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us how you'd like to help (optional)" className="p-3 border rounded w-full mb-2 h-24" />
              <button type="submit" className="px-4 py-2 bg-yellow-600 text-white rounded">Sign up</button>
              {status && (
                <div className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.text}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">Culture Stories</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-semibold">The Japi & Its Meaning</h4>
          <p className="text-sm text-gray-600 mt-2">Japi is a traditional conical hat used historically in Assam. We reinterpret the silhouette as a decorative accessory.</p>
        </article>
        <article className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-semibold">Muga & Pat Textiles</h4>
          <p className="text-sm text-gray-600 mt-2">Muga silk — a golden silk native to Assam — is durable and luxurious. Our pieces honor that legacy.</p>
        </article>
        <article className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-semibold">Ahom Motifs: Reimagined</h4>
          <p className="text-sm text-gray-600 mt-2">Motifs inspired by the Ahom dynasty are used as subtle embroidery rather than full replicas, preserving respect for cultural symbols.</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-yellow-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-xl font-bold">Get in Touch</h3>
        <p className="text-sm text-gray-700 mt-2">Questions about a piece or wholesale inquiries? Send us a message.</p>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input placeholder="Your name" className="p-3 border rounded" />
          <input placeholder="Your email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded md:col-span-2 h-32"></textarea>
          <button type="button" className="px-4 py-2 bg-yellow-600 text-white rounded md:col-span-2">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 z-10 max-w-md w-full shadow-lg">
        <h4 className="font-bold text-lg">Get involved</h4>
        <p className="text-sm text-gray-600 mt-2">Tell us how you'd like to contribute to the revival of Tai-Ahom culture.</p>
        <form className="mt-4 grid gap-2">
          <input placeholder="Your name" className="p-3 border rounded" />
          <input placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="A short note about how you'd like to help" className="p-3 border rounded h-28" />
          <div className="flex items-center justify-end gap-2 mt-2">
            <button type="button" onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
            <button type="button" onClick={onClose} className="px-3 py-2 bg-yellow-600 text-white rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function handleAdd(product) {
    setCart(prev => [...prev, product]);
  }

  function handleRemove(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onOpenCart={() => setCartOpen(true)} cartCount={cart.length} />
      <main>
        <Hero />
        <Shop onAdd={handleAdd} />
        <About onOpenModal={() => setModalOpen(true)} />
        <Initiatives />
        <Stories />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white mt-10">
  <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
    
    <div>
      <h4 className="font-bold tracking-wide">AHOM THREADS</h4>
      <p className="text-sm text-gray-300 mt-2">
        Weaving Tai-Ahom heritage through clothing, tradition, and craft.
      </p>
    </div>

    <div className="mt-4 md:mt-0 text-sm text-gray-400">
      <div>© {new Date().getFullYear()} AHOM THREADS</div>
      <div className="mt-2">
        Rooted in Ahom culture • Crafted for today.
      </div>
      <div>Based in Assam.</div>
    </div>

       </div>
       </footer>


      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/30" onClick={() => setCartOpen(false)} />
          <div className="w-96 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Your Cart</h4>
              <button onClick={() => setCartOpen(false)} className="text-gray-500">Close</button>
            </div>
            <div className="mt-4 space-y-4">
              {cart.length === 0 && <div className="text-gray-500">Your cart is empty.</div>}
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">₹{item.price}</div>
                  </div>
                  <button onClick={() => handleRemove(idx)} className="text-sm text-red-500">Remove</button>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between font-semibold">
                  <div>Total</div>
                  <div>₹{cart.reduce((s, it) => s + it.price, 0)}</div>
                </div>
                <button className="mt-4 w-full px-4 py-3 bg-yellow-600 text-white rounded">Checkout</button>
              </div>
            )}
          </div>
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

