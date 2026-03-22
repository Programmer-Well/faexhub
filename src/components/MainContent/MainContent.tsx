import { Outlet } from 'react-router-dom';

import {
  EditProfileButton,
  Logoimage,
  MainContent,
  ProfileAvatarWrapper,
  ProfileBanner,
  ProfileCard,
  ProfileInfoRow,
  ProfileTexts,
} from './MainContent.styles';
import { useAuth } from '../../context/AuthContext';

export default function MainContents() {
  const { user } = useAuth();
  const usuario = user?.usuario;

  return (
    <MainContent>
      <ProfileCard>
        <ProfileBanner>
          <Logoimage src='./logo-white.png' alt='Logo Faex Hub' />
        </ProfileBanner>

        <ProfileInfoRow>
          <ProfileAvatarWrapper>
            <img src={usuario?.foto} alt={usuario?.nome} />
          </ProfileAvatarWrapper>

          <ProfileTexts>
            <h2>{usuario?.nome}</h2>
            <span>{usuario?.email}</span>
          </ProfileTexts>

          <EditProfileButton>Editar Perfil</EditProfileButton>
        </ProfileInfoRow>
      </ProfileCard>

      <Outlet />
    </MainContent>
  );
}
