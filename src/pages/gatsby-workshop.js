import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import SlideOne from '../components/slides/gatsby-workshop/slideOne';
import SlideTwo from '../components/slides/gatsby-workshop/slideTwo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideThree from '../components/slides/gatsby-workshop/slideThree';
import SlideFour from '../components/slides/gatsby-workshop/slideFour';
import SlideFive from '../components/slides/gatsby-workshop/slideFive';
import SlideSix from '../components/slides/gatsby-workshop/slideSix';

const SlideDeck = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #073642;
  color: rgb(212, 212, 212);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlide = styled.div`
  height: 100%; 
  width: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const GatsbyWorkshop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <SlideDeck>
      <Slider {...settings} style={{ height: `80vh`, width: `80vw`, display: `flex`, justifyContent: `center`, alignItems: `center` }} arrows={true}>
        {[
          <SlideOne />, 
          <SlideTwo />, 
          <SlideThree />, 
          <SlideFour />,
          <SlideFive />,
          <SlideSix />
        ].map((slide, i) => {
          return <StyledSlide>{slide}</StyledSlide>;
        })}
      </Slider>
    </SlideDeck>
  );
}

export default GatsbyWorkshop;
