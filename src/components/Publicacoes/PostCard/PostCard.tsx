import {
  PostActionButton,
  PostActionRow,
  PostAvatarImage,
  PostCard,
  PostInput,
  PostInputRow,
  PostPublishButton,
} from './PostCard.styles';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoIcon from '@mui/icons-material/Photo';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function PostCards() {
  const [postText, setPostText] = useState('');
  const { user } = useAuth();
  const usuario = user?.usuario;

  return (
    <PostCard>
      <PostInputRow>
        <PostAvatarImage src={usuario.foto} alt={usuario.nome} />
        <PostInput
          type='text'
          placeholder='Comece uma publicação'
          value={postText}
          onChange={e => setPostText(e.target.value)}
        />
        <PostPublishButton>Publicar</PostPublishButton>
      </PostInputRow>

      <PostActionRow>
        <PostActionButton>
          <VideoLibraryIcon /> Video
        </PostActionButton>
        <PostActionButton>
          <PhotoIcon /> Foto
        </PostActionButton>
      </PostActionRow>
    </PostCard>
  );
}
