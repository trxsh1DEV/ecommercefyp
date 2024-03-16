import styled from 'styled-components';
import { mobile, theme } from '../../styles/theme';
import { Rating, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 70rem;
  min-width: 35rem;
  height: fit-content;
  object-fit: cover;
  ${mobile({
    height: '50rem',
    width: '100%',
    'object-fit': 'contain',
  })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  width: 100%;
  margin-bottom: 2rem;
  ${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
  font-weight: 200;
  font-size:${theme.fonts.sizes.huge};
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 40px;
  color: ${theme.colors.lilas};
  margin-bottom: 0.5rem;
`;

export const PriceFull = styled.div`
  font-weight: 200;
  letter-spacing: 1.5px;
  font-size: 1.8rem;
  margin: 2rem 0 0rem 0;
  text-decoration: line-through;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 80%; */
  margin-top: 1.5rem;
`;

export const SpanCustom = styled.span`
  font-size: ${theme.fonts.sizes.small};
  font-family: ${theme.fonts.family.secondary};
`;

export const FreteCalculate = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  font-family: ${theme.fonts.family.secondary};
`;

export const StyledRating = styled(Rating)({
  '& .MuiRating-icon': {
    color: `${theme.colors.lilas}`,
  },
  '& .MuiRating-iconHover': {
    color: `${theme.colors.lilas}`,
  },
  '& .MuiSvgIcon-fontSizeInherit': {
    width: '3rem',
    height: '3rem',
  },
});

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  /* width: 50%; */
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0;
  ${mobile({ width: '100%' })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  /* border: 1px solid ${theme.colors.lilas}; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  font-family: ${theme.fonts.family.secondary};
  padding: 15px;
  border: 2px solid ${theme.colors.primaryPurple};
  /* margin-left: 2rem; */
  background-color: #444;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 300ms ease-in-out;


  &:hover{
      opacity: 0.8;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  text-align: center;
`;

export const TextFieldCustom = styled(TextField)({
  '& .MuiInputBase-input': {
    // backgroundColor: '#555',
    fontSize: '2rem',
    color: '#fff',
    borderRadius: '6px',
  },
  '& label.Mui-focused': {
    color: '#fff',
    fontSize: '2rem',
  },
  '& .MuiFormLabel-root': {
    fontSize: '1.8rem',
    color: '#fff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
  },
});

export const ContainerCEP = styled.aside`
  /* background-color: red; */
`;

export const NavLinkCustom = styled(NavLink)`
  color: ${theme.colors.lightPurple};
`;

export const SectionsProducts = styled.section`
  font-family: ${theme.fonts.family.secondary};
  text-transform: uppercase;
  font-size: ${theme.fonts.sizes.large};
  font-weight: 700;
  color: ${theme.colors.darkColorLight}
`;
