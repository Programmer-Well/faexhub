import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #fff;
`;

export const MobileHeader = styled.header`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;

    img {
      width: 100px;
      height: auto;
    }
  }
`;

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  color: #667085;
  border-radius: 8px;
  transition: background 0.15s ease;

  &:hover {
    background: #f7f8fc;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 303px;
  column-gap: 69px;

  padding: 32px;
  flex: 1;
  align-items: start;

  @media (max-width: 1280px) {
    column-gap: 32px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 24px;
    padding-top: calc(32px + 56px);
  }

  @media (max-width: 768px) {
    padding: 16px;
    padding-top: calc(16px + 56px);
  }
`;

export const MainContent = styled.main`
  max-width: 707px;
  width: 100%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Logoimage = styled.img`
  width: 123px;
  height: 28.287px;
  display: block;
  margin: 0 auto 32px auto;

  @media (max-width: 768px) {
    width: 90px;
    margin-bottom: 16px;
  }
`;

export const ProfileCard = styled.div`
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
`;

export const ProfileBanner = styled.div`
  height: 184px;
  border-radius: 22px;
  background: linear-gradient(94deg, #96abff 0%, #c9d2ff 95.91%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 90px;
  }
`;

export const ProfileInfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 16px;
  gap: 14px;
  position: relative;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 0 12px 12px;
    gap: 8px;
  }
`;

export const ProfileAvatarWrapper = styled.div`
  margin-top: -32px;
  flex-shrink: 0;
  z-index: 1;

  img {
    width: 122px;
    height: 122px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    margin-top: -24px;

    img {
      width: 88px;
      height: 88px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 72px;
      height: 72px;
    }
  }
`;

export const ProfileTexts = styled.div`
  flex: 1;
  padding-top: 6px;
  min-width: 0;

  h2 {
    color: #101828;
    font-family: 'Lexend Deca';
    font-size: 31px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.71px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 22px;
      line-height: 28px;
    }

    span {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const EditProfileButton = styled.button`
  background: transparent;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 500px;
  color: #4a5568;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  font-family: inherit;
  align-self: flex-start;
  margin-top: 8px;

  transition:
    background 1s ease,
    border-color 1s ease;

  &:hover {
    background: #f7f8fc;
    border-color: #b0b8c9;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin-top: 0;
  }
`;
