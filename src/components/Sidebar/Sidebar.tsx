import { useLocation, useNavigate } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoudedIcon from "@mui/icons-material/PeopleRounded";
import CardGiftcardIcon  from "@mui/icons-material/CardGiftcardRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { 
    Logoimage, 
    NavIcon, 
    NavItem, 
    NavLabel, 
    NavList, 
    SidebarContainer
} from "./Sidebar.styles";

const navItems = [
    { icon: <HomeRoundedIcon />, label: "Início", path: "/dashboard" },
    { icon: <PeopleRoudedIcon />, label: "Amigos", path: "/amigos"},
    { icon: <CardGiftcardIcon />, label: "Presentes", path: "/presentes"},
    { icon: <SettingsRoundedIcon />, label: "Configuração", path: "/configuracao"},
] 

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <SidebarContainer>
            <Logoimage src="./logo-faex-hub.png" alt="Logo Faex Hub" />
            <NavList>
                {navItems.map((item) => (
                    <NavItem
                        key={item.path}
                        $active={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                    >
                        <NavIcon>{item.icon}</NavIcon>
                        <NavLabel>{item.label}</NavLabel>
                    </NavItem>
                ))}
                <NavItem $logout onClick={() => navigate("/login")}>
                    <NavIcon>
                        <LogoutRoundedIcon />
                    </NavIcon>
                    <NavLabel>
                        Sair
                    </NavLabel>
                </NavItem>
            </NavList>
        </SidebarContainer>
    )
}