import styled from "styled-components";

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
  transform: translate3d(-750px, 0px, 0px);
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
