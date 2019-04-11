import React from 'react';
import faker from 'faker';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 30px;
`;

const Container = styled.div`
  border: 1px solid #D2D2D2;
  font-size: 16px;
  font-weight: 400;
  margin-top: 2px;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
  }

  > * {
    display: inline;
  }
`;

const Arrow = styled.section`
  border: solid #484848;
  border-width: 0 2px 2px 0;
  display: inline-block;
  float: right;
  padding: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const numGuests = faker.random.number({ min: 1, max: 12 });

const Guests = () => (
  <Wrapper>
    Guests
    <Container>
      <div>
        { numGuests } { numGuests > 1 ? 'guests' : 'guest' }
      </div>
      <Arrow />
    </Container>
  </Wrapper>
);

export default Guests;
