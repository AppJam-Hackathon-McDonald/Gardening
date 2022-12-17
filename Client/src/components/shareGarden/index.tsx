import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Green, Black, Gray } from "../../../styles/theme";
import {
  getName,
  inputPassword,
  shareGardenInfo,
} from "../../../utils/request";
import { SangChew, LeftArrow, RightArrow } from "../../assets/images";
import PassSlide from "../passSlide";

export default function GardenSharePage() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const id = location.pathname.slice(8, 32);
  const { data, isLoading } = useQuery(["getUserData"], () =>
    shareGardenInfo(id)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setName(data.userName);
      console.log(data.letters);
    }
  }, [isLoading]);
  return (
    <>
      <PassSlide setToggle={setToggle} toggle={toggle} />
      <Wrapper>
        <Title>
          <HighlightsText>{name}</HighlightsText>
          님의 <br />
          정원
        </Title>
        <Garden>
          <Arrow src={LeftArrow} />
          <GardenImg src={SangChew} />
          <Arrow src={RightArrow} />
        </Garden>
        <PageNums>2/3</PageNums>

        <LinkBtn onClick={() => navigate(`write`)}>정원 꾸며주기</LinkBtn>
        <LinkText onClick={() => setToggle(true)}>내 정원 보러가기</LinkText>
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
  top: 721px;
`;

const LinkText = styled.span`
  position: absolute;
  width: 226px;
  height: 23px;
  left: 84px;
  top: 803px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  text-decoration-line: underline;

  color: #454545;
`;
const PageNums = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${Green};
`;
