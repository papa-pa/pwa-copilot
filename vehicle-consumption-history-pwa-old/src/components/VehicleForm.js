import React, { useState } from 'react';

const VehicleForm = () => {
    const [fuelConsumption, setFuelConsumption] = useState('');
    const [mileage, setMileage] = useState('');
    const [date, setDate] = useState('');
    const [makeModel, setMakeModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            fuelConsumption,
            mileage,
            date,
            makeModel
        });
        // Reset form fields
        setFuelConsumption('');
        setMileage('');
        setDate('');
        setMakeModel('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Fuel Consumption (L/100km):
                    <input
                        type="number"
                        value={fuelConsumption}
                        onChange={(e) => setFuelConsumption(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Mileage (km):
                    <input
                        type="number"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Make and Model:
                    <input
                        type="text"
                        value={makeModel}
                        onChange={(e) => setMakeModel(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default VehicleForm;