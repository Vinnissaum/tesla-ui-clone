import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../model';
import { Container } from './styles';

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label='Model One'
                description='Order Online for Delivery'
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
