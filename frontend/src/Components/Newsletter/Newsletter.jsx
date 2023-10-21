import {
  Container,
  Button,
  Desc,
  Input,
  InputContainer,
  Title,
} from './styles';
import { Send } from '@mui/icons-material';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
