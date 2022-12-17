import styled from "styled-components";
import { Green, Black, Gray } from "../../../styles/theme";
import { SangChew } from "../../assets/images";

export default function GardenOwnerPage() {
  return (
    <Wrapper>
      <Title>
        <HighlightsText>룸메</HighlightsText>
        님의 <br />
        정원
      </Title>
      <Garden src={SangChew} />
      <LinkText>
        친구들에게 링크를 공유하고 편지를 <br />
        써달라고 요청하세요!
      </LinkText>
      <LinkBtn>링크 복사</LinkBtn>
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
const Garden = styled.img`
  margin-top: 279px;
  width: 294px;
  height: 294px;
`;
const LinkText = styled.span`
  color: ${Gray};
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  margin-top: 74px;
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
  margin-top: 34px;
`;
