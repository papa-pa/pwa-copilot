# Vehicle Consumption History PWA

## Overview
The Vehicle Consumption History Progressive Web App (PWA) allows users to record and track their vehicle's fuel consumption, mileage, date, and make and model. This app is designed to provide an easy-to-use interface for managing vehicle data and offers offline capabilities through service workers.

## Features
- Record fuel consumption data
- Input vehicle details (make, model, mileage, date)
- View consumption history
- Offline access and caching for improved performance

## Project Structure
```
vehicle-consumption-history-pwa
├── public
│   ├── index.html          # Main HTML document
│   ├── manifest.json       # Web app metadata
│   └── service-worker.js    # Service worker for offline capabilities
├── src
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point of the application
│   ├── components
│   │   ├── VehicleForm.jsx  # Component for inputting vehicle data
│   │   └── ConsumptionHistory.jsx # Component for displaying consumption history
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # npm configuration file
├── vite.config.js           # Vite configuration file
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd vehicle-consumption-history-pwa
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Usage
- Open the app in your browser.
- Use the Vehicle Form to input your vehicle's fuel consumption data.
- View the recorded history in the Consumption History component.

## License
This project is licensed under the MIT License.