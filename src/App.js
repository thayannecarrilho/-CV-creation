import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulário/Formulario";
import { LoadingContainer } from './styles/styles'; 

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <img src="/Logo.png" alt="loading" />
    </LoadingContainer>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen /> 
      ) : (
        <Formulario /> 
      )}
    </div>
  );
};

export default App;
