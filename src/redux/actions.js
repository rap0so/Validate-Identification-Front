import {
  apiGetIdentifiers,
  apiAddIdentifiers,
  apiUpdateIdentifier,
  apiDeleteIdentifier
} from '../api'

import {
  REQUEST_IDENTIFIERS,
  RECEIVE_IDENTIFIERS,
  CREATE_IDENTIFIERS,
  UPDATE_IDENTIFIERS,
  DELETE_IDENTIFIERS
} from './actionTypes'

const requestIdentifiers = dispatch => {
  apiGetIdentifiers({ callback: returnIdentifiers, dispatch })
  return {
    type: REQUEST_IDENTIFIERS
  }
}

const returnIdentifiers = data =>
  ({
    type: RECEIVE_IDENTIFIERS,
    data
  })

const createIdentifiers = (data, dispatch) => {
  apiAddIdentifiers({ data, callback: returnIdentifiers, dispatch })
  return {
    type: CREATE_IDENTIFIERS,
    data
  }
}

const updateIdentifier = (id, dispatch) => {
  apiUpdateIdentifier({ id, callback: returnIdentifiers, dispatch })
  return {
    type: UPDATE_IDENTIFIERS,
    id
  }
}

const deleteIdentifier = (id, dispatch) => {
  apiDeleteIdentifier({ id, callback: returnIdentifiers, dispatch })
  return {
    type: DELETE_IDENTIFIERS,
    id
  }
}

export {
  requestIdentifiers,
  returnIdentifiers,
  createIdentifiers,
  updateIdentifier,
  deleteIdentifier
}
