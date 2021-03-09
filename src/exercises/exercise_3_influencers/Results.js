import React from 'react'

export default function Results({ data }) {
    
    const tableHeaders = ["Member", "Type", "Category", "Affiliation", "Title", "State", "Priority"];

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

