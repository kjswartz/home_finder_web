import React from 'react'
import { render } from '@testing-library/react'

import Home from '../components/home'
const HOMES = require('./homez.json')

describe('UserProfile Component', () => {
  it('renders with address, city, state and zip', async () => {
    const { findByText } = render(<Home home={HOMES[0]} />)

    const address = await findByText('ADDRESS: 108 Marietta Dr')
    const city = await findByText('CITY: SAN FRANCISCO')
    const state = await findByText('STATE: CA')
    const zip = await findByText('ZIP: 94127')

    expect(address).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(zip).toBeInTheDocument()
  })
})
