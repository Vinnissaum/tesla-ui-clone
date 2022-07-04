import { Container, Header, Logo, Footer, Burger } from './styles';

export default function UniqueOverlay() {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>
      <Footer>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with ❤️</a>
          </li>
          <li>
            <a href="#">by Vinicius Braz</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
