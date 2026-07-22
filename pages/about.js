import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - 4FIVE Barbershop</title>
        <meta name="description" content="Learn about 4FIVE Barbershop, your premium grooming destination in Dar es Salaam, Tanzania." />
      </Head>

      <div className="min-h-screen flex flex-col bg-luxury-lightgrey">
        <Header />

        <main className="container mx-auto px-4 py-12 flex-grow">
          <h1 className="text-4xl font-bold mb-8">About 4FIVE BARBERSHOP</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-grey leading-relaxed">
                4FIVE Barbershop was born from a passion for excellence in grooming and style. Located in the heart of Dar es Salaam, we've dedicated ourselves to providing premium products and services to discerning men and women who value quality and luxury.
              </p>
            </div>

            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-grey leading-relaxed">
                We believe that grooming is not just about appearance—it's about confidence, respect, and self-care. Our mission is to bring luxury products to our customers, whether in-store or online, making premium grooming accessible to everyone.
              </p>
            </div>
          </div>

          <div className="luxury-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl mb-4">✨</p>
                <h3 className="font-bold mb-2">Premium Quality</h3>
                <p className="text-grey text-sm">Only the finest products curated for your needs</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-4">🚀</p>
                <h3 className="font-bold mb-2">Fast Service</h3>
                <p className="text-grey text-sm">Quick and efficient ordering through WhatsApp</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-4">💙</p>
                <h3 className="font-bold mb-2">Customer First</h3>
                <p className="text-grey text-sm">Your satisfaction is our priority</p>
              </div>
            </div>
          </div>

          <div className="gradient-header rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg opacity-90">
              Experience the 4FIVE difference. Shop with us today!
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}