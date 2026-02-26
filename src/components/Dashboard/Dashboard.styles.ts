import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #fff;
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 303px;
    column-gap: 69px;

    padding: 32px;
    flex: 1;
    align-items: start;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 24px;
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

export const RightPanel = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Logoimage = styled.img`
    width: 123px;
    height: 28.287px;
    display: block;
    margin: 0 auto 32px auto;
`;

export const ProfileCard = styled.div`
    background: #fff;
    border-radius: 22px;
    overflow: hidden;
`;

export const ProfileBanner = styled.div`
    height: 184px;
    border-radius: 22px;
    background: linear-gradient(94deg, #96ABFF 0%, #C9D2FF 95.91%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ProfileInfoRow = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px 16px;
    gap: 14px;
    position: relative;
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
`;

export const ProfileTexts = styled.div`
    flex: 1;
    padding-top: 6px;

    h2 {
        color: #101828;
        font-family: "Lexend Deca";
        font-size: 31px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: -0.71px;
    }

    span {
        color: #667085;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
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
`;

export const PostCard = styled.div`
    background: #FFF;
    border-radius: 20px;
    border: 2px solid #D0D5DD;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const PostInputRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PostAvatarImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0; /* Mantém o tamanho mesmo com pouco espaço */
`;

export const PostInput = styled.input`
    flex: 1;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    padding: 10px 14px;
    outline: none;
    
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    transition:
        border-color 1s ease,
        background 1s ease;
    &::placeholder {
        color: #a0aec0;
    }
    &:focus {
        border-color: #667eea;
        background: #fffç
    }
`;

export const PostPublishButton = styled.button`
    width: 106px;
    background: #101828;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;

    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;

    transition:
        border-color 1s ease,
        background 1s ease;
    &:hover {
        background: #0f1946;
    }
`;

export const PostActionRow = styled.div`
    display: flex;
    gap: 16px;
`;

export const PostActionButton = styled.button`
    background: transparent;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #101828;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;

    svg {
        font-size: 1rem;
    }

    transition:
        border-color 1s ease,
        background 1s ease;
    &:hover {
        background: #f4f5f9;
    }
`;

export const SectionTitle = styled.h3`
    color: #101828;
    font-family: "Lexend Deca";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -0.71px;
`;

export const ActivityCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px;

    align-self: stretch;

    border-radius: 20px;
    border: 2px solid #D0D5DD;
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
        font-family: "Lexend Deca";
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
    height: 400px;

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
`;

export const ActivityCardFooter = styled.div`
    width: 100%;
    padding: 0 16px 16px 16px;
`;

export const ActivityCardButtonLike = styled.button `
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

export const FriendsCard = styled.div`
    border-radius: 20px;
    border: 2px solid #D0D5DD;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
`;

export const FriendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 11px 14px;
    cursor: pointer;
    
    transition: background 1s ease;
    &:not(:last-child) {
        border-bottom: 1px solid #D0D5DD;
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