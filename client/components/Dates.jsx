import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Container = styled.div`
  border: 1px solid #D2D2D2;
  font-size: 16px;
  font-weight: 400;
  margin-top: 2px;
  padding: 10px;

  > * {
    display: inline;
  }
`;

const Checkout = styled.div`
  float: right;
  padding-right: 60px;
`;

const Dates = () => (
  <Wrapper>
    Dates
    <Container>
      <div>
        Check-in
      </div>
      <Checkout>
        <FiArrowRight /> Checkout
      </Checkout>
    </Container>
  </Wrapper>
);

export default Dates;
