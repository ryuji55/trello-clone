import { memo } from "react";
import styled from "styled-components";

const Header = memo(() => {
  return (
    <>
      <HeaderContainer>
        <Title>Trello</Title>
      </HeaderContainer>
    </>
  );
});

const HeaderContainer = styled.div`
  text-align: center;
  padding: 4px 10%;
  margin-bottom: 50px;
  background-color: rgb(102, 94, 74);
`;

const Title = styled.h1`
  font-size: 45px;
  color: aliceblue;
  font-weight: 700;
  text-shadow: 2px 2px 2px black;
`;

export default Header;
