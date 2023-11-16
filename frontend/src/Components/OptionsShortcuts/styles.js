import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  color: aliceblue;
`;

export const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  /* border: 1px solid #ccc; */
  padding: 10px;
  transition: background-color 0.3s ease;
`;

export const SubMenu = styled.div`
opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  border-radius: 4px;
  overflow: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  ${MenuItem}:hover &{
    opacity: 1;
    visibility: visible;
    z-index: 3;
    filter: drop-shadow(10px 10px 30px #000000);
  }
`;

export const SubmenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: aliceblue;
`;

export const SubmenuItem = styled.li`
 padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.greenHack};
  }
`;
