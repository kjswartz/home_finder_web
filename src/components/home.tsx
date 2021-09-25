import { FC } from 'react'
import styled from 'styled-components'

import { IHome } from '../types'

interface Props {
  home: IHome
}

const Home: FC<Props> = ({ home }) => {
  return (
    <Container>
      {home.address}
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
`;