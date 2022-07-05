import styled from 'styled-components';
import CarImages from './CarImages';

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${CarImages.car3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url(${CarImages.car2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url(${CarImages.car1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background-image: url(${CarImages.car4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url(${CarImages.car5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background-image: url(${CarImages.car6});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background-image: url(${CarImages.car7});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;
