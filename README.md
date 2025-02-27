CryptoWave - Crypto Price Tracker

🚀 About the Project

CryptoWave is a cryptocurrency price tracker built with React and Tailwind CSS, utilizing the CoinGecko API to fetch real-time market data. The application provides users with updated prices, market trends, and other essential data for various cryptocurrencies.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

API: CoinGecko API

🎯 Features

📈 Live cryptocurrency price updates

🔍 Search functionality for cryptocurrencies

📊 Display of market cap, volume, and percentage changes

🌙 Dark mode for better user experience

📂 Project Structure

CryptoWave/
│-- src/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ ├── App.js
│ ├── index.js
│-- public/
│-- package.json
│-- README.md

🚀 Installation & Setup

Clone the repository

git clone https://github.com/yourusername/CryptoWave.git
cd CryptoWave

Install dependencies

yarn install # or npm install

Start the development server

yarn start # or npm start

🔗 API Integration

This project uses the CoinGecko API to fetch cryptocurrency data. No API key is required, but you can check the API docs for rate limits:
CoinGecko API Docs

Example API Call:

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
.then(response => response.json())
.then(data => console.log(data));

📸 Screenshots

(Add screenshots here)

📝 License

This project is open-source and available under the MIT License.

📬 Contact

For any inquiries, reach out to:

Your Name - LinkedIn

GitHub - YourGitHub
