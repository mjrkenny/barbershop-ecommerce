import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useStore } from '../lib/store';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Premium Hair Gel',
        category: 'hair',
        price: 45000,
        description: 'Professional-grade styling gel with strong hold',
        image: '💇',
      },
      {
        id: 2,
        name: 'Luxury Cologne',
        category: 'perfume',
        price: 120000,
        description: 'Sophisticated fragrance for the modern gentleman',
        image: '🧴',
      },
      {
        id: 3,
        name: 'Premium Deodorant',
        category: 'deodorant',
        price: 35000,
        description: '24-hour protection with premium scent',
        image: '✨',
      },
      {
        id: 4,
        name: 'Hair Serum',
        category: 'hair',
        price: 55000,
        description: 'Enriched with natural oils for shine and strength',
        image: '💆',
      },
      {
        id: 5,
        name: 'Eau de Parfum',
        category: 'perfume',
        price: 150000,
        description: 'Exclusive fragrance blend',
        image: '🌹',
      },
      {
        id: 6,
        name: 'Body Spray',
        category: 'deodorant',
        price: 28000,
        description: 'Fresh and long-lasting body spray',
        image: '💨',
      },
    ];
    setProducts(mockProducts);
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter((p) => p.category === filter);

  return (
    <>
      <Head>
        <title>4FIVE Barbershop - Premium Grooming & Luxury Products</title>
        <meta name="description" content="Discover premium grooming and luxury products at 4FIVE Barbershop in Dar es Salaam, Tanzania." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-luxury-lightgrey font-montserrat">
        <Header />

        <section className="gradient-header py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to 4FIVE BARBERSHOP</h1>
          <p className="text-xl opacity-90">Premium Grooming & Luxury Products</p>
          <p className="mt-4 text-lg opacity-80">Discover Excellence. Embrace Luxury.</p>
        </section>

        <main className="container mx-auto px-4 py-12 flex-grow">
          <div className="mb-8 flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'all'
                  ? 'luxury-button'
                  : 'bg-white text-luxury-blue border-2 border-luxury-blue'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('hair')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'hair'
                  ? 'luxury-button'
                  : 'bg-white text-luxury-blue border-2 border-luxury-blue'
              }`}
            >
              Hair Products
            </button>
            <button
              onClick={() => setFilter('perfume')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'perfume'
                  ? 'luxury-button'
                  : 'bg-white text-luxury-blue border-2 border-luxury-blue'
              }`}
            >
              Perfumes
            </button>
            <button
              onClick={() => setFilter('deodorant')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === 'deodorant'
                  ? 'luxury-button'
                  : 'bg-white text-luxury-blue border-2 border-luxury-blue'
              }`}
            >
              Deodorants
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="luxury-card p-6">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-grey mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-luxury-blue">
                    TZS {product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="luxury-button px-4 py-2 rounded-lg text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="gradient-header rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Look?</h2>
            <p className="text-lg opacity-90 mb-6">
              Explore our collection of premium grooming products curated for you.
            </p>
            <Link href="/cart">
              <button className="bg-white text-luxury-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90">
                View Cart & Checkout
              </button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}