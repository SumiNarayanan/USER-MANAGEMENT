
import { BrowserRouter, Router, Routes,Route } from 'react-router-dom';
import './App.css';
import UserManagementPage from './components/UserManangementPage';

function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
     <Routes>
     
      <Route path='/user' element={<UserManagementPage/>}/>
     </Routes>
     </BrowserRouter>  */}
     
      <UserManagementPage />
 
    

    </div>
  );
}

export default App;
