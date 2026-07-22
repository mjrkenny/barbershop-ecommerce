import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useStore } from '../lib/store';
import { sendToWhatsApp } from '../lib/whatsapp';
import Link from 'next/link';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const clearCart = useStore((state) => state.clearCart);
  const addOrder = useStore((state) => state.addOrder);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your name and phone number');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      const order = {
        id: Date.now(),
        customerName,
        customerPhone,
        products: cart,
        totalPrice,
        timestamp: new Date().toISOString(),
        status: 'pending',
      };

      addOrder(order);
      sendToWhatsApp(cart, customerName, customerPhone, totalPrice);
      clearCart();
      setCustomerName('');
      setCustomerPhone('');

      setTimeout(() => {
        alert('✅ Order sent to WhatsApp! Our team will contact you soon.');
      }, 1000);
    } catch (error) {
      alert('Error processing order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Shopping Cart - 4FIVE Barbershop</title>
        <meta name="description" content="Review your cart and checkout via WhatsApp at 4FIVE Barbershop." />
      </Head>

      <div className="min-h-screen flex flex-col bg-luxury-lightgrey">
        <Header />

        <main className="container mx-auto px-4 py-12 flex-grow">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl mb-6 text-grey">Your cart is empty</p>
              <Link href="/">
                <button className="luxury-button px-8 py-3 rounded-lg font-bold">
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="luxury-card p-6 flex justify-between items-center">
                      <div className="flex-grow">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{item.image}</span>
                          <div>
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <p className="text-luxury-blue font-semibold">
                              TZS {item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-grey rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="px-3 py-1 text-grey hover:bg-luxury-lightgrey"
                          >
                            −
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-grey hover:bg-luxury-lightgrey"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 font-bold hover:opacity-70"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="luxury-card p-8 h-fit sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="mb-6 pb-6 border-b border-grey">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span className="font-semibold">TZS {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Delivery:</span>
                    <span className="font-semibold">TBD</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-luxury-blue mt-4">
                    <span>Total:</span>
                    <span>TZS {totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2 border border-grey rounded-lg focus:outline-none focus:border-luxury-blue"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (+255...)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-grey rounded-lg focus:outline-none focus:border-luxury-blue"
                  />
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full luxury-button px-6 py-3 rounded-lg font-bold text-lg mb-4"
                >
                  {loading ? 'Processing...' : '📱 Checkout via WhatsApp'}
                </button>

                <button
                  onClick={() => clearCart()}
                  className="w-full bg-red-100 text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-200"
                >
                  Clear Cart
                </button>

                <Link href="/">
                  <button className="w-full mt-4 bg-luxury-grey text-white px-6 py-2 rounded-lg font-semibold hover:opacity-80">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}