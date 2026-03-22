import { useLocation, useNavigate } from 'react-router-dom';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoudedIcon from '@mui/icons-material/PeopleRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import {
  Logoimage,
  NavIcon,
  NavItem,
  NavLabel,
  NavList,
  SidebarCloseButton,
  SidebarContainer,
} from './Sidebar.styles';
import { useAuth } from '../../context/AuthContext';

// Lista de objeto menu
const navItems = [
  { icon: <HomeRoundedIcon />, label: 'Início', path: '/' },
  { icon: <PeopleRoudedIcon />, label: 'Amigos', path: '/amigos' },
  { icon: <CardGiftcardIcon />, label: 'Presentes', path: '/presentes' },
  {
    icon: <SettingsRoundedIcon />,
    label: 'Configuração',
    path: '/configuracao',
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarCloseButton onClick={onClose} aria-label='Fechar menu'>
        <CloseRoundedIcon />
      </SidebarCloseButton>

      <Logoimage src='./logo-faex-hub.png' alt='Logo Faex Hub' />

      <NavList>
        {navItems.map(item => (
          <NavItem
            key={item.path}
            $active={location.pathname === item.path}
            onClick={() => handleNavigate(item.path)}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItem>
        ))}
        <NavItem $logout onClick={logout}>
          <NavIcon>
            <LogoutRoundedIcon />
          </NavIcon>
          <NavLabel>Sair</NavLabel>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
}
