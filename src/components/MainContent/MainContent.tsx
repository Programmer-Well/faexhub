import { Outlet } from "react-router-dom";

import {
    EditProfileButton,
    Logoimage, 
    MainContent,
    ProfileAvatarWrapper, 
    ProfileBanner, 
    ProfileCard, 
    ProfileInfoRow, 
    ProfileTexts,
} from "./MainContent.styles";


const currentUser = {
  name: "Paulo Souza",
  email: "paulo.csouzas@outlook.com",
  avatar: "/perfil.jpg",
};

export default function MainContents() {
    return (
        <MainContent>
            <ProfileCard>

                <ProfileBanner>
                    <Logoimage src="./logo-white.png" alt="Logo Faex Hub" />
                </ProfileBanner>

                <ProfileInfoRow>
                    <ProfileAvatarWrapper>
                        <img src={currentUser.avatar} alt={currentUser.name} />
                    </ProfileAvatarWrapper>

                    <ProfileTexts>
                        <h2>{currentUser.name}</h2>
                        <span>{currentUser.email}</span>
                    </ProfileTexts>

                    <EditProfileButton>Editar Perfil</EditProfileButton>
                </ProfileInfoRow>

            </ProfileCard>

            <Outlet />
        </MainContent>
    )
}