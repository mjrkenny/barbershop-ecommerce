export default function Footer() {
  return (
    <footer className="bg-luxury-black text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">4FIVE BARBERSHOP</h3>
            <p className="text-grey opacity-80">
              Premium grooming and luxury products for the modern man and woman.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/" className="hover:text-luxury-blue">Shop</a></li>
              <li><a href="/about" className="hover:text-luxury-blue">About Us</a></li>
              <li><a href="/contact" className="hover:text-luxury-blue">Contact</a></li>
              <li><a href="/admin" className="hover:text-luxury-blue">Admin</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm opacity-80">
              📍 Dar es Salaam, Tanzania<br />
              📱 +255 689 921 921<br />
              💬 WhatsApp Orders
            </p>
          </div>
        </div>
        <div className="border-t border-grey pt-8">
          <p className="text-center text-sm opacity-70">
            © 2024 4FIVE BARBERSHOP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}