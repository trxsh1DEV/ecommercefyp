import { useState } from 'react';
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Link,
  Error,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';

export const Register = () => {
  return (
    <Container>
      <Wrapper width="40%">
        <Title>CREATE AN ACCOUNT</Title>
        <Form column="row">
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(isFetching, error);
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Wrapper width="25%">
        <Title>SIGN IN</Title>
        <Form direction="column">
          <Input
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>O-ou... Algo deu errado</Error>}
          <Link>I forgot my password</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
