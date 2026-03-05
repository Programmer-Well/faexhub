import styled from 'styled-components';

export const RightPanel = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

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

export const FriendsCard = styled.div`
  border-radius: 20px;
  border: 2px solid #d0d5dd;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

export const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 11px 14px;
  cursor: pointer;

  transition: background 1s ease;
  &:not(:last-child) {
    border-bottom: 1px solid #d0d5dd;
  }
  &:hover {
    background: #f7f8fc;
  }
`;

export const FriendAvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const FriendInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  strong {
    color: #101828;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }

  span {
    color: #667085;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.5px;
  }
`;

export const AniversarioCard = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 16px;

    border-radius: 20px;
    border: 2px solid  #D0D5DD;

    padding: 16px;

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: auto;
        border-radius: 12px;
    }

    h2 {
        color: #101828;
        font-family: "Lexend Deca";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: -0.71px;
    }

    p {
        strong {
            color:  #475467);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
        }

        color: #475467;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
`;

export const SendGiftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background: transparent;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;

  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;

  transition: background 1s ease;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(222, 190, 190, 0.8);
  }

  cursor: pointer;
`;
