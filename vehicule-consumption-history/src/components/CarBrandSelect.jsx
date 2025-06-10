import React from 'react';

// Liste exhaustive des marques automobiles en activité dans le monde (extrait, à compléter si besoin)
const carBrands = [
  'Toyota', 'Volkswagen', 'Ford', 'Honda', 'Chevrolet', 'Mercedes-Benz', 'BMW', 'Nissan', 'Hyundai', 'Kia',
  'Renault', 'Peugeot', 'Fiat', 'Audi', 'Lexus', 'Mazda', 'Subaru', 'Jeep', 'Dacia', 'Skoda',
  'Tesla', 'Volvo', 'Land Rover', 'Jaguar', 'Porsche', 'Mitsubishi', 'Suzuki', 'Citroën', 'Opel', 'Mini',
  'Acura', 'Alfa Romeo', 'Infiniti', 'Lincoln', 'Genesis', 'Chery', 'BYD', 'Geely', 'Great Wall', 'Dongfeng',
  'Tata', 'Mahindra', 'Proton', 'Perodua', 'Saab', 'Seat', 'Smart', 'SsangYong', 'Isuzu', 'Ram',
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
