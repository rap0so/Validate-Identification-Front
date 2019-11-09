import React from 'react'
import ButtonStyle from './ButtonAddnewId.style'
import PropTypes from 'prop-types'

const ButtonAddNewId = ({
  addNewIdInput,
  dispatch,
  createIdentifiers,
  debouncedMask
}) => (
  <ButtonStyle
    onClick={() => {
      const currentValue = addNewIdInput.current.value.replace(/[^0-9]/g, '')
      if (!currentValue.length) return
      dispatch(
        createIdentifiers(
          {
            number: currentValue
          },
          dispatch
        )
      )
      addNewIdInput.current.value = ''
    }}
  >
    <span>+</span>
    <input ref={addNewIdInput} type='text' onChange={debouncedMask} />
  </ButtonStyle>
)

ButtonAddNewId.propTypes = {
  addNewIdInput: PropTypes.object,
  dispatch: PropTypes.func,
  createIdentifiers: PropTypes.func,
  debouncedMask: PropTypes.func
}

export default ButtonAddNewId
