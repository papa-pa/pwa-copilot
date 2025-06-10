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
      <div className="consumption-block" style={{marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px'}}>
        <h2>Consumption</h2>
        <label htmlFor="consumption-date">Date :</label>
        <input
          id="consumption-date"
          type="date"
          defaultValue={new Date().toISOString().split('T')[0]}
        />
        <br />
        <label htmlFor="consumption-km" style={{marginTop: '1rem'}}>Km :</label>
        <input
          id="consumption-km"
          type="number"
          placeholder="Nombre de kilomètres"
          min="0"
          step="1"
          style={{marginLeft: '0.5rem'}}
        />
        <br />
        <label htmlFor="consumption-liters" style={{marginTop: '1rem'}}>Liters :</label>
        <input
          id="consumption-liters"
          type="number"
          placeholder="Nombre de litres d'essence"
          min="0"
          step="0.01"
          style={{marginLeft: '0.5rem'}}
        />
      </div>
    </div>
  );
}

export default App;
