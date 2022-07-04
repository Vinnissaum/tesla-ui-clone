import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

const ModelsWrapper = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ModelsWrapper;
