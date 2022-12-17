import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Green, Black, Gray } from "../../../styles/theme";
import { getName } from "../../../utils/request";
import { SangChew, LeftArrow, RightArrow } from "../../assets/images";
import Read from "../read/index";

export default function GardenOwnerPage() {
  const id = location.pathname.slice(8, 32);
  const { data: userName, isLoading } = useQuery(["getUserName"], () =>
    getName(id)
  );
  useEffect(() => {
    console.log(userName);
  }, [isLoading]);

  const onCopy = () => {
    navigator.clipboard
      .writeText(location.href.slice(0, 53))
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };
  return (
    <>
      <Wrapper>
        <Title>
          <HighlightsText>{userName}</HighlightsText>
          님의 <br />
          정원
        </Title>
        <Garden>
          <Arrow src={LeftArrow} />
          <GardenImg src={SangChew} />
          <Arrow src={RightArrow} />
        </Garden>
        <PageNums>2/3</PageNums>
        <LinkText>
          친구들에게 링크를 공유하고
          <br /> 편지를 써달라고 요청하세요! <br />
          자신에게 온 편지를 보고 싶으면 밑에
          <br />
          링크로 들어가주세요!
        </LinkText>
        <LinkBtn onClick={() => onCopy()}>링크 복사</LinkBtn>
      </Wrapper>
    </>
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
  position: absolute;
  top: 628px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #626262;
`;
const LinkBtn = styled.button`
  position: absolute;
  width: 326px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: ${Green};
  color: white;
  font-weight: 700;
  font-size: 25px;
  top: 717px;
`;
const PageNums = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${Green};
`;
