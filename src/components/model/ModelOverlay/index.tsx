import useWrapperScroll from '../../../hooks/useWrapperScroll';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function ModelOverlay({ children }: Props) {
  const { scrollY } = useWrapperScroll();
  return <Container>{children}</Container>;
}
