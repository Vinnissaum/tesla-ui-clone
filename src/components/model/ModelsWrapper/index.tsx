import { useCallback, useRef, useState } from 'react';
import ModelsContext, { CarModel } from '../../../context/ModelsContext';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

const ModelsWrapper = ({ children }: Props) => {
  const wrapperRef = useRef(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((prevState) => [...prevState, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((prevState) =>
      prevState.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) =>
      registeredModels.find((model) => model.modelName === modelName) || null,
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
