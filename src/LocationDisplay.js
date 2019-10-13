import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const ScURL = styled.div`
  position: fixed;
  bottom: 0;
  color: salmon;
`

const LocationDisplay = withRouter(({ location }) => (
  <ScURL data-testid="location-display">{location.pathname}</ScURL>
))

export default LocationDisplay
