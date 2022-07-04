import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../model';
import UniqueOverlay from '../UniqueOverlay';
import { Container } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map((modelName, key) => (
            <ModelSection
              key={key}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
          <UniqueOverlay />
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
