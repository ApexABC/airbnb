import React, { memo } from 'react'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="filter">filter</div>
      <div className="room">room</div>
      <div className="pagination">pagination</div>
    </EntireWrapper>
  )
})

export default Entire
