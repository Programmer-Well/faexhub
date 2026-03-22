import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import Configuracao from './components/Configuracao/Configuracao';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Friends from './components/Friends/Friends';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>         
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />      
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/amigos' element={<Friends />} />
              <Route path='/configuracao' element={<Configuracao />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
