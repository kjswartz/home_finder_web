import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { map } from 'lodash/fp'

import Home from './home'
import { IHome } from '../types'

const HOMES: IHome[] = require('../homez.json')

const Homez: FC = () => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  return (
    <Container>
      <SearchFilter 
        value={value}
        onChange={onChange}
        placeholder={'Search Homez'}
      />
      {map((home) => (
        <HomeContainer key={home.id}>
          <Home home={home}/>
        </HomeContainer>
      ), HOMES)}
    </Container>
  )
}

export default Homez;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const SearchFilter = styled.input`
  width: 320px;
  height: 20px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const HomeContainer = styled.div`
  border: 1px solid black;
  margin: 10px 0;
`;