import React from 'react'

export default function Results({ data }) {
    const tableHeaders = Object.keys(data[0]);

    const getTableHeaders = () => {
        return tableHeaders.map((header, i) => <td key={i}>{header}</td>);
    }

    const getRows = () => {
        return data.map((row, i) => <tr key={i}>{getRow(row)}</tr>);
    }

    const getRow = (row) => {
        let vals = Object.values(row);
        return vals.map((val, i) => <td key={i}>{val}</td>);
    }

    return (
        <table>
            <thead>
                <tr>
                    {getTableHeaders()}
                </tr>    
            </thead>
            
            <tbody>
                {getRows()}
            </tbody>
        </table>
    )
}

