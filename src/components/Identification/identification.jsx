import React from 'react'
import IdStyle from './identification.style'
import Proptypes from 'prop-types'

const Identification = ({ id }) => (
  <IdStyle className='IdStyle'>{id.number}</IdStyle>
)

Identification.propTypes = {
  id: Proptypes.shape({
    number: Proptypes.string
  })
}

export default Identification
