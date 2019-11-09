import React from 'react'
import IdStyle from './identification.style'
import Proptypes from 'prop-types'

const Identification = ({ id }) => (
  <IdStyle className='IdStyle'>{id.parsedNumber}</IdStyle>
)

Identification.propTypes = {
  id: Proptypes.shape({
    parsedNumber: Proptypes.string
  })
}

export default Identification
