import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard";
import { CryptoProvider } from "./context/CryptoContext";
import "./App.css"; // Includes Tailwind CSS directives

// App is parent component
function App() {
  return (
    <Provider store={store}>
      <CryptoProvider>
        <div className="min-h-screen bg-gray-100">
          <Dashboard />
        </div>
      </CryptoProvider>
    </Provider>
  );
}

export default App;
