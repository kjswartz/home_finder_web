import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { map } from 'lodash/fp'

import Home from './home'
import useHomesQuery from '../graphql/hooks/useHomesQuery'
import { useThrottle } from '../utils/useThrottle'

const Homez: FC = () => {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState<string | null>(null)
  const throttledQuery = useThrottle(2000)

  const { homes, loading, error } = useHomesQuery({
    variables: { search }
  })

  const updateQuery = (newValue: string) => setSearch(newValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    throttledQuery(updateQuery, e.target.value)
  };

  return (
    <Container>
      <SearchFilter 
        value={value}
        onChange={onChange}
        placeholder={'Search Homez'}
      />
      {loading 
        ? <Loading>LOADING...</Loading> 
        : error 
          ? <Error>ERROR</Error>
          : map((home) => (
            <HomeContainer key={home.id}>
              <Home home={home}/>
            </HomeContainer>
          ), homes)}
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

const Error = styled.div`
  color: red;
  font-weight: 700;
`;

const Loading = styled.div`
  color: blue;
  font-weight: 700;
`;