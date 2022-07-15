import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(234, 234, 234);
`;

const CompanyText = styled.p`
  font-size: 14px;
  color: rgb(0, 0, 0);
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: rgb(116, 116, 116);
`;

export { CompanyText, CopyrightText, Wrapper };
