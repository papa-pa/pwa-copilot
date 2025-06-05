# Hello World Progressive Web App

This is a simple Progressive Web App (PWA) that displays a "Hello World" message. It demonstrates the basic structure and functionality of a PWA, including service worker registration and manifest configuration.

## Project Structure

```
hello-world-pwa
├── public
│   ├── index.html        # Main HTML document
│   ├── manifest.json     # PWA metadata
│   └── service-worker.js  # Service worker for offline capabilities
├── src
│   ├── index.js          # Entry point for the JavaScript application
│   └── App.js            # Main App component
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this PWA, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd hello-world-pwa
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the app.

## Features

- Simple "Hello World" message displayed on the screen.
- Service worker for offline support.
- Web App Manifest for installation on devices.

## License

This project is licensed under the MIT License.