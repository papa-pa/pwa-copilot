import { useState } from 'react'
import './App.css'
import CarBrandSelect from './components/CarBrandSelect'
import CarModelSelect from './components/CarModelSelect'
import CarYearSelect from './components/CarYearSelect'

function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [serviceYear, setServiceYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [history, setHistory] = useState(() => {
    const data = localStorage.getItem('consumptionHistory');
    return data ? JSON.parse(data) : [];
  });

  const handleSubmit = () => {
    const date = document.getElementById('consumption-date').value;
    const mileageValue = document.getElementById('consumption-mileage').value;
    const km = document.getElementById('consumption-km').value;
    const liters = document.getElementById('consumption-liters').value;
    const price = document.getElementById('consumption-price').value;
    if (!selectedBrand || !selectedModel || !date || !mileageValue || !km || !liters || !price) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    const entry = {
      brand: selectedBrand,
      model: selectedModel,
      year: serviceYear,
      date,
      mileage: mileageValue,
      km,
      liters,
      price,
      averageConsumption: km > 0 ? ((liters * 100) / km).toFixed(2) : null
    };
    const updatedHistory = [entry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('consumptionHistory', JSON.stringify(updatedHistory));
    setMileage('');
  };

  return (
    <div className="app-container">
      <h1>Vehicule Consumption History</h1>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', marginBottom: '1rem' }}>
        <CarBrandSelect value={selectedBrand} onChange={e => {
          setSelectedBrand(e.target.value);
          setSelectedModel(''); // reset model when brand changes
        }} />
        <CarModelSelect brand={selectedBrand} value={selectedModel} onChange={e => {
          setSelectedModel(e.target.value);
          setServiceYear(''); // reset year when model changes
        }} />
        <CarYearSelect model={selectedModel} value={serviceYear} onChange={e => setServiceYear(e.target.value)} />
      </div>
      {/* {selectedBrand && (
        <p>Marque sélectionnée : <strong>{selectedBrand}</strong></p>
      )}
      {selectedModel && (
        <p>Modèle sélectionné : <strong>{selectedModel}</strong></p>
      )} */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div className="consumption-block" style={{marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px'}}>
            <h2>Consumption</h2>
            <label htmlFor="consumption-date">Date :</label>
            <input
              id="consumption-date"
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
            <br />
            <label htmlFor="consumption-mileage" style={{marginTop: '1rem'}}>Vehicule Mileage :</label>
            <input
              id="consumption-mileage"
              type="number"
              placeholder="Compteur du véhicule (ex: 123456.7)"
              min="0"
              step="0.1"
              style={{marginLeft: '0.5rem'}}
              value={mileage}
              onChange={e => {
                setMileage(e.target.value);
                // Préremplissage automatique du champ Km
                const last = history.find(h => h.brand === selectedBrand && h.model === selectedModel && h.year === serviceYear && h.mileage);
                if (last && e.target.value) {
                  const diff = parseFloat(e.target.value) - parseFloat(last.mileage);
                  if (!isNaN(diff) && diff >= 0) {
                    document.getElementById('consumption-km').value = diff.toFixed(1);
                  }
                }
              }}
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
            <br />
            <label htmlFor="consumption-price" style={{marginTop: '1rem'}}>Price :</label>
            <input
              id="consumption-price"
              type="number"
              placeholder="Prix de l'essence (€)"
              min="0"
              step="0.01"
              style={{marginLeft: '0.5rem'}}
            />
            <br />
            <button
              type="button"
              style={{marginTop: '1.5rem'}}
              onClick={handleSubmit}
            >
              Soumettre
            </button>
          </div>
          <div className="stats-block" style={{margin:'2rem 0', padding:'1rem', border:'1px solid #bbb', borderRadius:'8px', background:'#f8f8f8'}}>
            <h2>Stats</h2>
            {(() => {
              // Filtrer l'historique pour le véhicule sélectionné
              const filtered = history.filter(item => item.brand === selectedBrand && item.model === selectedModel && item.year === serviceYear && item.averageConsumption);
              if (filtered.length === 0) return <p>Aucune donnée pour ce véhicule.</p>;
              const avg = (filtered.reduce((sum, item) => sum + parseFloat(item.averageConsumption), 0) / filtered.length).toFixed(2);
              return <p>Conso. Moyenne Global : <strong>{avg} L/100km</strong></p>;
            })()}
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: '2rem', maxHeight: '500px', overflowY: 'auto', minWidth: '320px' }}>
          <h2>Historique</h2>
          {history.length === 0 ? (
            <p>Aucune donnée enregistrée.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {history.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '6px', padding: '0.5rem' }}>
                  <strong>{item.brand} {item.model} ({item.year})</strong><br />
                  Date : {item.date}<br />
                  Compteur : {item.mileage}<br />
                  Km : {item.km}<br />
                  Litres : {item.liters}<br />
                  Prix : {item.price} €<br />
                  Conso. Moyenne : {item.averageConsumption ? item.averageConsumption + ' L/100km' : '-'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
