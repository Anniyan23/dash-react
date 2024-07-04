import React from 'react'
import './SubHeader.css'

const SubHeader = () => {
  return (
    <div className='subhead'>
      <a href='http/new.index' className='subhead-text'><span>New</span></a>
      <a href='http/new.index' className='subhead-text'>Qualified</a>
      <a href='http/new.index' className='subhead-text'>On-Hold</a>
      <a href='http/new.index' className='subhead-text'>Rejected</a>

    </div>
  )
}

export default SubHeader
