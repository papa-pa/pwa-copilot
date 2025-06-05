import React, { useState } from 'react';
import VehicleForm from './components/VehicleForm';
import ConsumptionHistory from './components/ConsumptionHistory';
import './styles/App.css';

function App() {
  const [consumptionData, setConsumptionData] = useState([]);

  const addConsumptionRecord = (record) => {
    setConsumptionData([...consumptionData, record]);
  };

  return (
    <div className="App">
      <h1>Vehicle Consumption History</h1>
      <VehicleForm addConsumptionRecord={addConsumptionRecord} />
      <ConsumptionHistory data={consumptionData} />
    </div>
  );
}

export default App;