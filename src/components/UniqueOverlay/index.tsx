import { useTransform } from 'framer-motion';
import useWrapperScroll from '../../hooks/useWrapperScroll';
import { Container, Header, Logo, Footer, Burger } from './styles';

export default function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>
      <Footer style={{ opacity }}>
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
