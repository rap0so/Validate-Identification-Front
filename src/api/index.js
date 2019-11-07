import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5003/cpf'
})

/**
 * Method to get all identifiers
 *
 * @param {function} callback - method called after receive success
 *
 * @returns {function} promise resolver
 */
const apiGetIdentifiers = ({ callback, dispatch }) =>
  handleAnyResponse({ request: axiosInstance.get('/'), errorMessage: 'Não foi possível recuperar os registros', callback, dispatch })

/**
 * Method to save new identifier
 *
 * @param {object} data - Obj with info to send to api
 * @param {string} data.number - number of identifier
 * @param {boolean} data.blacklisted - is blacklisted or not
 * @param {function} callback - method called after receive success
 *
 * @returns {function} promise resolver
 */
const apiAddIdentifiers = ({ data, callback, dispatch }) =>
  handleAnyResponse({
    request: axiosInstance.post('/', {
      data
    }),
    errorMessage: 'Não foi possível salvar o registro',
    callback,
    dispatch
  })

/**
 * Method to update an identifier
 *
 * @param {string} id - id of register that will be updated
 * @param {function} callback - method called after receive success
 *
 * @returns {function} promise resolver
 */
const apiUpdateIdentifier = ({ id, callback, dispatch }) =>
  handleAnyResponse({
    request: axiosInstance.put('/blacklist/' + id),
    errorMessage: 'Não foi possível atualizar o registro',
    callback,
    dispatch
  })

/**
 * Method to remove an identifier
 *
 * @param {string} id - id of register that will be updated
 * @param {function} callback - method called after receive success
 *
 * @returns {function} promise resolver
 */
const apiDeleteIdentifier = ({ id, callback, dispatch }) =>
  handleAnyResponse({
    request: axiosInstance.delete('/' + id),
    errorMessage: 'Não foi possível remover o registro',
    callback,
    dispatch
  })

/**
 *
 *
 * @param {promise} request - Any promise
 * @param {string} errorMessage - Error message to return to catch
 * @param {function} callback - method to be executed on success
 */
const handleAnyResponse = ({ request, errorMessage, callback, dispatch }) => {
  debugger
  request.then(response => {
    if (response.data.error) throw new Error(response.data.error)

    dispatch(callback(response.data.data))
  })
    .catch(error => {
      console.error(error)
      throw new Error(errorMessage)
    })
}
export {
  apiGetIdentifiers,
  apiAddIdentifiers,
  apiUpdateIdentifier,
  apiDeleteIdentifier
}
