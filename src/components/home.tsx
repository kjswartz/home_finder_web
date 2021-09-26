import { FC } from 'react'
import styled from 'styled-components'

import { Homes_homes } from '../graphql/schema'

interface Props {
  home: Homes_homes
}

const Home: FC<Props> = ({ home: { address } }) => {
  return (
    <Container>
      {address}
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
`;