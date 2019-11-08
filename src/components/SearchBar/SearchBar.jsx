import React from 'react'
import PropType from 'prop-types'
import InputStyle from './searchBar.style'

const SearchBar = ({ filterText, placeholderText }) => {
  return (
    <InputStyle
      type='text'
      placeholder={placeholderText}
      onChange={event => {
        const currentValue = event.currentTarget.value
        if (currentValue.length > 5) return filterText(currentValue)
      }}
    />
  )
}

SearchBar.propTypes = {
  filterText: PropType.func,
  placeholderText: PropType.string
}

export default SearchBar
