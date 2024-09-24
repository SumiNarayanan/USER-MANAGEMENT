
import { BrowserRouter, Router, Routes,Route } from 'react-router-dom';
import './App.css';
import UserManagementPage from './components/UserManangementPage';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="App">
     {/* <BrowserRouter>
     <Routes>
     
      <Route path='/user' element={<UserManagementPage/>}/>
     </Routes>
     </BrowserRouter>  */}
     {!isAuthenticated ?(
      <Login onLoginSuccess={handleLoginSuccess} />
    ) : (
      <UserManagementPage />
     )}
     
      {/* <UserManagementPage /> */}
 
    

    </div>
  );
}

export default App;
