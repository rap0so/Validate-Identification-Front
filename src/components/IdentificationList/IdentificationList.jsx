import React from 'react'
import PropTypes from 'prop-types'
import Identification from '../Identification/identification'
import styledComponent from './IdenficationList.style'

const { UlStyled, LiStyled, SpanRemoveId } = styledComponent

const IdentificationList = ({ list, removeId, blackListId, blackListMode }) => {
  return (
    <UlStyled className='UlStyled'>
      {list.map((id, idx) => (
        <LiStyled className='LiStyled' key={idx}>
          <Identification
            id={id}
            blackListMode={blackListMode}
            blackListId={blackListId}
          />
          <SpanRemoveId onClick={() => removeId(id._id)}>
            <img
              alt='trash icon'
              src='https://img.icons8.com/windows/50/000000/add-trash.png'
            />
          </SpanRemoveId>
        </LiStyled>
      ))}
    </UlStyled>
  )
}

IdentificationList.propTypes = {
  list: PropTypes.array,
  removeId: PropTypes.func,
  blackListId: PropTypes.func,
  blackListMode: PropTypes.bool
}

export default IdentificationList
