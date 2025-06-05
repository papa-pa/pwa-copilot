import React, { useState } from 'react';
import VehicleForm from './components/VehicleForm';
import ConsumptionHistory from './components/ConsumptionHistory';
import './styles/App.css';

const App = () => {
  const [consumptionData, setConsumptionData] = useState([]);

  const addConsumptionData = (data) => {
    setConsumptionData([...consumptionData, data]);
  };

  return (
    <div className="app">
      <h1>Vehicle Consumption History</h1>
      <VehicleForm addConsumptionData={addConsumptionData} />
      <ConsumptionHistory data={consumptionData} />
    </div>
  );
};

export default App;