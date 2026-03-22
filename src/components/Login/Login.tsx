import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LoginContainer,
  FloatingAvatars,
  FloatingAvatar,
  LoginCard,
  Logo,
  Divider,
  Title,
  LoginButton,
  CadastrarButton,
  ForgotPasswordLink,
} from './Login.styles';

import Avatar from '../Avatar/Avatar';

import {
  FieldGroup,
  FieldLabel,
  StyledInput,
  InputWithAdornment,
  AdornmentButton,
} from '../Cadastro/Cadastro.styles';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

interface AvatarData {
  src: string;
  alt: string;
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: string;
  hideOnMobile?: boolean;
}


const avatars: AvatarData[] = [
  {
    src: '/rosto_01.png',
    alt: 'Usuário 1',
    color: '#f8c8d4',
    size: 120, 
    top: '18%', 
    left: '6%', 
    delay: '0s',
  },
  {
    src: '/rosto_02.png',
    alt: 'Usuário 2',
    color: '#f4a6a0',
    size: 85,
    top: '6%',
    right: '28%',
    delay: '1s', 
  },
  {
    src: '/rosto_03.png',
    alt: 'Usuário 3',
    color: '#f5b0a8',
    size: 115,
    top: '8%',
    right: '4%',
    delay: '2s',
  },
  {
    src: '/rosto_04.png',
    alt: 'Usuário 4',
    color: '#a8dbc5',
    size: 55,
    top: '42%',
    right: '16%',
    delay: '3s',
  },
  {
    src: '/rosto_05.png',
    alt: 'Usuário 5',
    color: '#c8b8e8',
    size: 80,
    top: '45%',
    left: '16%',
    delay: '1.5s',
    hideOnMobile: true, 
  },
  {
    src: '/rosto_06.png',
    alt: 'Usuário 6',
    color: '#b8dfc8',
    size: 105,
    bottom: '10%', 
    left: '5%',
    delay: '2.5s',
  },
  {
    src: '/rosto_07.png',
    alt: 'Usuário 7',
    color: '#f0cfa0',
    size: 130,
    bottom: '8%',
    right: '3%',
    delay: '0.5s',
    hideOnMobile: true,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      await login(email, senha);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao fazer login');
    } finally {
      setCarregando(false);
    }
  };

  const handleEsqueceuSenha = () => {
    console.log('Esqueci minha senha');
  };


  return (
    <LoginContainer>
      <FloatingAvatars>      
        {avatars.map((avatar, index) => (
          <FloatingAvatar
            key={index}          
            $delay={avatar.delay}
            $top={avatar.top}
            $bottom={avatar.bottom}
            $left={avatar.left}
            $right={avatar.right}
            $hideOnMobile={avatar.hideOnMobile}
          >  
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              color={avatar.color}
              size={avatar.size}
            />
          </FloatingAvatar>
        ))}
      </FloatingAvatars>
     
      <LoginCard>      
        <Logo src='/logo-faex-hub.png' alt='Logo FAEX Hub' />
        <Divider />

        <Title>Entre na sua Conta</Title>

        <form onSubmit={handleSubmit}>          
          <FieldGroup>
            <FieldLabel>Email</FieldLabel>
            <StyledInput
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Digite seu e-mail'
              required
            />
          </FieldGroup>
       
          <FieldGroup>
            <FieldLabel>Senha</FieldLabel>
            <InputWithAdornment>
              <StyledInput
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder='Digite sua senha'
                required
              />
              <AdornmentButton
                type='button'
                onClick={() => setMostrarSenha(!mostrarSenha)}
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {mostrarSenha ? <VisibilityOff /> : <Visibility />}
              </AdornmentButton>
            </InputWithAdornment>
          </FieldGroup>

          {erro && (
            <p
              style={{
                color: '#F04438',
                fontSize: '0.85rem',
                marginBottom: '8px',
              }}
            >
              {erro}
            </p>
          )}
       
          <LoginButton type='submit' disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </LoginButton>    
          <CadastrarButton type='button' onClick={() => navigate('/cadastro')}>
            Cadastrar-se
          </CadastrarButton>       
          <ForgotPasswordLink onClick={handleEsqueceuSenha}>
            Esqueceu seu senha?
          </ForgotPasswordLink>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
