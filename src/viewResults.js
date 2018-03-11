import React from 'react';

function ViewResults(props) {
console.log('props',props);
    const listFlights = props.children[1] !== undefined && props.children[1] !== ' ' && props.children[1] !== null? props.children[1].map(flight =>
        <tr key={flight.id}>
            <td key={flight.flyFrom}>{flight.flyFrom}</td>
            <td key={flight.flyTo}>{flight.flyTo}</td>
            <td key={flight.dTime}>{new Date(flight.dTime * 1000).toLocaleString()}</td>
            <td key={flight.aTime}>{new Date(flight.aTime * 1000).toLocaleString()}</td>
            <td key={flight.duration.total}>{new Date(flight.duration.total * 1000).getHours() + ':' + new Date(flight.duration.total * 1000).getMinutes()}</td>
            <td key={flight.conversion}>{flight.conversion.EUR + ' EUR'}</td>
        </tr>
    ) : "";

        return (
            <table>
                <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Duration</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{listFlights}</tbody>
            </table>
        )
    }

    export default ViewResults