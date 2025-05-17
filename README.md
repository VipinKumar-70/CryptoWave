# CryptoWave - Crypto Price Tracker

CryptoWave is a cryptocurrency price tracker built with React and Tailwind CSS, utilizing the CoinGecko API to fetch real-time market data. The application provides users with updated prices, market trends, and other essential data for various cryptocurrencies.

## 📑 Index

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation Instructions](#-installation-instructions)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API**: CoinGecko API

## 🎯 Features

- 📈 Live cryptocurrency price updates
- 🔍 Search functionality for cryptocurrencies
- 📊 Display of market cap, volume, and percentage changes
- 🌙 Dark mode for better user experience

## 📂 Project Structure

```
CryptoWave/
│-- public/             # Static files like favicon and manifest
│-- src/                # Main application source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Application pages (Home, Details, etc.)
│   ├── styles/         # Global styles and Tailwind CSS configurations
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point of the application
│-- .gitignore          # Ignoring node_modules, build files, etc.
│-- package.json        # Project dependencies and scripts
│-- README.md           # Project documentation
```

## 🔧 Installation Instructions

To run the project locally on your machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node package manager)
- [Git](https://git-scm.com/) for version control

### Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/VipinKumar-70/CryptoWave.git
   cd CryptoWave
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm run dev
   ```

## 🔗 API Integration

This project uses the CoinGecko API to fetch cryptocurrency data. No API key is required, but you can check the API docs for rate limits:  
[CoinGecko API Docs](https://www.coingecko.com/en/api)

### Example API Call:

```js
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## 📸 Screenshots

![Home page](https://github.com/user-attachments/assets/f2b4ae3d-c1d4-48f5-9bbd-ee141c9d6e1b)



## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the standard coding conventions and best practices.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details. [MIT License](LICENSE)

## 📩 Contact

If you have any questions or need further assistance, please don't hesitate to contact me at  
[Vipin Kumar](mailto:vipin70kr@gmail.com). I'll be happy to help!
