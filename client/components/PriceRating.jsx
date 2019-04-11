import React from 'react';
import faker from 'faker';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const Wrapper = styled.div`
  text-align: left;
`;

const Currency = styled.span`
  font-size: 22px;
  font-weight: 800;
`;

const Reviews = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const Rule = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #D2D2D2;
`;

const price = () => faker.random.number({
  min: 50,
  max: 1500
}).toLocaleString();

const PriceRating = () => (
  <Wrapper>
    <Currency>${price()}</Currency> per night
    <br />
    <StarRatings
      rating={faker.random.number({ min: 3, max: 5 })}
      starDimension="10px"
      starSpacing="0"
      starRatedColor="#008080"
      starEmptyColor="#B8B8B8"
    /> <Reviews>{faker.random.number({ min: 1, max: 320 })}</Reviews>
    <Rule />
  </Wrapper>
);

export default PriceRating;
