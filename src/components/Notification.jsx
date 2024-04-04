import React from 'react'

const Notification = ({ message, isSuccess }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={`message ${isSuccess ? 'message-success' : 'message-error'} `}>
        {message}
      </div>
    )
  }

export default Notification