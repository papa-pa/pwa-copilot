import React from 'react';

const ConsumptionHistory = ({ history }) => {
    return (
        <div>
            <h2>Consumption History</h2>
            {history.length === 0 ? (
                <p>No consumption data available.</p>
            ) : (
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>
                            {entry.date}: {entry.mileage} miles, {entry.fuelConsumption} gallons - {entry.make} {entry.model}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ConsumptionHistory;