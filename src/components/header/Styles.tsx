import styled from "styled-components";

const HeaderWrpper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 40px;
  z-index: 1001;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const BrandLogo = styled.div`
  width: 128px;
  height: 18px;
  background: url(https://mathpresso.com/assets/logos/qanda-team.svg) center
    center / contain no-repeat;
  cursor: pointer;
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  & a {
    margin-left: 40px;
  }
`;

const NavigationLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 80px;
  font-size: 17px;
  font-weight: 500;
  text-align: right;
  color: rgb(51, 51, 51);
  cursor: pointer;
  text-decoration: none;
  /* border-bottom: 2px solid rgb(31, 31, 31); */
`;

const LanguageSelection = styled.span`
  position: relative;
  width: 64px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgb(249, 249, 249);
  cursor: pointer;
`;

const LanguageSelectionOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 1.5;
`;

const HeaderCareerImage = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 6px;
  background: url(https://mathpresso.com/assets/icons/icon-folder.svg) center
    center / contain no-repeat;
`;

export {
  HeaderWrpper,
  BrandLogo,
  MenuList,
  NavigationLink,
  LanguageSelection,
  LanguageSelectionOption,
  HeaderCareerImage,
};
