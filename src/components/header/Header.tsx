import { useState } from "react";
import * as S from "./Styles";

const Header = () => {
  const active = useState("active");

  return (
    <div>
      <S.HeaderWrpper>
        <S.BrandLogo />
        <S.MenuList>
          <S.NavigationLink>서비스</S.NavigationLink>
          <S.NavigationLink>뉴스룸</S.NavigationLink>
          <S.NavigationLink>찾아오는 길</S.NavigationLink>
          <S.NavigationLink>블로그</S.NavigationLink>
          <S.NavigationLink>
            <S.HeaderCareerImage /> 채용
          </S.NavigationLink>
        </S.MenuList>
        <S.MenuList>
          <S.LanguageSelection>
            <S.LanguageSelectionOption>KOR</S.LanguageSelectionOption>
          </S.LanguageSelection>
        </S.MenuList>
      </S.HeaderWrpper>
    </div>
  );
};

export default Header;
