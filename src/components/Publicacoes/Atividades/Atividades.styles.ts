import styled from 'styled-components';

export const SectionTitle = styled.h3`
  color: #101828;
  font-family: 'Lexend Deca';
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.71px;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;

  align-self: stretch;

  border-radius: 20px;
  border: 2px solid #d0d5dd;
`;

export const ActivityCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 16px 0 16px;
  width: 100%;
`;

export const ActivityCardAvatarImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ActivityCardUserInfo = styled.div`
  flex: 1;

  strong {
    color: #101828;
    font-family: 'Lexend Deca';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 187.5% */
    letter-spacing: -0.71px;
  }

  span {
    display: flex;
    gap: 8px;
    align-items: center;

    color: #667085;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.5px;

    svg {
      font-size: 0.8rem;
    }
  }
`;

export const ActivityCardBody = styled.div`
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
  }
`;

export const ActivityCardFooter = styled.div`
  width: 100%;
  padding: 0 16px 16px 16px;
`;

export const ActivityCardButtonLike = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;

  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;

  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  svg {
    font-size: 1.3rem;
  }

  transition:
    background 1s ease,
    color 1s ease;
  &:hover {
    background: #fff5f5;
    color: #e53e3e;
  }
`;
