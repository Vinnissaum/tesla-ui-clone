import React from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelsSection = ({
  modelName,
  overlayNode,
  children,
  ...props
}: Props) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelsSection;
