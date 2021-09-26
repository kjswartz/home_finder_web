import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { map } from 'lodash/fp'
import { useQuery  } from '@apollo/client'
import { loader } from 'graphql.macro'

import Home from './home'

const homesQuery = loader('src/graphql/queries/homes.graphql')
// TODO setup hooks so I can type return. hook up filter
const Homez: FC = () => {
  const [value, setValue] = useState('')

  const { data, loading, error } = useQuery(homesQuery);

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
      {loading 
        ? <div>loading</div> 
        : error 
          ? <div>error</div> 
          : map((home) => (
            <HomeContainer key={home.id}>
              <Home home={home}/>
            </HomeContainer>
          ), data.homes)}
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