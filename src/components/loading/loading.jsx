import React from 'react'
import loadingIcon from './Rolling-1s-200px.svg'

const loadingStyle = { maxWidth: '130px', margin: 'auto' }

const Loading = () => (
  <img alt='loading icon' style={loadingStyle} src={loadingIcon} />
)

export default Loading
