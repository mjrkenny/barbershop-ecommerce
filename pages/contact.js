import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - 4FIVE Barbershop</title>
        <meta name="description" content="Get in touch with 4FIVE Barbershop. We're here to help!" />
      </Head>

      <div className="min-h-screen flex flex-col bg-luxury-lightgrey">
        <Header />

        <main className="container mx-auto px-4 py-12 flex-grow">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="luxury-card p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">📍 Location</h3>
                    <p className="text-grey">Dar es Salaam, Tanzania</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">📱 WhatsApp</h3>
                    <a
                      href="https://wa.me/255689921921"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-blue hover:underline font-semibold"
                    >
                      +255 689 921 921
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">⏰ Hours</h3>
                    <p className="text-grey">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {submitted && (
                <div className="bg-green-100 text-green-600 p-4 rounded-lg mb-4 font-semibold">
                  ✅ Message sent! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-grey rounded-lg focus:outline-none focus:border-luxury-blue"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-grey rounded-lg focus:outline-none focus:border-luxury-blue"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-grey rounded-lg focus:outline-none focus:border-luxury-blue resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full luxury-button px-6 py-3 rounded-lg font-bold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}