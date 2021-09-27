import { FC } from 'react'
import styled from 'styled-components'

import { Homes_homes } from '../graphql/schema'

interface Props {
  home: Homes_homes
}

const Home: FC<Props> = ({ home: { address, city, state, zip } }) => {
  return (
    <Container>
      <Item>ADDRESS: {address}</Item>
      <Item>CITY: {city}</Item>
      <Item>STATE: {state}</Item>
      <Item>ZIP: {zip}</Item>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const Item = styled.div`
  display: flex;
`;