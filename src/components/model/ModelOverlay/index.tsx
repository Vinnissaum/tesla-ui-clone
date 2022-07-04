import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function ModelOverlay({ children }: Props) {
  return <Container>{children}</Container>;
}
