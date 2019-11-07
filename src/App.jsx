import React, { useEffect, useState } from 'react'
import Identifications from './components/IdentificationList/IdentificationList'
import Blacklisted from './components/BlacklistedList/BlacklistedList'
import { Container } from './App.style'

import {
  requestIdentifiers,
  createIdentifiers,
  updateIdentifier,
  deleteIdentifier
} from './redux/actions'

import { useSelector, useDispatch } from 'react-redux'
import Loading from './components/loading/loading'

const App = () => {
  const dispatch = useDispatch()
  const identifications = useSelector(
    state => state.data || [].filter(id => !id.blacklisted)
  )
  const blacklisted = useSelector(
    state => state.data || [].filter(id => id.blacklisted)
  )
  const loading = useSelector(state => state.loading)

  const removeId = id => dispatch(deleteIdentifier(id, dispatch))
  const updateId = id => dispatch(updateIdentifier(id, dispatch))

  useEffect(() => {
    if (!identifications) {
      dispatch(requestIdentifiers(dispatch))
    }
  }, [])

  if (loading) return <Loading />
  return (
    <Container>
      <Identifications
        list={identifications}
        removeId={removeId}
        updateId={updateId}
      />
      <Blacklisted list={blacklisted} />
    </Container>
  )
}

export default App
