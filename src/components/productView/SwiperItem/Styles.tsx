import Slider from "react-slick";
import styled from "styled-components";

const Main = styled.div``;

const SwiperItem = styled.div`
  width: 740px;
  margin-right: 10px;
`;

const SwiperImg = styled.img`
  width: 100%;
  background: rgb(239, 239, 239);
  border-radius: 12px;
`;

const SwiperItemText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    & li {
      margin: 0;
    }
  }
`;

const ImageSlideButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 0px;
  bottom: 0px;
  margin: auto;
  cursor: pointer;
  z-index: 1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  Main,
  SwiperImg,
  SwiperItem,
  SwiperItemText,
  StyledSlider,
  ImageSlideButton,
};
