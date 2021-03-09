import React, { useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import Results from './Results'
import NoData from './NoData'

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 25,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
  position: 'relative',
  minWidth: 650,
  maxWidth: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
})

const Button = styled.button({
  fontSize: 15,
  marginBottom: 10,
  padding: '5px 20px',
  border: '2px solid #0926a2', 
  color: '#0926a2',
  fontWeight: 'bold',
  borderRadius: "5px",
  cursor: 'pointer',
})

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState(false)
  const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values
  const filteredData = filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]) // use the filterBy util to filter our data by the given search term

  if (sorted) {
    filteredData.sort((a, b) => {
      return getNumericPriority(b) - getNumericPriority(a);
  
      function getNumericPriority(obj) {
        let numericPriority;
  
        switch (obj.priority) {
          case 'High':
            numericPriority = 2;
            break;
          case 'Medium':
            numericPriority = 1;
            break;
          case 'Low':
            numericPriority = 0;
            break;
          default:
            numericPriority = 0;
            break;
        }
        return numericPriority;
      }
    })
  }

  return (
    <Container>
      <h1 id="title">Pulse Analytics <br/>Take Home Assignment</h1>
      <SearchBar setSearch={setSearch} search={search} />
      <Button onClick={() => setSorted(!sorted)} aria-label="sort button">Sort by Priority</Button>
      {filteredData.length ? <Results data={filteredData} /> : <NoData />}
    </Container>
  )
}

export default Influencers
