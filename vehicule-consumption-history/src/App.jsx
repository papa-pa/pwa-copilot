import { useState } from 'react'
import './App.css'
import CarBrandSelect from './components/CarBrandSelect'
import CarModelSelect from './components/CarModelSelect'

function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  return (
    <div className="app-container">
      <h1>Vehicule Consumption History</h1>
      <CarBrandSelect value={selectedBrand} onChange={e => {
        setSelectedBrand(e.target.value);
        setSelectedModel(''); // reset model when brand changes
      }} />
      <CarModelSelect brand={selectedBrand} value={selectedModel} onChange={e => setSelectedModel(e.target.value)} />
      {selectedBrand && (
        <p>Marque sélectionnée : <strong>{selectedBrand}</strong></p>
      )}
      {selectedModel && (
        <p>Modèle sélectionné : <strong>{selectedModel}</strong></p>
      )}
    </div>
  );
}

export default App;
