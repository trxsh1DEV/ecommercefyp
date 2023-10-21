import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Link,
} from './styles';

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
  return (
    <Container>
      <Wrapper width="25%">
        <Title>SIGN IN</Title>
        <Form direction="column">
          <Input placeholder="Type your e-mail" />
          <Input placeholder="Type your password" />
          <Button>LOGIN</Button>
          <Link>I forgot my password</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
