import { getToken } from '../utils/cookies';

const BASE_URL = 'http://localhost:3000';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const resp = await fetch(`${BASE_URL}${path}`, { ...options, headers });

  if (!resp.ok) {
    const error = await resp
      .json()
      .catch(() => ({ message: 'Erro desconhecido' }));
    throw new Error(error.message || `Erro ${resp.status}`);
  }

  return resp.json();
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface CadastroPayload {
  nome: string;
  sexo: string;
  dataNascimento: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  cep: string;
  bairro: string;
  numero: string;
  cidade: string;
  uf: string;
  endereco: string;
  complemento: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface Usuario {
  id: string | number;
  nome: string;
  email: string;
  foto?: string;
  [key: string]: unknown;
}

export interface AutorPublicacao {
  id: string | number;
  nome: string;
  foto?: string;
}

export interface Publicacao {
  id: string | number;
  tipo: 'TEXTO' | 'IMAGEM' | 'VIDEO';
  conteudo: string;
  visibilidade: 'PUBLICO' | 'AMIGOS';
  ativo: boolean;
  createdAt: string;
  autor: AutorPublicacao;
  _count?: {
    curtidas: number;
    comentarios: number;
  };
}

export interface AmizadeUsuario {
  id: string | number;
  nome: string;
  email: string;
  foto?: string;
}

export interface Amizade {
  id: string | number;
  status: 'PENDENTE' | 'ACEITA' | 'REJEITADA';
  solicitante: AmizadeUsuario;
  receptor: AmizadeUsuario;
}

export interface PaginatedResponse<T> {
  dados?: T[];
  data?: T[];
  total: number;
}

export const api = {
  login: (payload: LoginPayload) =>
    request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  cadastro: (payload: CadastroPayload) =>
    request<AuthResponse>('/auth/cadastro', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getMe: () => request<Usuario>('/auth/me'),

  getPublicacoes: (pagina = 1, limite = 20) =>
    request<PaginatedResponse<Publicacao>>(
      `/publicacoes?ativo=true&pagina=${pagina}&limite=${limite}`,
    ),

  curtirPublicacao: (id: string | number) =>
    request<unknown>(`/publicacoes/${id}/curtidas`, { method: 'POST' }),

  getAmizades: (pagina = 1, limite = 50) =>
    request<PaginatedResponse<Amizade>>(
      `/amizades?pagina=${pagina}&limite=${limite}`,
    ),

  getAmizadesEnviadas: () =>
    request<PaginatedResponse<Amizade> | Amizade[]>('/amizades/enviadas'),

  getUsuarios: (pagina = 1, limite = 50) =>
    request<PaginatedResponse<Usuario> | Usuario[]>(
      `/usuarios?pagina=${pagina}&limite=${limite}`,
    ),

  buscarUsuarios: (pagina = 1, limite = 50) =>
    request<PaginatedResponse<Usuario> | Usuario[]>(
      `/usuarios/buscar/avancado?pagina=${pagina}&limite=${limite}`,
    ),

  enviarSolicitacao: (receptorId: string | number) =>
    request<Amizade>('/amizades', {
      method: 'POST',
      body: JSON.stringify({ receptorId }),
    }),
};
