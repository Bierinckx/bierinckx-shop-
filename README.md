# 🛍️ Bierinckx Shop

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Een moderne webshop applicatie met e-commerce functionaliteiten gebouwd met Node.js en JavaScript.

## ✨ Features

- 🛒 Winkelwagen functionaliteit
- 👤 Gebruiker authenticatie
- 💳 Secure betalingsverwerking
- 📱 Responsive design
- 🚀 Snelle performance
- 🔍 Product zoekfunctie
- 📦 Inventory management
- 📊 Admin dashboard

## 🚀 Quick Start

### Prerequisites

- Node.js 18 of hoger
- npm of yarn
- MongoDB (voor database)

### Installatie

1. Clone de repository:
```bash
git clone https://github.com/Bierinckx/bierinckx-shop-.git
cd bierinckx-shop-
```

2. Installeer dependencies:
```bash
npm install
```

3. Configureer environment variabelen:
```bash
cp .env.example .env
# Bewerk .env met je database en API keys
```

4. Start de development server:
```bash
npm run dev
```

De applicatie is nu beschikbaar op `http://localhost:3000`

## 🛠️ Development

### Project Structuur

```
bierinckx-shop-/
├── src/
│   ├── components/     # React componenten
│   ├── pages/          # Pagina componenten
│   ├── services/       # API services
│   ├── utils/          # Utility functies
│   └── styles/         # CSS/SCSS bestanden
├── public/             # Statische bestanden
├── tests/              # Test bestanden
├── docs/               # Documentatie
└── package.json
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code met Prettier

## 📋 API Endpoints

### Products
- `GET /api/products` - Krijg alle producten
- `GET /api/products/:id` - Krijg specifiek product
- `POST /api/products` - Maak nieuw product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Verwijder product (admin)

### Users
- `POST /api/auth/register` - Registreer nieuwe gebruiker
- `POST /api/auth/login` - Login gebruiker
- `GET /api/user/profile` - Krijg gebruikersprofiel

### Orders
- `POST /api/orders` - Plaats nieuwe bestelling
- `GET /api/orders` - Krijg gebruikersbestellingen
- `GET /api/orders/:id` - Krijg specifieke bestelling

## 🔒 Security

- JWT authenticatie
- HTTPS/TLS encryptie
- Input validatie
- Rate limiting
- CORS configuratie
- Environment variabelen voor gevoelige data

## 🚀 Deployment

### Environment Variabelen

```env
NODE_ENV=production
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Docker Deployment

```bash
docker build -t bierinckx-shop .
docker run -p 3000:3000 --env-file .env bierinckx-shop
```

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

Zie [CONTRIBUTING.md](CONTRIBUTING.md) voor meer details.

## 📄 License

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👨‍💻 Auteur

**Bierinckx**
- GitHub: [@Bierinckx](https://github.com/Bierinckx)
- Website: [https://github.com/Bierinckx/bierinckx-shop-](https://github.com/Bierinckx/bierinckx-shop-)

## 🙏 Acknowledgments

- Bedankt aan alle contributors
- Geïnspireerd door moderne e-commerce best practices
- Built met ❤️ voor de developer community

## 📊 Status

![GitHub last commit](https://img.shields.io/github/last-commit/Bierinckx/bierinckx-shop-)
![GitHub issues](https://img.shields.io/github/issues/Bierinckx/bierinckx-shop-)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Bierinckx/bierinckx-shop-)

---

⭐ **Als dit project je helpt, geef het dan een ster!** ⭐