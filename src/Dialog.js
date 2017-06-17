import React from 'react';

const Dialog = (props) => {
  const { message, close } = props;
  return (
    <div className='dialog-backdrop'>
      <div className='dialog-container'>
        <div className='dialog-header'>Message</div>
        <div className='dialog-body'>{ message }</div>
        <div className='dialog-footer'>
          <button className='btn' onClick={ close }>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
