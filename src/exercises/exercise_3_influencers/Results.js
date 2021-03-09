import React from 'react'

export default function Results({ data }) {
    const tableHeaders = Object.keys(data[0]).map(header => {
        return header.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    }) // Split header names by camelcase and make uppercase

    const getTableHeaders = () => {
        let headerTds = tableHeaders.map((header, i) => <td key={i}>{header}</td>);
        return <tr>{headerTds}</tr>
    }

    const getRows = () => {
        return data.map((row, i) => <tr key={i}>{getRow(row)}</tr>);
    }

    const getRow = (row) => {
        let vals = Object.values(row);
        return vals.map((val, i) => <td key={i}>{val}</td>);
    }

    return (
        <table id="results">
            <thead>
                {getTableHeaders()}
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    )
}

