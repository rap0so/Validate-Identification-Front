import React from 'react'
import IdStyle from './identification.style'
import PropTypes from 'prop-types'

const Identification = ({ id, blackListMode, blackListId }) => (
  <IdStyle className='IdStyle'>
    <p>{id.parsedNumber}</p>
    {blackListMode && (
      <input
        onClick={() => blackListId(id._id)}
        defaultChecked={id.blacklisted}
        type='checkbox'
      />
    )}
  </IdStyle>
)

Identification.propTypes = {
  id: PropTypes.shape({
    parsedNumber: PropTypes.string,
    blacklisted: PropTypes.bool,
    _id: PropTypes.string
  }),
  blackListMode: PropTypes.bool,
  blackListId: PropTypes.func
}

export default Identification
