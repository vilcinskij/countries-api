import './MaxWidth.scss'
import React from 'react'

const MaxWidth = (props) => {
  return (
    <div className='max-width'>{props.children}</div>
  )
}

export default MaxWidth