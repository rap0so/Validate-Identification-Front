import {
  REQUEST_IDENTIFIERS,
  RECEIVE_IDENTIFIERS
} from './actionTypes'

const initialState = {
  data: [],
  loading: false
}
const store = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IDENTIFIERS:
      return {
        data: [],
        loading: true
      }
    case RECEIVE_IDENTIFIERS:
      return ({
        loading: false,
        data: action.data
      })
    default:
      return state
  }
}
export default store
