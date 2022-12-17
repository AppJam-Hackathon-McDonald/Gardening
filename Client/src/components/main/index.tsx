import styled from "styled-components";
import { Img_Logo } from "../../assets/images";

function MainPage() {
  return (
    <TotalWrapper>
      <TitleWrapper>
        <h1>Gardening</h1>
        <p>편지 & 꽃말</p>
      </TitleWrapper>
      <Logo src={Img_Logo} />
      <Info>
        자신의 정원을 생성한 후 <br />
        친구들에게 링크를 공유해보세요.
        <br />
        꽃말이 담긴 편지를 받을 수 있을 거예요!
      </Info>
      <Button>정원 만들기</Button>
    </TotalWrapper>
  );
}

export default MainPage;

const TotalWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 137px;
  > h1 {
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    color: ${({ theme }) => theme.title};
  }
  > p {
    font-weight: 300;
    font-size: 25px;
    line-height: 29px;
    color: ${({ theme }) => theme.subtitle};
  }
`;

const Logo = styled.img`
  margin-top: 37px;
`;

const Info = styled.p`
  margin-top: 68px;
  color: ${({ theme }) => theme.subtitle};
  text-align: center;
`;

const Button = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 326px;
  height: 60px;
  background-color: ${({ theme }) => theme.button};
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  border: none;
  margin-top: 48px;
`;
