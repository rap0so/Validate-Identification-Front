import React from 'react'
import ButtonStyle from './ButtonToggleBlackList.style'
import PropTypes from 'prop-types'

const ButtonToggleBlackList = ({ setBlackListMode }) => (
  <ButtonStyle onClick={setBlackListMode}>
    <span>
      <img src='https://img.icons8.com/material/24/000000/hide--v1.png' />
    </span>
  </ButtonStyle>
)

ButtonToggleBlackList.propTypes = {
  setBlackListMode: PropTypes.func
}

export default ButtonToggleBlackList
