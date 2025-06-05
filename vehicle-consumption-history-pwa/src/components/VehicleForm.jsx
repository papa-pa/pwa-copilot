import React, { useState } from 'react';

const VehicleForm = ({ onAddConsumption }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');
    const [date, setDate] = useState('');
    const [litres, setLitres] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const consumptionData = {
            make,
            model,
            mileage,
            date,
            litres,
            price,
        };
        // Store in localStorage
        const history = JSON.parse(localStorage.getItem('consumptionHistory') || '[]');
        history.push(consumptionData);
        localStorage.setItem('consumptionHistory', JSON.stringify(history));
        onAddConsumption(consumptionData);
        setMake('');
        setModel('');
        setMileage('');
        setDate('');
        setLitres('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Make:</label>
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Mileage:</label>
                <input
                    type="number"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Number of Litres:</label>
                <input
                    type="number"
                    value={litres}
                    onChange={(e) => setLitres(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Consumption</button>
        </form>
    );
};

export default VehicleForm;