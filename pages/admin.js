import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useStore } from '../lib/store';

export default function Admin() {
  const orders = useStore((state) => state.orders);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword] = useState('4five2024');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
      setPassword('');
    }
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Panel - 4FIVE Barbershop</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-luxury-black">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md mx-4">
            <h1 className="text-3xl font-bold mb-6 text-center">🔐 Admin Panel</h1>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-2 border border-grey rounded-lg mb-4 focus:outline-none focus:border-luxury-blue"
            />
            <button
              onClick={handleLogin}
              className="w-full luxury-button px-6 py-3 rounded-lg font-bold"
            >
              Login
            </button>
          </div>
        </div>
      </>
    );
  }

  const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === 'pending').length;
  const completedOrders = orders.filter((o) => o.status === 'completed').length;

  return (
    <>
      <Head>
        <title>Admin Dashboard - 4FIVE Barbershop</title>
      </Head>
      <div className="min-h-screen bg-luxury-lightgrey">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h1 className="text-4xl font-bold">📊 Admin Dashboard</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="luxury-card p-6">
              <h3 className="text-grey text-sm font-semibold mb-2">TOTAL REVENUE</h3>
              <p className="text-3xl font-bold text-luxury-blue">
                TZS {totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="text-grey text-sm font-semibold mb-2">TOTAL ORDERS</h3>
              <p className="text-3xl font-bold text-luxury-black">{totalOrders}</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="text-grey text-sm font-semibold mb-2">PENDING</h3>
              <p className="text-3xl font-bold text-orange-500">{pendingOrders}</p>
            </div>
            <div className="luxury-card p-6">
              <h3 className="text-grey text-sm font-semibold mb-2">COMPLETED</h3>
              <p className="text-3xl font-bold text-green-600">{completedOrders}</p>
            </div>
          </div>

          <div className="luxury-card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            {orders.length === 0 ? (
              <p className="text-grey text-center py-8">No orders yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-luxury-lightgrey border-b border-grey">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Order ID</th>
                      <th className="px-4 py-2 text-left font-semibold">Customer</th>
                      <th className="px-4 py-2 text-left font-semibold">Phone</th>
                      <th className="px-4 py-2 text-left font-semibold">Amount</th>
                      <th className="px-4 py-2 text-left font-semibold">Items</th>
                      <th className="px-4 py-2 text-left font-semibold">Status</th>
                      <th className="px-4 py-2 text-left font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-grey hover:bg-luxury-lightgrey">
                        <td className="px-4 py-3 font-semibold">#{order.id}</td>
                        <td className="px-4 py-3">{order.customerName}</td>
                        <td className="px-4 py-3">{order.customerPhone}</td>
                        <td className="px-4 py-3 font-bold text-luxury-blue">
                          TZS {order.totalPrice.toLocaleString()}
                        </td>
                        <td className="px-4 py-3">{order.products.length}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'pending'
                              ? 'bg-orange-100 text-orange-600'
                              : 'bg-green-100 text-green-600'
                          }`}>
                            {order.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-grey">
                          {new Date(order.timestamp).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {orders.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Order Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {orders.map((order) => (
                  <div key={order.id} className="luxury-card p-6">
                    <h3 className="text-lg font-bold mb-4">Order #{order.id}</h3>
                    <p className="mb-2"><strong>Customer:</strong> {order.customerName}</p>
                    <p className="mb-4"><strong>Phone:</strong> {order.customerPhone}</p>
                    <div className="mb-4">
                      <strong>Products:</strong>
                      <ul className="mt-2 space-y-1">
                        {order.products.map((product, idx) => (
                          <li key={idx} className="text-sm text-grey">
                            {product.quantity}x {product.name} - TZS {(product.price * product.quantity).toLocaleString()}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-grey">
                      <p className="font-bold text-luxury-blue">
                        Total: TZS {order.totalPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}