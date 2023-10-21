import P from 'prop-types';
import * as Styled from './styles';

export const Home = ({
  children,
  colordark = 'true',
  as = 'h2',
  size = 'huge',
  uppercase = 'true',
}) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      colordark={colordark}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Home.propTypes = {
  children: P.node.isRequired,
  colordark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
