import React from 'react';
import {
  Menu,
  SubmenuItem,
  SubmenuList,
  MenuItem as StyledMenuItem,
  SubMenu,
} from './styles';

const OptionsShortcuts: React.FC = () => {
  return (
    <Menu>
      <StyledMenuItem>
        PC Montado
        <SubMenu>
          <SubmenuList>
            <SubmenuItem>Opção 1</SubmenuItem>
            <SubmenuItem>Opção 2</SubmenuItem>
            <SubmenuItem>Opção 3</SubmenuItem>
          </SubmenuList>
        </SubMenu>
      </StyledMenuItem>
      <StyledMenuItem>
        Desce para o Play
        <SubMenu>
          <SubmenuList>
            <SubmenuItem>Opção 4</SubmenuItem>
            <SubmenuItem>Opção 5</SubmenuItem>
            <SubmenuItem>Opção 6</SubmenuItem>
          </SubmenuList>
        </SubMenu>
      </StyledMenuItem>
      <StyledMenuItem>
        Corporativo
        <SubMenu>
          <SubmenuList>
            <SubmenuItem>Opção 4</SubmenuItem>
            <SubmenuItem>Opção 5</SubmenuItem>
            <SubmenuItem>Opção 6</SubmenuItem>
          </SubmenuList>
        </SubMenu>
      </StyledMenuItem>
      <StyledMenuItem>
        Home Office
        <SubMenu>
          <SubmenuList>
            <SubmenuItem>Opção 4</SubmenuItem>
            <SubmenuItem>Opção 5</SubmenuItem>
            <SubmenuItem>Opção 6</SubmenuItem>
          </SubmenuList>
        </SubMenu>
      </StyledMenuItem>
      <StyledMenuItem>
        Só hoje!
        <SubMenu>
          <SubmenuList>
            <SubmenuItem>Opção 4</SubmenuItem>
            <SubmenuItem>Opção 5</SubmenuItem>
            <SubmenuItem>Opção 6</SubmenuItem>
          </SubmenuList>
        </SubMenu>
      </StyledMenuItem>
    </Menu>
  );
};

export default OptionsShortcuts;
