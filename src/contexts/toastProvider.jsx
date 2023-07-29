import React, { useState, useContext } from "react";

const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(false);  

  const showNotification = (message, duration=3000) => {
    setShowToast(true);
    setMessage(message);

    setTimeout(() => {
      setShowToast(false);
    }, duration); // Define o tempo de exibição do toast em milissegundos (neste exemplo, 3 segundos)
  };

  return (
    <ToastContext.Provider value={{ showToast, showNotification, message }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
