import React from 'react'
import PropTypes from 'prop-types'
import Identification from '../Identification/identification'
import styledComponent from './IdenficationList.style'

const { UlStyled, LiStyled, SpanRemoveId } = styledComponent

const IdentificationList = ({ list, removeId, updateId }) => {
  return (
    <UlStyled className='UlStyled'>
      {list.map((id, idx) => (
        <LiStyled className='LiStyled' key={idx}>
          <Identification id={id} />
          <SpanRemoveId onClick={() => removeId(id._id)}>
            <img src='https://img.icons8.com/windows/50/000000/add-trash.png' />
          </SpanRemoveId>
        </LiStyled>
      ))}
    </UlStyled>
  )
}

IdentificationList.propTypes = {
  list: PropTypes.array,
  removeId: PropTypes.func,
  updateId: PropTypes.func
}

export default IdentificationList
