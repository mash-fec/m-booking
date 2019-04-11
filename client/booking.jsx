/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import faker from 'faker';
import styled from 'styled-components';
import { FiFlag } from 'react-icons/fi';
import PriceRating from './components/PriceRating.jsx';
import Dates from './components/Dates.jsx';
import Guests from './components/Guests.jsx';

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
  cursor: pointer;
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
    color: #484848;
    text-decoration: underline;
  }
`;

const indent = {
  marginLeft: '45px'
};

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      criteria: {}
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/totalReviews',
      method: 'GET',
      data: { id: faker.random.number({ min: 1, max: 100 }) },
      success: (reviewData) => {
        this.setState({
          reviews: reviewData.reviews,
          criteria: reviewData.criteria
        });
      },
      error: (err) => { console.log('get reviews error: ', err); }
    });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <PriceRating reviews={this.state.reviews.length} rating={this.state.criteria.totalRating} />
          <Dates />
          <Guests />
          <Button>Book</Button>
          You won&#39;t be charged yet
        </Container>
        <div style={indent}>
          <FiFlag /> <Links href="#">Report this listing</Links>
        </div>
      </Wrapper>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
