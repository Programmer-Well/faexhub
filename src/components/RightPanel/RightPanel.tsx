import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { api, type Amizade, type AmizadeUsuario } from '../../services/api';
import {
  AniversarioCard,
  FriendAvatarImage,
  FriendInfo,
  FriendItem,
  FriendsCard,
  RightPanel,
  SectionTitle,
  SendGiftButton,
} from './RightPanel.styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function RightPanels() {
  const { user } = useAuth();
  const usuario = user?.usuario;
  const [friends, setFriends] = useState<AmizadeUsuario[]>([]);

  useEffect(() => {
    if (!user) return;

    api
      .getAmizades()
      .then(resp => {
        const items = resp.dados ?? resp.data ?? [];
        const amigos = items.map((amigo: Amizade) => {
          const isSolicitante =
            Number(amigo.solicitante.id) === Number(usuario?.id);
          return isSolicitante ? amigo.receptor : amigo.solicitante;
        });
        setFriends(amigos);
      })
      .catch(console.error);
  }, [user]);

  return (
    <RightPanel>
      <SectionTitle>Amigos</SectionTitle>

      <FriendsCard>
        {friends.length === 0 ? (
          <FriendItem>
            <FriendInfo>
              <span>Você não tem nenhum amigo</span>
            </FriendInfo>
          </FriendItem>
        ) : (
          friends.map(friend => (
            <FriendItem key={friend.email}>
              <FriendAvatarImage src={friend.foto} alt={friend.nome} />
              <FriendInfo>
                <strong>{friend.nome}</strong>
                <span>{friend.email}</span>
              </FriendInfo>
            </FriendItem>
          ))
        )}
      </FriendsCard>

      <AniversarioCard>
        <img src='/Aniversario.png' alt='' />
        <h2>Aniversariante do mês</h2>
        <p>
          <strong>Marcela Silva</strong> está fazendo aniversario hoje, envie um
          presente para ela!
        </p>
        <hr />
        <SendGiftButton>
          Enviar presente <ArrowForwardIosIcon />
        </SendGiftButton>
      </AniversarioCard>
    </RightPanel>
  );
}
