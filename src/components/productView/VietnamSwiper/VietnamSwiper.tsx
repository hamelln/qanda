import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Styles";

const VietnamSwiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };

  return (
    <S.Main>
      <S.StyledSlider {...settings}>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-study-1-1.png"></S.SwiperImg>
          <S.SwiperItemText>콴다 문제집</S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-study-2.png"></S.SwiperImg>
          <S.SwiperItemText>콴다 센터</S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="	https://mathpresso.com/assets/images/product/product-study-3.png"></S.SwiperImg>
          <S.SwiperItemText>콴다 센터</S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-study-4.png"></S.SwiperImg>
          <S.SwiperItemText>콴다 센터</S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-study-5.png"></S.SwiperImg>
          <S.SwiperItemText>콴다 센터</S.SwiperItemText>
        </S.SwiperItem>
      </S.StyledSlider>
    </S.Main>
  );
};

export default VietnamSwiper;
