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
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

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
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={() => setSorted(!sorted)}>Sort by Priority</button>

      {filteredData.length ? <Results data={filteredData} /> : <NoData />}

    </Container>
  )
}

export default Influencers
