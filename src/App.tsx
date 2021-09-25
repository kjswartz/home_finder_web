import { FC } from 'react'
import styled from 'styled-components'
import Homez from './components/homez'

const App: FC = () => (
  <Container>
    <Title>Home Finderz</Title>
    <Homez />
  </Container>
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