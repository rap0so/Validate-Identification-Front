import React, { useEffect, useState, createRef } from 'react'
import Mask from 'vanilla-masker'
import Identifications from './components/IdentificationList/IdentificationList'
import SearchBar from './components/SearchBar/SearchBar'
import ButtonAddNewId from './components/ButtonAddNewId/ButtonAddNewId'
import ButtonToggleBlackList from './components/ButtonToggleBlackList/ButtonToggleBlackList'
import debounce from './helpers/debounce'
import {
  ContainerStyle,
  HrStyle,
  PStyle,
  HeaderStyle,
  AppStyle
} from './App.style'

import {
  requestIdentifiers,
  createIdentifiers,
  updateIdentifier,
  deleteIdentifier
} from './redux/actions'

import { useSelector, useDispatch } from 'react-redux'
import Loading from './components/loading/loading'

const App = () => {
  const addNewIdInput = createRef()
  const dispatch = useDispatch()

  const [blackListMode, setBlackListMode] = useState()
  const allIds = useSelector(state => state.data)
  const identifications = blackListMode ? allIds : isntBlackList(allIds)
  const [filteredIds, setFilteredIds] = useState(identifications)

  const loading = useSelector(state => state.loading)

  const removeId = id => dispatch(deleteIdentifier(id, dispatch))
  const updateId = id => dispatch(updateIdentifier(id, dispatch))

  useEffect(() => {
    if (!Array.isArray(identifications)) {
      dispatch(requestIdentifiers(dispatch))
    }
  }, [])

  const shoudRenderThisList =
    filteredIds && filteredIds.length ? filteredIds : identifications

  return (
    <>
      <ContainerStyle className='container'>
        <HeaderStyle>
          <ButtonAddNewId
            dispatch={dispatch}
            addNewIdInput={addNewIdInput}
            createIdentifiers={createIdentifiers}
            debouncedMask={debouncedMask(addNewIdInput)}
          />
          <ButtonToggleBlackList
            setBlackListMode={() => setBlackListMode(!blackListMode)}
          />
        </HeaderStyle>
        <AppStyle className='app'>
          {((loading || !shoudRenderThisList) && <Loading />) || (
            <>
              <SearchBar
                placeholderText='Pesquise o registro aqui'
                filterText={text =>
                  filterIds({ text, identifications, setFilteredIds })
                }
              />
              <HrStyle />
              {(shoudRenderThisList && shoudRenderThisList.length && (
                <Identifications
                  list={shoudRenderThisList}
                  removeId={removeId}
                  blackListId={updateId}
                  blackListMode={blackListMode}
                />
              )) || <PStyle>Ainda não há registro cadastrado</PStyle>}
              {/* <Blacklisted list={blacklisted} /> */}
            </>
          )}
        </AppStyle>
      </ContainerStyle>
    </>
  )
}

const debouncedMask = addNewIdInput =>
  debounce(() => {
    const input = addNewIdInput.current
    const inputLength = input.value.length
    if (inputLength !== 11 && inputLength !== 14) return Mask(input).unMask()
    if (inputLength === 11) {
      return Mask(input).maskPattern('999.999.999-99')
    }
    return Mask(input).maskPattern('99.999.999/9999-99')
  }, 300)

const isntBlackList = (allIds = []) =>
  Array.isArray(allIds) && allIds.filter(id => !id.blacklisted).reverse()

const filterIds = ({ text, identifications, setFilteredIds }) => {
  const thisFilteredIds = identifications.filter(id =>
    id.number.match(text.replace(/^[0-9]/g, ''))
  )
  const shouldReturnList = thisFilteredIds.length
    ? thisFilteredIds
    : identifications
  setFilteredIds(shouldReturnList)
}

export default App
