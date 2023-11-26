import styled from 'styled-components';

export const Info = styled.div`
  opacity: 0;
  /* width: calc(100% - 20px); */
  width: 100%;
  height: 280px;
  position: absolute;
  /* top: 10px; */
  /* left: 0; */
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-items: center;
  padding: 10px 0px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  visibility: hidden;
`;

export const Image = styled.img`
  height: 280px;
  max-width: 280px;
  z-index: 2;
  object-fit: cover;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
