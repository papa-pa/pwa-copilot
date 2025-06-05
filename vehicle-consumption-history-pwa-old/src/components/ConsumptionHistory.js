import React from 'react';

const ConsumptionHistory = ({ history }) => {
    return (
        <div>
            <h2>Consumption History</h2>
            {history.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <ul>
                    {history.map((record, index) => (
                        <li key={index}>
                            {record.date}: {record.mileage} miles, {record.fuelConsumption} gallons, {record.make} {record.model}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ConsumptionHistory;