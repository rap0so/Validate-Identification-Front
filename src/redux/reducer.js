import {
  REQUEST_IDENTIFIERS,
  RECEIVE_IDENTIFIERS
} from './actionTypes'

const initialState = {
  data: false,
  loading: false
}
const store = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IDENTIFIERS:
      return {
        data: false,
        loading: true
      }
    case RECEIVE_IDENTIFIERS:
      action.data = action.data.map(id => {
        const currentNumber = id.number
        if (currentNumber.length === 11) {
          id.parsedNumber = id.number.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, '$1.$2.$3-$4')
        } else {
          id.parsedNumber = id.number.replace(/^([\d]{2})([\d]{3})([\d]{3})([\d]{4})([\d]{2})$/, '$1.$2.$3/$4-$5')
        }
        return id
      }).reverse()
      return ({
        loading: false,
        data: action.data
      })
    default:
      return state
  }
}
export default store
