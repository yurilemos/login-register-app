import React from 'react';
import './styles.css';
import { useToast } from '../../contexts/toastProvider';

const ToastNotification = () => {  
  const { message, showToast } = useToast();

  return (
    <>
      {showToast && (
        <div className="toast-container">
          <div className="toast-content">
            <img src='images/alert-icon.svg' alt="" className="toast-icon" />
            <div className="toast-message">{message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastNotification;
