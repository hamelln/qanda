import * as S from "./Styles";

const ProductView = () => {
  const describe = "";

  return (
    <S.ProductViewWrapper>
      <S.PageHeadingWrapper>
        <S.PageHeading>
          새로운 교육을 만들어 가는 <br />
          콴다의 서비스
        </S.PageHeading>
      </S.PageHeadingWrapper>
      <S.ProductViewSection>
        <S.ProductItem>
          <S.ProductLeftSide>
            <S.ProductLogoImage src="https://mathpresso.com/assets/images/product/product-logo-qanda.svg" />
          </S.ProductLeftSide>
          <S.ProductRightSide>
            <S.ProductCardWrapper>
              <S.ProductCardTitle>
                전 세계 6,000만 학생이 선택한
                <br></br>
                인공지능 공부앱 콴다
              </S.ProductCardTitle>
              <S.ProductCardDescription>
                전 세계에서 매월 1,300만 명의 학생이 사용하는 AI 학습
                플랫폼입니다. 모르는 문제를 찍으면 5초 안에 풀이를 제공해 주고
                유사 문제, 동영상 풀이, 개념서, 강의까지 제공합니다. 10만여 명의
                명문대 선생님들께 1:1로 질문하고, 커뮤니티에서 친구들과 학습
                정보를 공유할 수 있습니다.
              </S.ProductCardDescription>
              <S.ProductCardAward>
                • 20개국 교육차트 1위
                <br></br>• 센서타워 선정 '2021 아시아 태평양 어워드’ 대한민국
                최고의 교육 앱<br></br>• Google Play 선정 ‘올해의 자기계발 앱’
                우수상
                <br></br>• App Store 선정 ‘한국이 만들고 세계가 즐기는 앱’
              </S.ProductCardAward>
              <S.ProductCardLinks>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/google.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>Google Play</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="	https://mathpresso.com/assets/icons/apple.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>App Store</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
                <S.StoreButtonWrapper>
                  <S.StoreButtonIcon src="https://mathpresso.com/assets/icons/web.svg"></S.StoreButtonIcon>
                  <S.StoreButtonLabel>Web</S.StoreButtonLabel>
                </S.StoreButtonWrapper>
              </S.ProductCardLinks>
              <S.ProductCardSwiperContainer>
                <S.SwiperContainer>
                  <S.SwiperWrapper>
                    <S.SwiperItem></S.SwiperItem>
                  </S.SwiperWrapper>
                </S.SwiperContainer>
                <S.SwiperPagination></S.SwiperPagination>
                <S.ImageSlideButton></S.ImageSlideButton>
                <S.ImageSlideButton></S.ImageSlideButton>
              </S.ProductCardSwiperContainer>
            </S.ProductCardWrapper>
          </S.ProductRightSide>
        </S.ProductItem>
      </S.ProductViewSection>
    </S.ProductViewWrapper>
  );
};

export default ProductView;
