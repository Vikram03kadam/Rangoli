import { useState } from 'react';
import './index.css';

export default function App() {
  const [email, setEmail] = useState('');
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-slate-900">
      <header className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Handmade Rangoli Mats</h1>
        <a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition" href="#shop">Shop Now</a>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid md:grid-cols-2 gap-10 items-center py-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Bring tradition home with modern elegance</h2>
            <p className="mt-4 text-lg text-slate-700">Premium, reusable rangoli mats handcrafted with love. Easy to place, easy to clean, perfect for every occasion.</p>
            <form className="mt-6 flex gap-3" onSubmit={(e)=>{e.preventDefault(); alert(`Thanks! We'll reach you at ${email}`)}}>
              <input className="flex-1 rounded-lg border border-slate-300 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <button className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">Notify Me</button>
            </form>
          </div>
          <img src="/assets/Peacock%20Design.jpeg" alt="Rangoli mat" className="w-full rounded-2xl shadow-xl ring-1 ring-black/5" />
        </section>

        <section id="shop" className="py-12">
          <h3 className="text-2xl font-bold mb-6">Featured Mats</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Big Swastik Flower.jpeg',
              'Grand Peacock Rangoli (Large).jpeg',
              'Large Red & Yellow 8-Petal Flower1.jpeg',
              'Peacock (Small).jpeg',
              'Welcome Door Mat.jpeg',
              'Small Star Flower.jpeg'
            ].map((name) => (
              <article key={name} className="group rounded-xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
                <img src={`/assets/${name}`} alt={name} className="h-48 w-full object-cover group-hover:scale-[1.02] transition" />
                <div className="p-4">
                  <h4 className="font-semibold truncate">{name.replace('.jpeg','')}</h4>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold text-orange-600">₹ 699</span>
                    <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50">Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-slate-600"> {new Date().getFullYear()} Handmade Rangoli Mats</footer>
      </main>
    </div>
  );
}
