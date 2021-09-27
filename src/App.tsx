import { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import styled from 'styled-components'
import Homez from './components/Homez'

import { client } from './apolloClient'

const App: FC = () => (
  <ApolloProvider client={client}>
    <Container>
      <Title>Home Finderz</Title>
      <Homez />
    </Container>
  </ApolloProvider>
)

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  color: #666;
  font-weight: 700;
  margin-bottom: 20px;
`;