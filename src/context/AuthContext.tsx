import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { api, type CadastroPayload, type Usuario } from '../services/api';
import { getToken, setToken, removeToken } from '../utils/cookies';

interface AuthContextValue {
  user: Usuario | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  cadastro: (payload: CadastroPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Ao montar, verifica se há token salvo e busca dados do usuário
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    api
      .getMe()
      .then(userData => setUser(userData))
      .catch(() => removeToken())
      .finally(() => setIsLoading(false));
  }, []);

  async function login(email: string, senha: string) {
    const { accessToken } = await api.login({ email, senha });
    console.log(accessToken);
    setToken(accessToken);
    const userData = await api.getMe();
    setUser(userData);
    navigate('/');
  }

  async function cadastro(payload: CadastroPayload) {
    const { accessToken } = await api.cadastro(payload);
    setToken(accessToken);
    const userData = await api.getMe();
    setUser(userData);
    navigate('/');
  }

  function logout() {
    removeToken();
    setUser(null);
    navigate('/login');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        cadastro,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return ctx;
}
