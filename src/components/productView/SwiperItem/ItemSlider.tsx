import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Styles";

const ItemSlider = () => {
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
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-qanda-1.png"></S.SwiperImg>
          <S.SwiperItemText>
            문제를 촬영하면 5초 안에 풀이가 나와요
          </S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-qanda-2.png"></S.SwiperImg>
          <S.SwiperItemText>
            모르는 문제가 성적 상승의 핵심! 콴다 프리미엄을 만나보세요
          </S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-qanda-3.png"></S.SwiperImg>
          <S.SwiperItemText>
            콴다 커뮤니티에서 학습 정보를 공유하세요
          </S.SwiperItemText>
        </S.SwiperItem>
        <S.SwiperItem>
          <S.SwiperImg src="https://mathpresso.com/assets/images/product/product-qanda-4.png"></S.SwiperImg>
          <S.SwiperItemText>
            10만여 명의 명문대 선생님들께 1:1 채팅으로 질문하세요
          </S.SwiperItemText>
        </S.SwiperItem>
      </S.StyledSlider>
    </S.Main>
  );
};

export default ItemSlider;
