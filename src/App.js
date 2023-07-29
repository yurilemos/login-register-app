import "./App.css";
import { Router } from "./router/router";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
