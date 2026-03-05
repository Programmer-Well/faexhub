import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Configuracao from "./components/Configuracao/Configuracao";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Friends from "./components/Friends/Friends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/amigos" element={<Friends />} />
          <Route path="/configuracao" element={<Configuracao />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
