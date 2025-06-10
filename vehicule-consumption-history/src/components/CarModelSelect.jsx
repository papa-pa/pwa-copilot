import React from 'react';

// Dictionnaire des modèles par marque (extrait, à compléter si besoin)
const carModelsByBrand = {
  'Toyota': ['Corolla', 'Camry', 'Yaris', 'RAV4', 'Prius'],
  'Volkswagen': ['Golf', 'Polo', 'Passat', 'Tiguan', 'T-Roc'],
  'Ford': ['Fiesta', 'Focus', 'Mustang', 'Puma', 'Kuga'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'Jazz', 'HR-V'],
  'Chevrolet': ['Spark', 'Malibu', 'Camaro', 'Equinox', 'Tahoe'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'GLA', 'GLC'],
  'BMW': ['1 Series', '3 Series', '5 Series', 'X1', 'X3'],
  'Nissan': ['Micra', 'Juke', 'Qashqai', 'Leaf', 'X-Trail'],
  'Hyundai': ['i10', 'i20', 'i30', 'Tucson', 'Kona'],
  'Kia': ['Picanto', 'Rio', 'Ceed', 'Sportage', 'Sorento'],
  // ... ajoutez d'autres marques et modèles si besoin
};

export default function CarModelSelect({ brand, value, onChange }) {
  const models = carModelsByBrand[brand] || [];
  return (
    <div>
      <label htmlFor="car-model-select">Modèle :</label>
      <select id="car-model-select" value={value} onChange={onChange} required disabled={!brand}>
        <option value="">-- Sélectionnez un modèle --</option>
        {models.map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
}
