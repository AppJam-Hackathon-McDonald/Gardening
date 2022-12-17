import styled from "styled-components";
import { Green, Black, Gray } from "../../../styles/theme";
import { SangChew, LeftArrow, RightArrow } from "../../assets/images";

export default function GardenSharePage() {
  return (
    <Wrapper>
      <Title>
        <HighlightsText>룸메</HighlightsText>
        님의 <br />
        정원
      </Title>
      <Garden>
        <Arrow src={LeftArrow} />
        <GardenImg src={SangChew} />
        <Arrow src={RightArrow} />
      </Garden>
      <PageNums>2/3</PageNums>
      <LinkBtn>링크 복사</LinkBtn>
      <LinkText>내 정원 보러가기 </LinkText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  gap: 74px;
  flex-direction: column; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  position: fixed;
  top: 111px;
  left: 28px;
  font-size: 40px;
  color: ${Black};
  font-weight: 900;
`;
const HighlightsText = styled.span`
  color: ${Green};
`;
const Garden = styled.div`
  margin-top: 279px;
  display: flex;
  align-items: center;
`;
const GardenImg = styled.img`
  width: 294px;
  height: 294px;
`;
const Arrow = styled.img`
  width: 42px;
  height: 42px;
`;
const LinkText = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  margin-top: 22px;
  text-align: center;
  text-decoration-line: underline;
  color: #454545;
  text-align: center;
`;
const LinkBtn = styled.button`
  width: 326px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: ${Green};
  color: white;
  font-weight: 700;
  font-size: 25px;
  margin-top: 100px;
`;
const PageNums = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${Green};
`;
