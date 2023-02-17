import {Route, Router, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './components/login'
import Main from './components/main'
import Display from './components/display';
import Register from './components/register';
import User from './components/user'
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'
function App() {
  return (
    <div className="App">
      <>
      <Routes>
      <PrivateRoute component={Login} path="/" exact/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/User' element={<User/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;
