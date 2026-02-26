import styled, { css } from "styled-components";

interface NavItemProps {
    $active?: boolean;
    $logout?: boolean;
}

export const SidebarContainer = styled.aside`
    width: 257px;
    min-height: 100vh;
    background: #fff;
    display:flex;
    flex-direction: column;
    padding: 32px;
    box-shadow: 1px 0 8px rgba(0,0,0,0.6);
    flex-shrink: 0;
    position: sticky;
    top: 0;
    overflow-y: auto;
`;

export const Logoimage = styled.img`
    width: 123px;
    height: 28.287px;
    display: block;
    margin: 0 auto 32px auto;
`;

export const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`;

export const NavItem = styled.div<NavItemProps>`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 16px;
    border-radius: 10px;
    
    cursor: pointer;
    
    transition: background 0.15s ease;
    
    ${({$active}) =>
        $active &&
        css`
            border: 2px solid #D0D5DD;
            background: #eef2ff;
        `}
    
    ${({$logout}) =>
        $logout &&
        css `
            margin-top: 16px;
            span, svg {
                color: #F04438;
            }

            &:hover {
                background: #fff5f5;
            }
        `}

    &:hover {
        background: #f7f8fc;
    }

`;

export const NavIcon = styled.div`
    display: flex;
    align-items: center;
    color: #667085;
    flex-shrink: 0;

    svg {
        font-size: 1.3rem;
    }
`;

export const NavLabel = styled.span`
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
`;