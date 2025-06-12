import React from 'react';

// Liste exhaustive des marques automobiles en activité dans le monde (extrait, à compléter si besoin)
const carBrands = [
  'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'BYD',
  'Chery', 'Chevrolet', 'Citroën', 'Dacia', 'Dongfeng',
  'Infiniti', 'Isuzu', 'Fiat', 'Ford', 'Geely',
  'Genesis', 'Great Wall', 'Honda', 'Hyundai', 'Jaguar',
  'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln',
  'Mahindra', 'Mazda', 'Mercedes-Benz', 'Mini','Mitsubishi', 
  'Nissan', 'Opel', 'Perodua', 'Peugeot', 'Porsche',
  'Proton', 'Ram', 'Renault', 'Saab', 'Seat',
  'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki',
  'Tata', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
  // ... ajoutez d'autres marques si besoin
];

export default function CarBrandSelect({ value, onChange }) {
  return (
    <div>
      <label htmlFor="car-brand-select">Marque :</label>
      <select id="car-brand-select" value={value} onChange={onChange} required>
        <option value="">-- Sélectionnez une marque --</option>
        {carBrands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
}
