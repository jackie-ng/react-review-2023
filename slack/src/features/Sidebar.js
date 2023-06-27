import { FiberManualRecord } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Create } from '@mui/icons-material';

function Sidebar() {
  return (
    <SidebarContainer>
      {/* Header */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>Main Page</h2>
          <h3>
            <FiberManualRecord/>
            Trang Nguyen
          </h3>
        </SidebarInfo>
        <Create/>
      </SidebarHeader>
      {/* Option Component */}
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`

const SidebarHeader = styled.div`

`

const SidebarInfo = styled.div`

`
