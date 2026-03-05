import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import MainContents from '../MainContent/MainContent';
import {
  ContentWrapper,
  DashboardContainer,
  HamburgerButton,
  MobileHeader,
  Overlay,
} from '../MainContent/MainContent.styles';
import RightPanels from '../RightPanel/RightPanel';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <DashboardContainer>
      <MobileHeader>
        <HamburgerButton
          onClick={() => setIsSidebarOpen(true)}
          aria-label='Abrir menu'
        >
          <MenuRoundedIcon />
        </HamburgerButton>
        <img src='./logo-faex-hub.png' alt='Logo Faex Hub' />
      </MobileHeader>

      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <ContentWrapper>
        <MainContents />
        <RightPanels />
      </ContentWrapper>
    </DashboardContainer>
  );
}
