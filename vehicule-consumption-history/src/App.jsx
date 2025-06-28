import { useState } from 'react'
import './App.css'
import CarBrandSelect from './components/CarBrandSelect'
import CarModelSelect from './components/CarModelSelect'
// import CarYearSelect from './components/CarYearSelect'
import ModelGenerationSelect from './components/ModelGenerationSelect'

function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [serviceYear, setServiceYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleIdx, setSelectedVehicleIdx] = useState(null);
  const [history, setHistory] = useState(() => {
    const data = localStorage.getItem('consumptionHistory');
    return data ? JSON.parse(data) : [];
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState('main');

  const handleSubmit = () => {
    const date = document.getElementById('consumption-date').value;
    const mileageValue = document.getElementById('consumption-mileage').value;
    const km = document.getElementById('consumption-km').value;
    const liters = document.getElementById('consumption-liters').value;
    const price = document.getElementById('consumption-price').value;
    // Remplacer les usages de selectedBrand, selectedModel, serviceYear par le véhicule sélectionné pour l'affectation des données
    const currentVehicle = vehicles[selectedVehicleIdx] || { brand: selectedBrand, model: selectedModel, year: serviceYear };
    if (!currentVehicle.brand || !currentVehicle.model || !date || !mileageValue || !km || !liters || !price) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    const entry = {
      brand: currentVehicle.brand,
      model: currentVehicle.model,
      year: currentVehicle.year,
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
      {/* Bouton menu hamburger en haut à gauche */}
      <button
        className="menu-btn"
        aria-label="Ouvrir le menu"
        onClick={() => setMenuOpen(true)}
        style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 1001, background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
      >
        &#9776;
      </button>
      {/* Menu latéral */}
      {menuOpen && (
        <div className="side-menu" style={{ position: 'fixed', top: 0, left: 0, width: '80vw', maxWidth: '320px', height: '100vh', background: '#fff', boxShadow: '2px 0 8px rgba(0,0,0,0.15)', zIndex: 1002, padding: '2rem 1rem 1rem 1rem', display: 'flex', flexDirection: 'column' }}>
          <button
            className="close-menu-btn"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}
          >
            &times;
          </button>
          <h2>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" onClick={e => { e.preventDefault(); setPage('home'); setMenuOpen(false); }} style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.1rem' }}>Accueil</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.1rem' }}>Statistiques</a></li>
            <li><a href="#" style={{ textDecoration: 'none', color: '#007bff', fontSize: '1.1rem' }}>À propos</a></li>
          </ul>
        </div>
      )}
      {page === 'home' ? (
        <div className="home-description" style={{maxWidth:'600px',margin:'2rem auto',padding:'2rem',background:'#fff',borderRadius:'10px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)'}}>
          <h1>Bienvenue sur l'application "Historique de Consommation Véhicule"</h1>
          <p>Cette application progressive web (PWA) vous permet d'enregistrer, suivre et analyser la consommation de carburant de vos véhicules au fil du temps.</p>
          <ul>
            <li>Ajoutez un ou plusieurs véhicules à votre profil.</li>
            <li>Enregistrez chaque plein avec la date, le kilométrage, la distance parcourue, la quantité de carburant et le prix.</li>
            <li>Consultez l'historique détaillé de chaque véhicule.</li>
            <li>Visualisez la consommation moyenne et les statistiques pour optimiser vos trajets.</li>
            <li>Vos données restent privées et stockées localement sur votre appareil.</li>
          </ul>
          <button className="submit-btn" style={{marginTop:'2rem'}} onClick={() => setPage('main')}>Accéder à l'application</button>
        </div>
      ) : (
        <>
          <h1>Historique de Consommation Véhicule</h1>
          <p>Enregistrez et suivez la consommation de votre véhicule au fil du temps.</p>
          <div className="selects-row">
            <CarBrandSelect value={selectedBrand} onChange={e => {
              setSelectedBrand(e.target.value);
              setSelectedModel('');
            }} />
            <CarModelSelect brand={selectedBrand} value={selectedModel} onChange={e => {
              setSelectedModel(e.target.value);
              setServiceYear('');
            }} />
            <ModelGenerationSelect model={selectedModel} value={serviceYear} onChange={e => setServiceYear(e.target.value)} />
            <button
              type="button"
              className="add-vehicle-btn"
              style={{height: '2.5rem', marginLeft: '0.5rem'}}
              onClick={() => {
                if (!selectedBrand || !selectedModel || !serviceYear) {
                  alert('Veuillez sélectionner la marque, le modèle et la génération/phase.');
                  return;
                }
                const exists = vehicles.some(v => v.brand === selectedBrand && v.model === selectedModel && v.year === serviceYear);
                if (!exists) {
                  setVehicles([...vehicles, { brand: selectedBrand, model: selectedModel, year: serviceYear }]);
                }
              }}
            >
              Ajouter
            </button>
          </div>
          {vehicles.length > 0 && (
            <div className="vehicle-list-block">
              <h3>Véhicules enregistrés</h3>
              <ul className="vehicle-list">
                {vehicles.map((v, idx) => (
                  <li
                    key={idx}
                    className={selectedVehicleIdx === idx ? 'vehicle-item selected' : 'vehicle-item'}
                    onClick={() => setSelectedVehicleIdx(idx)}
                    style={{cursor: 'pointer', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '6px', marginBottom: '0.5rem', background: selectedVehicleIdx === idx ? '#e6f0ff' : '#fff'}}
                  >
                    {v.brand} {v.model} ({v.year})
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="main-content">
            <div className="main-left">
              <div className="consumption-block">
                <h2>Consumption</h2>
                <div align="center">
                  <p>Il est conseillé d'utiliser le kilométrage du véhicule pour plus de précision.</p>
                  <p>Une réinitialisation malencontreuse d'un channel de déplacement dans votre véhicule est vite arrivé.</p>
                </div>
                <label htmlFor="consumption-date">Date : </label>
                <input
                  id="consumption-date"
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
                <br />
                <label htmlFor="consumption-mileage" style={{marginTop: '1rem'}}>Kilométrage : </label>
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
                    const last = history.find(h => h.brand === currentVehicle.brand && h.model === currentVehicle.model && h.year === currentVehicle.year && h.mileage);
                    if (last && e.target.value) {
                      const diff = parseFloat(e.target.value) - parseFloat(last.mileage);
                      if (!isNaN(diff) && diff >= 0) {
                        document.getElementById('consumption-km').value = diff.toFixed(1);
                      }
                    }
                  }}
                />
                <br />
                <label htmlFor="consumption-km" style={{marginTop: '1rem'}}>Kilomètres Parcourus : </label>
                <input
                  id="consumption-km"
                  type="number"
                  placeholder="Nombre de kilomètres"
                  min="0"
                  step="1"
                  style={{marginLeft: '0.5rem'}}
                />
                <br />
                <label htmlFor="consumption-liters" style={{marginTop: '1rem'}}>Nombre de Litres Consommés : </label>
                <input
                  id="consumption-liters"
                  type="number"
                  placeholder="Nombre de litres d'essence"
                  min="0"
                  step="0.01"
                  style={{marginLeft: '0.5rem'}}
                />
                <br />
                <label htmlFor="consumption-price" style={{marginTop: '1rem'}}>Prix du plein de carburant : </label>
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
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Soumettre
                </button>
              </div>
              <div className="stats-block">
                <h2>Stats</h2>
                {(() => {
                  const filtered = history.filter(item => item.brand === selectedBrand && item.model === selectedModel && item.year === serviceYear && item.averageConsumption);
                  if (filtered.length === 0) return <p>Aucune donnée pour ce véhicule.</p>;
                  const avg = (filtered.reduce((sum, item) => sum + parseFloat(item.averageConsumption), 0) / filtered.length).toFixed(2);
                  return <p>Conso. Moyenne Global : <strong>{avg} L/100km</strong></p>;
                })()}
              </div>
            </div>
            <div className="main-right">
              <h2>Historique</h2>
              {history.length === 0 ? (
                <p>Aucune donnée enregistrée.</p>
              ) : (
                <ul className="history-list">
                  {history.map((item, idx) => (
                    <li key={idx} className="history-item">
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
        </>
      )}
    </div>
  );
}

export default App;
