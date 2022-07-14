import styled from "styled-components";

const ProductViewWrapper = styled.div`
  padding-top: 80px;
`;

const PageHeadingWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 120px 0px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const PageHeading = styled.div`
  width: 100%;
  margin: 0px auto;
  font-size: 40px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const ProductViewSection = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding-bottom: 130px;
`;

const ProductItem = styled.li`
  display: flex;
  padding: 120px 0px;
`;

const ProductLeftSide = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 38.33%;
`;

const ProductRightSide = styled.div`
  width: 61.67%;
`;

const ProductLogoImage = styled.img`
  margin-top: 50px;
  height: 20px;
`;

const ProductCardWrapper = styled.div`
  color: rgb(51, 51, 51);
`;

const ProductCardTitle = styled.title`
  margin: 0px 0px 20px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
`;

const ProductCardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const ProductCardAward = styled.div`
  margin-top: 36px;
  padding-left: 8px;
  font-size: 16px;
  line-height: 1.5;
`;

const ProductCardLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ProductCardSwiperContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
  cursor: pointer;
`;

const StoreButtonWrapper = styled.a`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(239, 239, 239);
  color: rgb(51, 51, 51);
  text-decoration: none;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

const StoreButtonIcon = styled.img`
  height: 20px;
`;

const StoreButtonLabel = styled.span`
  margin-left: 9px;
  font-size: 14px;
  line-height: 1.5;
`;

const SwiperContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const SwiperWrapper = styled.div`
  /* transform: translate3d(-750px, 0px, 0px); */
  transition-duration: 0ms;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
`;

const SwiperPagination = styled.div`
  position: absolute;
  text-align: center;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
`;

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

const ImageSlideButton = styled.div``;

export {
  PageHeading,
  PageHeadingWrapper,
  ProductViewWrapper,
  ProductItem,
  ProductViewSection,
  ProductLeftSide,
  ProductRightSide,
  ProductLogoImage,
  ProductCardAward,
  ProductCardDescription,
  ProductCardLinks,
  ProductCardSwiperContainer,
  ProductCardTitle,
  ProductCardWrapper,
  StoreButtonWrapper,
  StoreButtonIcon,
  StoreButtonLabel,
  ImageSlideButton,
  SwiperContainer,
  SwiperPagination,
  SwiperWrapper,
  SwiperItem,
  SwiperImg,
  SwiperItemText,
};
