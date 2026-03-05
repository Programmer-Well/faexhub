import { AniversarioCard, FriendAvatarImage, FriendInfo, FriendItem, FriendsCard, RightPanel, SectionTitle, SendGiftButton } from "./RightPanel.styles";

const friends = [
  { name: "Tiago Rocha", email: "tiagorocha@gmail.com", avatar: "/rosto_01.png" },
  { name: "Larissa Alves", email: "larissaalves@gmail.com", avatar: "/rosto_02.png" },
  { name: "Andreza Soares", email: "andrezasoares@gmail.com", avatar: "/rosto_03.png" },
  { name: "Julia Fernanda", email: "juliafernanda@gmail.com", avatar: "/rosto_04.png" },
  { name: "Marcela Silva", email: "marcelasilva@gmail.com", avatar: "/rosto_05.png" },
];

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RightPanels() {
    return (
         <RightPanel>
            <SectionTitle>Amigos</SectionTitle>

            <FriendsCard>
                {friends.map((friend) => (
                    <FriendItem key={friend.email}>
                        <FriendAvatarImage src={friend.avatar} alt={friend.name} />
                        <FriendInfo>
                            <strong>{friend.name}</strong>
                            <span>{friend.email}</span>
                        </FriendInfo>
                    </FriendItem>
                ))}
            </FriendsCard>

            <AniversarioCard>
                <img src="/Aniversario.png" alt="" />
                <h2>Aniversariante do mês</h2>
                <p><strong>Marcela Silva</strong> está fazendo aniversario hoje, envie um presente para ela!</p>
                <hr />
                <SendGiftButton>
                    Enviar presente <ArrowForwardIosIcon />
                </SendGiftButton>
            </AniversarioCard>

        </RightPanel>
    )
}