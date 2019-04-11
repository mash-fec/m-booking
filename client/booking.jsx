import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FiFlag } from 'react-icons/fi';
import Price from './components/Price.jsx';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700');
  color: #484848;
  font-family: Montserrat, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: auto;
  width: 375px;
  text-align: center;
`;

const Button = styled.div`
  background-color: #FF5A5F;
  border-radius: 4px;
  display: block;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 800;
  height: 22px;
  margin: 15px auto;
  padding: 10px 22px;
  text-align: center;
  width: 278px;
`;

const Container = styled.div`
  border: 1px solid #D2D2D2;
  font-size: 12px;
  font-weight: 600;
  height: 355px;
  padding: 20px;
  margin: 10px;
  width: 375px;
`;

const Links = styled.a`
  color: #484848;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  :hover {
    color: 484848;
    text-decoration: underline;
  }
`;

const indent = {
  marginLeft: '45px'
};

const Booking = () => (
  <Wrapper>
    <Container>
      <Price />
      <Button>Book</Button>
      You won&#39;t be charged yet
    </Container>
    <div style={indent}>
      <FiFlag /> <Links href="#">Report this listing</Links>
    </div>
  </Wrapper>
);

ReactDOM.render(<Booking />, document.getElementById('booking'));
