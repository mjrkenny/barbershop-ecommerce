# 4FIVE BARBERSHOP - E-Commerce Platform

🎭 Premium grooming and luxury products e-commerce website for 4Five Barbershop in Dar es Salaam, Tanzania.

## ✨ Features

- **Luxury Product Display** - Hair products, perfumes, deodorants with beautiful UI
- **Shopping Cart** - Easy add/remove with quantity management
- **WhatsApp Integration** - One-click checkout via WhatsApp (+255689921921)
- **Admin Dashboard** - Track sales, profits, and all orders (password: 4five2024)
- **Responsive Design** - Mobile-first optimized for Tanzanian users
- **Live Deployment** - Deployed on Vercel with Google indexing
- **Modern UI** - Black, Blue, White, Grey theme with Montserrat font
- **Data Persistence** - Cart and orders saved in browser storage

## 🛠️ Tech Stack

- **Frontend:** Next.js + React
- **State Management:** Zustand with persistence
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (automatic deployment)
- **Storage:** LocalStorage (upgradeable to Firebase)

## 🚀 Getting Started Locally

### Installation

```bash
# Clone the repository
git clone https://github.com/mjrkenny/barbershop-ecommerce.git
cd barbershop-ecommerce

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Admin Dashboard

**Access:** `/admin`
**Password:** `4five2024`

Features:
- 📊 Total revenue tracking
- 📈 Order count and analytics
- ⏳ Pending vs completed orders
- 📋 Detailed order information
- 💰 Profit calculations

## 🔗 WhatsApp Integration

All checkout orders automatically send to: **+255689921921**

## 📂 Project Structure

```
barbershop-ecommerce/
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── cart.js
│   ├── admin.js
│   ├── about.js
│   └── contact.js
├── components/
│   ├── Header.js
│   └── Footer.js
├── lib/
│   ├── store.js
│   └── whatsapp.js
├── styles/
│   └── globals.css
└── README.md
```

## 🌐 Deployment to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. ✅ Your site is live!

---

**Made with 💙 for 4FIVE BARBERSHOP**