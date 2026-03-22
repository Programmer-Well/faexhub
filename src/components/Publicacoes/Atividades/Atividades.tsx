import {
  ActivityCard,
  ActivityCardAvatarImage,
  ActivityCardBody,
  ActivityCardButtonLike,
  ActivityCardFooter,
  ActivityCardHeader,
  ActivityCardUserInfo,
  SectionTitle,
} from './Atividades.styles';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import PublicIcon from '@mui/icons-material/Public';
import GroupIcon from '@mui/icons-material/Group';

import { api, type Publicacao } from '../../../services/api';
import { useEffect, useState } from 'react';

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('pt-BR', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Atividades() {
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState<Set<string | number>>(new Set());

  useEffect(() => {
    api
      .getPublicacoes()
      .then(resp => {
        const items = resp.dados ?? resp.data ?? [];
        setPublicacoes(items);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function handleLike(id: string | number) {
    api.curtirPublicacao(id).catch(console.error);
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  if (loading) {
    return (
      <>
        <SectionTitle>Atividades</SectionTitle>
        <p style={{ color: '#667085', fontFamily: 'Inter', fontSize: '14px' }}>
          Carregando publicações...
        </p>
      </>
    );
  }

  return (
    <>
      <SectionTitle>Atividades</SectionTitle>

      {publicacoes.length === 0 && (
        <p style={{ color: '#667085', fontFamily: 'Inter', fontSize: '14px' }}>
          Carregando publicações...
        </p>
      )}

      {publicacoes.map(publicacao => (
        <ActivityCard key={publicacao.id}>
          <ActivityCardHeader>
            <ActivityCardAvatarImage
              src={publicacao.autor.foto}
              alt={publicacao.autor.nome}
            />
            <ActivityCardUserInfo>
              <strong>{publicacao.autor.nome}</strong>
              <span>
                {formatDate(publicacao.createdAt)}
                &middot;
                {publicacao.visibilidade === 'PUBLICO' ? (
                  <PublicIcon />
                ) : (
                  <GroupIcon />
                )}
              </span>
            </ActivityCardUserInfo>
          </ActivityCardHeader>
          <ActivityCardBody>
            {/* TEXTO */}

            {publicacao.tipo === 'TEXTO' && publicacao.conteudo && (
              <div
                style={{
                  padding: '0 16px',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  lineHeight: '24px',
                }}
              >
                {publicacao.conteudo}
              </div>
            )}

            {/* IMAGEM */}

            {publicacao.tipo === 'IMAGEM' && (
              <ActivityCardBody>
                <div
                  style={{
                    padding: '0 16px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    lineHeight: '24px',
                  }}
                >
                  {publicacao.conteudo}
                </div>
                <img src={publicacao.midia} alt='Publicação' />
              </ActivityCardBody>
            )}

            {/* VIDEO */}

            {publicacao.tipo === 'VIDEO' && (
              <>
                <div
                  style={{
                    padding: '0 16px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    lineHeight: '24px',
                  }}
                >
                  {publicacao.conteudo}
                </div>
                <iframe
                  width='100%'
                  height='315'
                  src={publicacao.midia}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerpolicy='strict-origin-when-cross-origin'
                  allowfullscreen
                ></iframe>
              </>
            )}
          </ActivityCardBody>
          <ActivityCardFooter>
            <ActivityCardButtonLike onClick={() => handleLike(publicacao.id)}>
              {likedPosts.has(publicacao.id) ? (
                <FavoriteIcon style={{ color: '#e53e3e' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
              Curtir
              {(publicacao._count?.curtidas ?? 0) > 0 &&
                `(${publicacao._count!.curtidas})`}
            </ActivityCardButtonLike>
          </ActivityCardFooter>
        </ActivityCard>
      ))}
    </>
  );
}
