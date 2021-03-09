import React from 'react'

// - Create a display that renders the influencers data with the corresponding keys: `["member", "influencerType", "indicationCategory", "affiliation", "affiliationPosition", "primaryState", "priority"]`. Those keys should have corresponding headers/labels that read `["Member", "Type", "Category", "Affiliation", "Title", "State", "Priority"]` respectively.

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

{/* <table style={tableStyle}>
   <tbody>
       <tr style={rowStyle}>
           <td style={leftColumnStyle}>Battery</td>
           <td><StatsBar/></td>
        </tr>
   </tbody>
</table */}
