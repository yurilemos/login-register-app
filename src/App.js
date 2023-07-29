import "./App.css";
import { Router } from "./router/router";
import { AuthProvider } from "./contexts/auth";
import ToastNotification from "./components/toastNotification";
import { ToastProvider } from "./contexts/toastProvider";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <ToastNotification />
        <Router />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
