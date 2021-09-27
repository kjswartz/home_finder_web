import { FC } from 'react'
import styled from 'styled-components'

import { Homes_homes } from '../graphql/schema'

interface Props {
  home: Homes_homes
}

const Home: FC<Props> = ({ home: { address, city, state, zip, url } }) => {
  return (
    <Container>
      <Link href={url ?? ''} target="_blank" />
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
  position: relative;
`;

const Item = styled.div`
  display: flex;
`;

const Link = styled.a`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`